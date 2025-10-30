
import React from "react";
import img11 from "/Assets/image4.svg";
import img12 from "/Assets/image20.svg";

function RADServer() {
  return (
    <div className="relative w-full px-4 overflow-visible">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6 xl:gap-8 2xl:gap-[74px]">

        {/* --- Background Blur --- */}
        <div
          className="absolute bg-indigo-500/10 blur-[340px] rounded-2xl  
          w-[678px] h-[678px] 
          left-[-420px] top-[-10px] -translate-y-1/2 
          sm:left-[-320px] sm:top-[-80px]
          md:left-[-380px] md:top-[280px] md:h-[420px]
          lg:left-[-320px] lg:top-[280px] lg:h-[448px] 
          xl:left-[-220px] xl:top-[335px] xl:h-[678px] 
          2xl:left-[-338px] 2xl:top-[335px] 2xl:h-[678px]
          z-[-900]"
        />

        {/* --- Left Column --- */}
        <div
          className="flex flex-col items-center md:items-start gap-y-4 md:gap-4 text-base 
          sm:text-lg md:ml-10 2xl:ml-0 sm:min-w-[564px] sm:max-w-[790px]
          w-full md:min-w-[380px] md:max-w-[400px]
          lg:max-w-[581px] xl:max-w-[621px] 2xl:max-w-[621px]
          xl:flex-shrink-0"
        >
          <img
            src={img12}
            alt="RAD Server Logo"
            className="min-w-[40px] max-w-[64px] min-h-[40px] max-h-[64px] object-cover rounded bg-transparent transition-transform duration-300 hover:scale-105"
          />

          <h2 className="text-3xl font-semibold text-center md:text-left sm:text-3xl md:text-4xl 2xl:text-[40px] leading-[150%] tracking-normal text-neutral-800">
            RAD Server
          </h2>

          <p className="text-neutral-600 text-[18px] font-normal max-w-2xl text-center md:text-left 2xl:text-[24px] leading-[150%] tracking-normal">
            Enterprise-grade REST API application platform available as
            on-premise or deployable to the cloud. Generate database APIs
            instantly in Delphi® and C++Builder® to build apps faster.
          </p>

          {/* --- Buttons --- */}
          <div className="flex flex-col sm:flex-row md:flex-row items-center justify-center md:justify-start mt-8 sm:mt-7 md:mt-5 gap-4 md:gap-3 lg:gap-4 w-full">
            <button className="cursor-pointer font-medium w-full sm:w-[165px] h-12 text-base border border-neutral-800 bg-neutral-800 text-white rounded-lg transition duration-150 hover:bg-neutral-800 hover:text-white flex items-center justify-center">
              Start a Free Trial
            </button>

            <button className="cursor-pointer font-medium w-full sm:w-[137px] h-12 text-base border border-neutral-800 bg-white text-neutral-800 rounded-lg transition duration-150 hover:bg-neutral-800 hover:text-white flex items-center justify-center">
              View Details
            </button>
          </div>
        </div>

        {/* --- Right Image --- */}
        <div
          className="w-full z-10 flex items-center justify-center 
          min-w-[343px] max-w-[400px] min-h-[285px] max-h-[350px]
          sm:min-w-[400px] sm:max-w-[562px] sm:min-h-[400px] sm:max-h-[470px] 
          md:min-w-[350px] md:max-w-[435px] 
          lg:min-w-[460px] lg:max-w-[561px] lg:min-h-[500px] lg:max-h-[553px]
          xl:min-w-[615px] xl:max-w-[623px] xl:min-h-[709px] xl:max-h-[709px]
          2xl:min-w-[661px] 2xl:max-w-[886px] 2xl:min-h-[709px] 2xl:max-h-[709px]"
        >
          <img
            src={img11}
            alt="RAD Server Illustration"
            className="block max-w-none 
            min-w-[343px] min-h-[285px] 
            sm:min-w-[562px] sm:min-h-[468px] 
            md:min-w-[300px] md:min-h-[411px] 
            lg:min-w-[500px] lg:min-h-[500px] 
            xl:min-w-[613px] xl:max-h-[511px] 
            2xl:min-w-[661px] 2xl:min-h-[550px] 
            object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default RADServer;
