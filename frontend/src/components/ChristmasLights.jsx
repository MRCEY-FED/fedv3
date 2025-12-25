import React from 'react';

const ChristmasLights = () => {
  const lights = [
    { color: 'bg-red-500', shadow: 'shadow-red-500/50', delay: '0s' },
    { color: 'bg-yellow-500', shadow: 'shadow-yellow-500/50', delay: '0.2s' },
    { color: 'bg-green-500', shadow: 'shadow-green-500/50', delay: '0.4s' },
    { color: 'bg-blue-500', shadow: 'shadow-blue-500/50', delay: '0.6s' },
    { color: 'bg-pink-500', shadow: 'shadow-pink-500/50', delay: '0.8s' },
    { color: 'bg-purple-500', shadow: 'shadow-purple-500/50', delay: '1s' },
    { color: 'bg-orange-500', shadow: 'shadow-orange-500/50', delay: '1.2s' },
    { color: 'bg-cyan-500', shadow: 'shadow-cyan-500/50', delay: '1.4s' },
    { color: 'bg-red-500', shadow: 'shadow-red-500/50', delay: '1.6s' },
    { color: 'bg-yellow-500', shadow: 'shadow-yellow-500/50', delay: '1.8s' },
    { color: 'bg-green-500', shadow: 'shadow-green-500/50', delay: '2s' },
    { color: 'bg-blue-500', shadow: 'shadow-blue-500/50', delay: '2.2s' },
  ];

  return (
    <div className="fixed top-16 left-0 right-0 z-40 pointer-events-none">
      {/* Wire */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      
      {/* Lights */}
      <div className="flex justify-around items-start px-8">
        {lights.map((light, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Wire connector */}
            <div className="w-0.5 h-3 bg-gray-700"></div>
            
            {/* Light bulb */}
            <div
              className={`w-4 h-6 ${light.color} rounded-b-full ${light.shadow} shadow-lg animate-pulse`}
              style={{
                animationDelay: light.delay,
                animationDuration: '2s'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChristmasLights;
