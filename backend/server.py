from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import httpx


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Discord Webhook URL
DISCORD_WEBHOOK_URL = os.environ.get('DISCORD_WEBHOOK_URL', '')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Yetkili Başvuru Model
class YetkiliBasvuruCreate(BaseModel):
    isim: str
    discordId: str
    email: str
    yas: int
    oyunSuresi: int
    oncekiDeneyim: Optional[str] = ""
    neden: str
    hakkinda: Optional[str] = ""
    uygunluk: str

class YetkiliBasvuru(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    isim: str
    discordId: str
    email: str
    yas: int
    oyunSuresi: int
    oncekiDeneyim: Optional[str] = ""
    neden: str
    hakkinda: Optional[str] = ""
    uygunluk: str
    durum: str = "beklemede"  # beklemede, onaylandi, reddedildi
    tarih: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Yetkili Şikayet Model
class YetkiliSikayetCreate(BaseModel):
    isim: str
    discordId: str
    yetkiliIsmi: str
    tarih: str
    kategori: str
    aciklama: str
    kanit: Optional[str] = ""

class YetkiliSikayet(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    isim: str
    discordId: str
    yetkiliIsmi: str
    olayTarihi: str
    kategori: str
    aciklama: str
    kanit: Optional[str] = ""
    durum: str = "inceleniyor"  # inceleniyor, cozuldu, reddedildi
    tarih: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Yetkili Feedback Model
class YetkiliFeedbackCreate(BaseModel):
    isim: Optional[str] = "Anonim"
    discordId: Optional[str] = ""
    kategori: str
    puan: Optional[int] = 0
    baslik: str
    mesaj: str
    oneri: Optional[str] = ""

class YetkiliFeedback(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    isim: Optional[str] = "Anonim"
    discordId: Optional[str] = ""
    kategori: str
    puan: Optional[int] = 0
    baslik: str
    mesaj: str
    oneri: Optional[str] = ""
    durum: str = "yeni"  # yeni, okundu, cevaplandi
    tarih: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Oyuncu Başvuru Model
class OyuncuBasvuruCreate(BaseModel):
    isim: str
    discordId: str
    email: str
    yas: int
    rpDeneyim: str
    oncekiSunucular: Optional[str] = ""
    karakterHikayesi: str
    neden: str
    uygunluk: str
    kurallarKabul: bool = True

class OyuncuBasvuru(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    isim: str
    discordId: str
    email: str
    yas: int
    rpDeneyim: str
    oncekiSunucular: Optional[str] = ""
    karakterHikayesi: str
    neden: str
    uygunluk: str
    kurallarKabul: bool = True
    durum: str = "beklemede"  # beklemede, onaylandi, reddedildi
    tarih: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# ===================== YETKİLİ BAŞVURU API =====================
@api_router.post("/basvuru", response_model=YetkiliBasvuru)
async def create_basvuru(input: YetkiliBasvuruCreate):
    basvuru_obj = YetkiliBasvuru(**input.model_dump())
    doc = basvuru_obj.model_dump()
    doc['tarih'] = doc['tarih'].isoformat()
    await db.basvurular.insert_one(doc)
    return basvuru_obj

@api_router.get("/basvuru", response_model=List[YetkiliBasvuru])
async def get_basvurular():
    basvurular = await db.basvurular.find({}, {"_id": 0}).sort("tarih", -1).to_list(1000)
    for b in basvurular:
        if isinstance(b.get('tarih'), str):
            b['tarih'] = datetime.fromisoformat(b['tarih'])
    return basvurular

@api_router.patch("/basvuru/{basvuru_id}/durum")
async def update_basvuru_durum(basvuru_id: str, durum: str):
    result = await db.basvurular.update_one(
        {"id": basvuru_id},
        {"$set": {"durum": durum}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Başvuru bulunamadı")
    return {"message": "Durum güncellendi", "durum": durum}

@api_router.delete("/basvuru/{basvuru_id}")
async def delete_basvuru(basvuru_id: str):
    result = await db.basvurular.delete_one({"id": basvuru_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Başvuru bulunamadı")
    return {"message": "Başvuru silindi"}

# ===================== YETKİLİ ŞİKAYET API =====================
@api_router.post("/sikayet", response_model=YetkiliSikayet)
async def create_sikayet(input: YetkiliSikayetCreate):
    sikayet_data = input.model_dump()
    sikayet_data['olayTarihi'] = sikayet_data.pop('tarih')
    sikayet_obj = YetkiliSikayet(**sikayet_data)
    doc = sikayet_obj.model_dump()
    doc['tarih'] = doc['tarih'].isoformat()
    await db.sikayetler.insert_one(doc)
    return sikayet_obj

@api_router.get("/sikayet", response_model=List[YetkiliSikayet])
async def get_sikayetler():
    sikayetler = await db.sikayetler.find({}, {"_id": 0}).sort("tarih", -1).to_list(1000)
    for s in sikayetler:
        if isinstance(s.get('tarih'), str):
            s['tarih'] = datetime.fromisoformat(s['tarih'])
    return sikayetler

@api_router.patch("/sikayet/{sikayet_id}/durum")
async def update_sikayet_durum(sikayet_id: str, durum: str):
    result = await db.sikayetler.update_one(
        {"id": sikayet_id},
        {"$set": {"durum": durum}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Şikayet bulunamadı")
    return {"message": "Durum güncellendi", "durum": durum}

@api_router.delete("/sikayet/{sikayet_id}")
async def delete_sikayet(sikayet_id: str):
    result = await db.sikayetler.delete_one({"id": sikayet_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Şikayet bulunamadı")
    return {"message": "Şikayet silindi"}

# ===================== YETKİLİ FEEDBACK API =====================
@api_router.post("/feedback", response_model=YetkiliFeedback)
async def create_feedback(input: YetkiliFeedbackCreate):
    feedback_obj = YetkiliFeedback(**input.model_dump())
    doc = feedback_obj.model_dump()
    doc['tarih'] = doc['tarih'].isoformat()
    await db.feedbackler.insert_one(doc)
    return feedback_obj

@api_router.get("/feedback", response_model=List[YetkiliFeedback])
async def get_feedbackler():
    feedbackler = await db.feedbackler.find({}, {"_id": 0}).sort("tarih", -1).to_list(1000)
    for f in feedbackler:
        if isinstance(f.get('tarih'), str):
            f['tarih'] = datetime.fromisoformat(f['tarih'])
    return feedbackler

@api_router.patch("/feedback/{feedback_id}/durum")
async def update_feedback_durum(feedback_id: str, durum: str):
    result = await db.feedbackler.update_one(
        {"id": feedback_id},
        {"$set": {"durum": durum}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Feedback bulunamadı")
    return {"message": "Durum güncellendi", "durum": durum}

@api_router.delete("/feedback/{feedback_id}")
async def delete_feedback(feedback_id: str):
    result = await db.feedbackler.delete_one({"id": feedback_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Feedback bulunamadı")
    return {"message": "Feedback silindi"}

# ===================== DISCORD WEBHOOK =====================
async def send_discord_webhook(basvuru: OyuncuBasvuru):
    """Discord'a oyuncu başvuru bildirimi gönder"""
    if not DISCORD_WEBHOOK_URL:
        logger.warning("Discord webhook URL tanımlanmamış")
        return False
    
    # RP Deneyim seviyesi
    rp_deneyim_map = {
        "yeni": "🌱 Yeni (0-6 ay)",
        "orta": "📈 Orta Seviye (6 ay - 2 yıl)",
        "deneyimli": "⭐ Deneyimli (2+ yıl)",
        "profesyonel": "👑 Profesyonel (5+ yıl)"
    }
    
    # Uygunluk seviyesi
    uygunluk_map = {
        "az": "⏰ Haftada 1-5 saat",
        "orta": "⏰ Haftada 5-15 saat",
        "cok": "⏰ Haftada 15-30 saat",
        "fulltime": "⏰ Haftada 30+ saat"
    }
    
    rp_deneyim_text = rp_deneyim_map.get(basvuru.rpDeneyim, basvuru.rpDeneyim)
    uygunluk_text = uygunluk_map.get(basvuru.uygunluk, basvuru.uygunluk)
    
    # Discord Embed mesajı
    embed = {
        "title": "🎮 Yeni Oyuncu Başvurusu!",
        "description": f"**{basvuru.isim}** sunucumuza katılmak için başvuru yaptı.",
        "color": 0x00FF00,  # Yeşil renk
        "thumbnail": {
            "url": "https://customer-assets.emergentagent.com/job_roleplay-community/artifacts/33eo1rkm_fedV-Logo4tra.png"
        },
        "fields": [
            {
                "name": "👤 İsim / Rumuz",
                "value": basvuru.isim,
                "inline": True
            },
            {
                "name": "💬 Discord ID",
                "value": basvuru.discordId,
                "inline": True
            },
            {
                "name": "📧 E-posta",
                "value": basvuru.email,
                "inline": True
            },
            {
                "name": "🎂 Yaş",
                "value": str(basvuru.yas),
                "inline": True
            },
            {
                "name": "🎭 RP Deneyimi",
                "value": rp_deneyim_text,
                "inline": True
            },
            {
                "name": "📅 Haftalık Uygunluk",
                "value": uygunluk_text,
                "inline": True
            },
            {
                "name": "🏠 Önceki Sunucular",
                "value": basvuru.oncekiSunucular if basvuru.oncekiSunucular else "Belirtilmedi",
                "inline": False
            },
            {
                "name": "📖 Karakter Hikayesi",
                "value": basvuru.karakterHikayesi[:1000] + "..." if len(basvuru.karakterHikayesi) > 1000 else basvuru.karakterHikayesi,
                "inline": False
            },
            {
                "name": "❓ Neden FED:V?",
                "value": basvuru.neden[:1000] + "..." if len(basvuru.neden) > 1000 else basvuru.neden,
                "inline": False
            },
            {
                "name": "📋 Başvuru ID",
                "value": f"`{basvuru.id}`",
                "inline": True
            },
            {
                "name": "📊 Durum",
                "value": "⏳ Beklemede",
                "inline": True
            }
        ],
        "footer": {
            "text": "FED:V Oyuncu Başvuru Sistemi",
            "icon_url": "https://customer-assets.emergentagent.com/job_roleplay-community/artifacts/33eo1rkm_fedV-Logo4tra.png"
        },
        "timestamp": basvuru.tarih.isoformat()
    }
    
    payload = {
        "username": "FED:V Başvuru Bot",
        "avatar_url": "https://customer-assets.emergentagent.com/job_roleplay-community/artifacts/33eo1rkm_fedV-Logo4tra.png",
        "embeds": [embed]
    }
    
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(DISCORD_WEBHOOK_URL, json=payload)
            if response.status_code in [200, 204]:
                logger.info(f"Discord webhook başarıyla gönderildi: {basvuru.id}")
                return True
            else:
                logger.error(f"Discord webhook hatası: {response.status_code} - {response.text}")
                return False
    except Exception as e:
        logger.error(f"Discord webhook gönderim hatası: {str(e)}")
        return False

# ===================== OYUNCU BAŞVURU API =====================
@api_router.post("/oyuncu-basvuru", response_model=OyuncuBasvuru)
async def create_oyuncu_basvuru(input: OyuncuBasvuruCreate):
    basvuru_obj = OyuncuBasvuru(**input.model_dump())
    doc = basvuru_obj.model_dump()
    doc['tarih'] = doc['tarih'].isoformat()
    await db.oyuncu_basvurular.insert_one(doc)
    
    # Discord'a webhook gönder
    await send_discord_webhook(basvuru_obj)
    
    return basvuru_obj

@api_router.get("/oyuncu-basvuru", response_model=List[OyuncuBasvuru])
async def get_oyuncu_basvurular():
    basvurular = await db.oyuncu_basvurular.find({}, {"_id": 0}).sort("tarih", -1).to_list(1000)
    for b in basvurular:
        if isinstance(b.get('tarih'), str):
            b['tarih'] = datetime.fromisoformat(b['tarih'])
    return basvurular

@api_router.patch("/oyuncu-basvuru/{basvuru_id}/durum")
async def update_oyuncu_basvuru_durum(basvuru_id: str, durum: str):
    result = await db.oyuncu_basvurular.update_one(
        {"id": basvuru_id},
        {"$set": {"durum": durum}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Başvuru bulunamadı")
    return {"message": "Durum güncellendi", "durum": durum}

@api_router.delete("/oyuncu-basvuru/{basvuru_id}")
async def delete_oyuncu_basvuru(basvuru_id: str):
    result = await db.oyuncu_basvurular.delete_one({"id": basvuru_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Başvuru bulunamadı")
    return {"message": "Başvuru silindi"}

# ===================== ADMIN STATS API =====================
@api_router.get("/admin/stats")
async def get_admin_stats():
    basvuru_count = await db.basvurular.count_documents({})
    sikayet_count = await db.sikayetler.count_documents({})
    feedback_count = await db.feedbackler.count_documents({})
    oyuncu_basvuru_count = await db.oyuncu_basvurular.count_documents({})
    
    bekleyen_basvuru = await db.basvurular.count_documents({"durum": "beklemede"})
    incelenen_sikayet = await db.sikayetler.count_documents({"durum": "inceleniyor"})
    yeni_feedback = await db.feedbackler.count_documents({"durum": "yeni"})
    bekleyen_oyuncu = await db.oyuncu_basvurular.count_documents({"durum": "beklemede"})
    
    return {
        "basvuru": {"toplam": basvuru_count, "bekleyen": bekleyen_basvuru},
        "sikayet": {"toplam": sikayet_count, "incelenen": incelenen_sikayet},
        "feedback": {"toplam": feedback_count, "yeni": yeni_feedback},
        "oyuncuBasvuru": {"toplam": oyuncu_basvuru_count, "bekleyen": bekleyen_oyuncu}
    }

# ===================== ADMIN AUTH API =====================
ADMIN_PASSWORD = "Berat-sancakfed09"

@api_router.post("/admin/login")
async def admin_login(password: str):
    if password == ADMIN_PASSWORD:
        return {"success": True, "message": "Giriş başarılı"}
    else:
        raise HTTPException(status_code=401, detail="Yanlış şifre")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()