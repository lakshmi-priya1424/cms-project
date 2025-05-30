import React, { useState, useEffect } from 'react';

const emojiList = ['😉', '😊', '😎', '🎬', '🍿'];
const imageList = [
  "https://wallpapercave.com/wp/wp11685752.jpg",
  "https://dataconomy.com/wp-content/uploads/2023/10/Disney-AI-characters_03-1536x914.jpg",
  "https://img.freepik.com/premium-photo/hawk-hunts-fly-catching-rodents-with-birds-ai-generated_124715-4186.jpg",
  "https://i.ytimg.com/vi/oqFH_wlkcwU/maxresdefault.jpg",
];

const Introd = () => {
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const emojiInterval = setInterval(() => {
      setEmojiIndex((prev) => (prev + 1) % emojiList.length);
    }, 3000);
    return () => clearInterval(emojiInterval);
  }, []);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % imageList.length);
    }, 2000);
    return () => clearInterval(bgInterval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background images with fade transition */}
      {imageList.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`background-${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === bgIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ filter: 'brightness(1) contrast(1.1) saturate(1.2)' }}
        />
      ))}

      {/* Optional overlay to make text pop */}
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>

      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="bg-zinc-700 bg-opacity-30 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
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
    </div>
  );
};

export default Introd;

