import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ video, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300 p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Fixed position */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/50"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
            <span>Kapat (ESC)</span>
          </button>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/50 border-2 border-purple-500/50">
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Video Info */}
        <div className="mt-6 text-center bg-gradient-to-br from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-white text-2xl font-bold mb-3">
            {video.title}
          </h3>
          <p className="text-gray-300 text-lg">
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
