import { useState, useEffect } from 'react';

const emojiList = ['😉', '😊', '😎', '🎬', '🍿'];

export default function Introd() {
  const emojiList = [
    '😉', '😊', '😎', '🎬', '🍿', '❤️', '💖', '🎥', '⭐', '💫', '📽️', '💜', '🖤', '🎞️', '✨'
  ];
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [bgAnim, setBgAnim] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
      setEmojiIndex((prev) => (prev + 1) % emojiList.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setBgAnim(true);
  }, []);

  const floatingEmojisCount = 12;
  const floatingEmojis = Array.from({ length: floatingEmojisCount }).map((_, i) => {
    const left = Math.random() * 90 + 2;
    const delay = Math.random() * 3;
    const size = 22 + Math.random() * 18;
    const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];
    return (
      <span
        key={i}
        className="absolute animate-emoji-float pointer-events-none select-none"
        style={{
          left: `${left}%`,
          bottom: '-40px',
          fontSize: `${size}px`,
          opacity: 0.7 + Math.random() * 0.3,
          animationDelay: `${delay}s`,
        }}
      >
        {emoji}
      </span>
    );
  });

  const heartCount = 8;
  const hearts = Array.from({ length: heartCount }).map((_, i) => {
    const left = Math.random() * 90 + 5;
    const delay = Math.random() * 3;
    const size = 18 + Math.random() * 16;
    return (
      <span
        key={i}
        className="absolute animate-heart"
        style={{
          left: `${left}%`,
          bottom: '-40px',
          fontSize: `${size}px`,
          color: '#ff6b81',
          opacity: 0.7 + Math.random() * 0.3,
          animationDelay: `${delay}s`,
        }}
      >
        ❤️
      </span>
    );
  });

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${bgAnim ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.7) 100%)',
          filter: 'blur(2px)',
        }}
      />
      <div
        style={{
          backgroundImage: "url('/background.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '90%',
          width: '70%',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          borderRadius: '2rem',
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
        }}
        className={`transition-transform duration-1000 ${bgAnim ? 'scale-100' : 'scale-95'}`}
      >
        <div className="absolute inset-0 pointer-events-none z-10">
          {floatingEmojis}
        </div>
        <div className="absolute inset-0 pointer-events-none z-20">
          {hearts}
        </div>
        <div className="relative z-20 text-white text-center px-4 flex">
          <div className="bg-opacity-0 p-8 rounded-2xl shadow-2xl mx-50 my-40  border border-white border-opacity-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2 drop-shadow-lg">
              Hello!{' '}
              <span
                className={`inline-block transition-transform duration-500 ${
                  animate ? 'scale-150 rotate-[20deg] animate-emoji-pop' : ''
                }`}
                style={{
                  transition: 'transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)',
                  display: 'inline-block',
                  filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.4))',
                }}
              >
                {emojiList[emojiIndex]}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 animate-fade-in flex items-center justify-center gap-2">
              Let’s find your next favorite movie or series{' '}
              <span className="animate-bounce inline-block text-2xl">🍿✨</span>
              <span className="animate-sparkle inline-block text-yellow-300 text-xl">★</span>
            </p>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 1s ease;
          }
          @keyframes emoji-float {
            0% {
              opacity: 0;
              transform: translateY(0) scale(1) rotate(-10deg);
            }
            10% {
              opacity: 1;
            }
            50% {
              transform: translateY(-120px) scale(1.2) rotate(10deg);
            }
            80% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(-220px) scale(0.8) rotate(-10deg);
            }
          }
          .animate-emoji-float {
            animation: emoji-float 3.5s linear infinite;
            pointer-events: none;
            user-select: none;
          }
          @keyframes emoji-pop {
            0% { transform: scale(1) rotate(0);}
            50% { transform: scale(1.5) rotate(20deg);}
            100% { transform: scale(1) rotate(0);}
          }
          .animate-emoji-pop {
            animation: emoji-pop 0.5s cubic-bezier(.68,-0.55,.27,1.55);
          }
          @keyframes sparkle {
            0%, 100% { opacity: 0.7; transform: scale(1);}
            50% { opacity: 1; transform: scale(1.3) rotate(10deg);}
          }
          .animate-sparkle {
            animation: sparkle 1.5s infinite;
          }
          @keyframes heart-float {
            0% {
              opacity: 0;
              transform: translateY(0) scale(1) rotate(-10deg);
            }
            10% {
              opacity: 1;
            }
            50% {
              transform: translateY(-120px) scale(1.2) rotate(10deg);
            }
            80% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(-220px) scale(0.8) rotate(-10deg);
            }
          }
          .animate-heart {
            animation: heart-float 3.5s linear infinite;
            pointer-events: none;
            user-select: none;
          }
        `}
      </style>
    </section>
  );
}
