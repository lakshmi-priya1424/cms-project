import React from "react";

const AboutPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{
        backgroundImage:
          "linear-gradient(rgba(20,20,20,0.85), rgba(20,20,20,0.85)), url('https://assets.nflxext.com/ffe/siteui/vlv3/7e6e7e3d-7c7e-4e6e-8c3e-2c6e7e3e7e3e/7e6e7e3d-7c7e-4e6e-8c3e-2c6e7e3e7e3e_BG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Movie & Series Image */}
        <div className="flex justify-center">
          <img
            src="https://wallpapers.com/images/hd/movie-pictures-gpui8crwapvn1v96.jpg"
            alt="Movies and Series"
            className="rounded-2xl shadow-lg w-full max-w-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right: About Box */}
        <div className="relative">
          {/* About Icon */}
          <img
            src="https://cdn.dribbble.com/userupload/22835178/file/original-fc9fa00046009fe6fb6f3283a33e07c8.gif"
            alt="About Icon"
            className="w-20 h-20 absolute -top-10 left-1/2 -translate-x-1/2 rounded-full shadow-xl z-10"
          />

          {/* Info Box */}
          <div className="bg-white bg-opacity-90 shadow-xl rounded-2xl p-8 pt-16 text-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer group">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600 group-hover:text-indigo-800 transition-colors duration-300">
              About Our Platform
            </h2>
            <p className="text-gray-700 text-base mb-4">
              Welcome to our movie and series customization platform! We specialize in delivering a
              personalized entertainment experience for every viewer.
            </p>
            <ul className="text-left text-sm text-gray-600 space-y-2">
              <li className="hover:text-indigo-700 transition-colors duration-200">
                🎬 Genre-based recommendations
              </li>
              <li className="hover:text-indigo-700 transition-colors duration-200">
                ⭐ Tailored suggestions based on your ratings
              </li>
              <li className="hover:text-indigo-700 transition-colors duration-200">
                📺 Track series by seasons and episodes
              </li>
              <li className="hover:text-indigo-700 transition-colors duration-200">
                🎯 Discover trending and editor’s picks
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
              Click this box to learn how we customize your watching journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
