import React from "react";
import img3 from "/Assets/GRAD.svg";
import img6 from "/Assets/RAD.svg";

function RAD() {
  return (
    <div className="relative  w-full px-4 py-8 sm:py-14 md:py-20 lg:py-24 xl:py-32 overflow-visible ">
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-12 md:gap-16 lg:gap-20 xl:gap-24">
      <div className="absolute bg-rose-600 opacity-15 blur-[68px] rounded-[40px] w-[15rem] h-[20rem] sm:w-[20rem] sm:h-[25rem] md:w-[25rem] md:h-[30rem] right-[-12rem] top-1/2 -translate-y-1/2 z-0" />
      <div className="absolute bg-cyan-500 opacity-25 blur-[178px] rounded-full w-[250px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] left-[-100px] top-[20px] sm:left-[-150px] sm:top-[-100px] md:left-[-180px] md:top-[-130px] z-0" />
      
      <div className="w-full md:w-4/5 md:ml-auto flex flex-col items-center md:items-start gap-6 md:gap-8 lg:gap-10 xl:gap-12 text-base sm:text-lg">
          <img src={img6}  alt="C++ Builder "  className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded bg-transparent transition-transform duration-300 hover:scale-105" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left  ">  RAD Studio 11.2   </h2> {/*lg:text-6xl font-bold text-center md:text-left */}
          <p className="text-gray-700 max-w-2xl text-center md:text-left">
                RAD Studio® is ultimate IDE for building single-source multi-platform native apps with Delphi® and modern C++ using advanced Windows desktop UI libraries ready for Windows 11          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-5 md:flex-row w-full">
            <div className="flex justify-center items-center w-full md:w-auto">
              <button className="w-full md:w-auto px-6 py-4 h-12 text-base border border-black bg-black text-white rounded-lg transition-colors duration-150 hover:bg-gray-900 hover:text-white md:text-lg flex items-center justify-center">
                Start a Free Trial
              </button>
            </div>

            <div className="flex justify-center items-center w-full md:w-auto">
              <button className="w-full md:w-auto px-6 py-4 h-12 text-base bg-white text-gray-800 rounded-lg hover:bg-black hover:text-white transition md:text-lg flex items-center justify-center">
                View Details
              </button>
            </div>
          </div>

        </div>

        <div className="w-full md:w-1/2 max-w-7xl mx-auto md:mx-0 flex justify-center md:justify-end">
          <img  src={img3}  alt="Delphi 11.2"  className="w-full h-auto max-h-[640px] sm:max-h-[720px] md:max-h-[800px] lg:max-h-[900px] xl:max-h-[960px] object-contain"/>
        </div>
      </div>
    </div>
  );
}

export default RAD;
 