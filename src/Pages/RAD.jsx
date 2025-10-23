import React from "react";
import img3 from "/Assets/GRAD.svg";
import img6 from "/Assets/RAD.svg";

function RAD() {
  return (
    <div className=" relative  w-full px-4 py-8 sm:py-14 md:py-20 lg:py-24 xl:py-32 overflow-visible ">
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-12 md:gap-16 lg:gap-20 xl:gap-24">
{/* Right blur (rose) */}
<div  className="absolute bg-rose-600 opacity-10 blur-[50px] rounded-[30px] w-[8rem] h-[34rem] top-1/2 right-[-2rem] -translate-y-1/2 z-0  xs:w-[10rem] xs:h-[30rem] xs:right-[-5rem]
 sm:w-[24rem] sm:h-[48rem] sm:right-[-18rem] md:w-[18rem] md:h-[36rem] md:right-[-14rem] lg:right-[-14rem] lg:w-[16rem] lg:h-[32rem]"/>

<div className="absolute bg-indigo-500 opacity-10 blur-[50px] rounded-full w-[80px] h-[380px] left-[-25px] top-[40px] z-0 xs:w-[220px] xs:h-[00px] xs:left-[-100px] xs:top-[20px]
    sm:w-[350px] sm:h-[600px] sm:left-[-200px] sm:top-[-40px]  md:w-[350px] md:h-[350px] md:left-[-250px] md:top-[-10px]"/>

        <div className="w-full md:w-4/5 md:ml-auto flex flex-col items-center md:items-start gap-6 md:gap-8 lg:gap-10 xl:gap-12 text-base sm:text-lg">
          <img
            src={img6}
            alt="C++ Builder "
            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded bg-transparent transition-transform duration-300 hover:scale-105"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left  ">
            {" "}
            RAD Studio 11.2{" "}
          </h2>{" "}
          {/*lg:text-6xl font-bold text-center md:text-left */}
          <p className="text-gray-700 max-w-2xl text-center md:text-left">
            RAD Studio® is ultimate IDE for building single-source
            multi-platform native apps with Delphi® and modern C++ using
            advanced Windows desktop UI libraries ready for Windows 11{" "}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-5 md:flex-row w-full">
            <div className="flex justify-center items-center w-full md:w-auto">
              <button className="cursor-pointer w-full md:w-auto px-6 py-4 h-12 text-base border border-black bg-black text-white rounded-lg transition-colors duration-150 hover:bg-gray-900 hover:text-white md:text-lg flex items-center justify-center">
                Start a Free Trial
              </button>
            </div>

            <div className="flex justify-center items-center w-full md:w-auto">
              <button className="cursor-pointer w-full md:w-auto px-6 py-4 h-12 text-base bg-white text-gray-800 rounded-lg hover:bg-black hover:text-white transition-all duration-500 md:text-lg flex items-center justify-center">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 max-w-7xl mx-auto md:mx-0 flex justify-center md:justify-end">
          <img
            src={img3}
            alt="Delphi 11.2"
            className="w-full h-auto max-h-[640px] sm:max-h-[720px] md:max-h-[800px] lg:max-h-[900px] xl:max-h-[960px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default RAD;
