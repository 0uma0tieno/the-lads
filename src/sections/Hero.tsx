import React, { useState, useEffect } from 'react';
import DecorativeBlob from '../components/DecorativeBlob';

const Hero: React.FC = () => {
  const [bgPosition, setBgPosition] = useState(50);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setBgPosition(50 + offset * 0.1);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Total animation takes ~5.5s to type and 1s to fade in, so ~6.5s.
    // We want a 1s pause, so we'll restart the animation every 7.5 seconds.
    const animationInterval = setInterval(() => {
        setAnimationKey(prevKey => prevKey + 1);
    }, 7500);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        clearInterval(animationInterval);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: `url('https://picsum.photos/seed/techbg/1920/1080')`,
        backgroundPositionY: `${bgPosition}%`
      }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      
      {/* Decorative Blobs */}
      <DecorativeBlob className="-top-20 -left-20 w-80 h-80 opacity-40" color="#C3E8C9" />
      <DecorativeBlob className="-bottom-20 -right-20 w-96 h-96 opacity-30" color="#F1AC20" shapeIndex={1} animationDelay="3s" />

      {/* The key prop forces a re-mount of this div, which restarts all its CSS animations */}
      <div key={animationKey} className="relative text-center px-6 z-10">
        <h1 className="text-5xl md:text-8xl font-bold text-[#293855] uppercase tracking-tighter flex flex-col items-center">
          <span className="type-line-1">We Build<span className="text-[#C3E8C9]">.</span></span>
          <span className="type-line-2">We Code<span className="text-[#F1AC20]">.</span></span>
          <span className="type-line-3">We Play<span className="text-[#293855]">.</span></span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-[#293855]/80 opacity-0 animate-fadeIn">
          Empowering young minds to turn ideas into real-world tech.
        </p>
      </div>
      <style>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink {
          50% { border-color: transparent; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        h1 > span {
          display: block;
          overflow: hidden;
          white-space: nowrap;
          border-right: .1em solid #F1AC20;
          width: 0;
          margin: 0.25rem auto;
        }
        
        .type-line-1 {
          animation-name: typing, blink;
          animation-duration: 1.5s, .75s;
          animation-timing-function: steps(9, end), step-end;
          animation-delay: 0.5s, 0.5s;
          animation-iteration-count: 1, 2;
          animation-fill-mode: forwards;
        }

        .type-line-2 {
          animation-name: typing, blink;
          animation-duration: 1.2s, .75s;
          animation-timing-function: steps(8, end), step-end;
          animation-delay: 2.5s, 2.5s;
          animation-iteration-count: 1, 2;
          animation-fill-mode: forwards;
        }

        .type-line-3 {
          animation-name: typing, blink;
          animation-duration: 1.2s, .75s;
          animation-timing-function: steps(8, end), step-end;
          animation-delay: 4.2s, 4.2s;
          /* Let the cursor blink a few times before the animation resets */
          animation-iteration-count: 1, 3;
          animation-fill-mode: forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out 5.5s forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;