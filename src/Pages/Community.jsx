import React from "react";
import img1 from '/Assets/map.svg';

function Community() {
  return (
    <div className="relative w-full px-4 py-8 sm:py-12 mt-0 sm:mt-0 overflow-visible [clip-path:inset(0_0_20px_0)]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between">
        <div className="absolute bg-inzdigo-500 opacity-200 blur-[80px] rounded-full  w-[250px] h-[350px] sm:w-[300px] sm:h-[450px] md:w-[350px] md:h-[480px]  left-[-100px] top-[-200px] sm:left-[-150px] sm:top-[-250px] md:left-[-180px] md:top-[-280px]  z-0" />
        <div className="absolute bg-cyan-500 opacity-[0.1] blur-[110px] rounded-full  w-[190px] h-[110px] sm:w-[250px] sm:h-[180px] md:w-[300px] md:h-[240px]  left-[-90px] bottom-[-500] sm:bottom-[-130px] md:bottom-[-180px] z-0" />

        <div className="w-full md:w-1/2 md:ml-5 flex flex-col items-center md:items-start gap-4 md:gap-6 text-base sm:text-lg z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left w-full">  
            <span className="text-gray-900">Join Our </span>
            <span className="bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent">
              Global Developer Community
            </span> 
          </h2>
          <p className="text-gray-700 max-w-2xl text-center md:text-left">  Join our email list and receive the latest case studies, event updates, product news, and much more.
          </p>
          <form className="w-full flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <input type="email"  placeholder="Your Email"  className="w-[343px] h-[52px] sm:w-[377px] sm:h-[52px] xl:w-[361px] xl:h-[48px] px-4 py-2.5 sm:py-3 text-sm rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-400" />
            <button  className="w-[343px] h-[52px] sm:w-full sm:h-[52px] md:w-auto md:h-[48px] px-5 sm:px-6 py-2 border border-black bg-black text-white rounded-lg transition-colors duration-150 hover:bg-gray-900 hover:text-white cursor-pointer" > Subscribe </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 max-w-3xl mx-auto md:mx-0 flex justify-center md:justify-end z-10">
          <img
            src={img1}
            alt="Global Community"
            className={`w-full h-auto max-h-[480px] sm:max-h-[560px] md:max-h-[640px] object-contain ${
              window.innerWidth < 768 ? "mt-2 sm:mt-3" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default Community;
