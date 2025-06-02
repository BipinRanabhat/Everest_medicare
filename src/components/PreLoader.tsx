import React from 'react';

const PreLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#2D1B69] to-[#1a0f3d]">
      <div className="relative">
        {/* Outer pulsing ring */}
        <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#FF4B6E]"></div>
        
        {/* Inner container with gradient border */}
        <div className="relative w-64 h-64 rounded-full p-1 bg-gradient-to-r from-[#FF4B6E] via-[#ff6b87] to-[#FF4B6E]">
          {/* Image container */}
          <div className="w-full h-full rounded-full overflow-hidden bg-[#2D1B69] p-1">
            <img 
              src="/images/Everest_homecare-modified.png" 
              alt="Everest Health Care Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Company name */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center w-full">
          <h2 className="text-2xl font-bold text-[#FF4B6E] mb-2">
            Everest Health Care
          </h2>
          <p className="text-white/80 text-sm tracking-wider">
            COMPASSIONATE & RELIABLE
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreLoader; 