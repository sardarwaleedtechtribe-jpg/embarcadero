import React from "react";
import img3 from "/Assets/image5.svg";
import img6 from "/Assets/image19.svg";

function Delphi() {
  return (
    <div className="relative w-full px-4 py-8 sm:py-12 overflow-hidden">
      <div className="absolute   bg-[#6366F1] opacity-10 blur-[360px] rounded-full w-[65vw] h-[80vh] sm:w-[55vw] sm:h-[70vh] md:w-[45vw] md:h-[60vh] left-[-15vw] top-[10vh] z-0" />
      <div className="absolute   bg-[#F43F5E] opacity-10 blur-[380px] rounded-full w-[70vw] h-[85vh] sm:w-[60vw] sm:h-[75vh] md:w-[50vw] md:h-[65vh] right-[-20vw] top-[15vh] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 md:ml-5 flex flex-col items-center md:items-start gap-4 md:gap-6 text-base sm:text-lg">
          <img
            src={img6}
            alt="Delphi 11.2"
            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded bg-transparent transition-transform duration-300 hover:scale-105"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            Delphi 11.2
          </h2>
          <p className="text-gray-700 max-w-2xl text-center md:text-left">
            Delphi® is the original IDE for building single-source
            multi-platform native apps with powerful visual design features,
            best-in-class Windows integration, and up to 5x productivity gains.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
            <button className="px-5 sm:px-6 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition">
              Start a Free Trial
            </button>
            <button className="px-5 sm:px-6 py-2 bg-white text-gray-800 rounded-lg hover:bg-black hover:text-white transition">
              View Details
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 max-w-3xl mx-auto md:mx-0 flex justify-center md:justify-end">
          <img
            src={img3}
            alt="Delphi 11.2"
            className="w-full h-auto max-h-[480px] sm:max-h-[560px] md:max-h-[640px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Delphi;
