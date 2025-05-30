import React, { useState, useEffect } from 'react';

const emojiList = ['😉', '😊', '😎', '🎬', '🍿'];

const Introd = () => {
  const [emojiIndex, setEmojiIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiIndex((prevIndex) => (prevIndex + 1) % emojiList.length);
    }, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-white px-4">
      <div className="bg-zinc-700 bg-opacity-30 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-all duration-500">
          Hello{' '}
          <span
            key={emojiIndex}
            className="inline-block transition-opacity duration-500 ease-in-out opacity-100"
          >
            {emojiList[emojiIndex]}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Let’s find your next favorite movie or series 🍿✨
        </p>
      </div>
    </div>
  );
};

export default Introd;
