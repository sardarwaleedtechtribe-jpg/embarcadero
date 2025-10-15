import React from "react";
import img3 from "/Assets/image3.svg";
import img6 from "/Assets/image22.svg";

function RAD() {
  return (
    <div className="relative w-full sm:py-12 overflow-hidden">
      <div className="absolute   bg-indigo-500 opacity-10 blur-[600px] rounded-full w-[65vw] h-[80vh] sm:w-[55vw] sm:h-[70vh] md:w-[45vw] md:h-[60vh] left-[-15vw] top-[-10vh] z-0" />
      <div className="absolute   bg-[#6366F1] opacity-10 blur-[360px]  rounded-full w-[65vw] h-[80vh] sm:w-[55vw] sm:h-[70vh] md:w-[45vw] md:h-[60vh] left-[-5vw] top-[-8vh] z-0" />
      <div className="absolute   bg-[#F43F5E] opacity-10 blur-[380px]  rounded-full w-[70vw] h-[85vh] sm:w-[60vw] sm:h-[75vh] md:w-[50vw] md:h-[65vh] right-[-20vw] top-[-8vh] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4 md:gap-6 text-base sm:text-lg">
          <img src={img6} alt="RAD Section" className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded bg-transparent transition-transform duration-300 hover:scale-105"/>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">RAD Studio 11.2</h2>
          <p className="text-gray-700 max-w-2xl text-center md:text-left">RAD Studio® is the ultimate IDE for building single-source multi-platform native apps with Delphi® and modern C++ using advanced Windows desktop UI libraries ready for Windows 11.</p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
            <button className="px-5 sm:px-6 py-2 border border-black bg-black text-white rounded-lg transition-colors duration-150 hover:bg-gray-900 hover:text-white">Start a Free Trial</button>
            <button className="px-5 sm:px-6 py-2 bg-white text-gray-800 rounded-lg hover:bg-black hover:text-white transition">View Details</button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={img3} alt="RAD Section" className="w-full h-auto max-h-[480px] sm:max-h-[560px] md:max-h-[640px] object-contain"/>
        </div>
      </div>
    </div>
  );
}

export default RAD;
 