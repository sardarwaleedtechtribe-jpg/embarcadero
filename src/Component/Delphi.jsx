import React from "react";
import logo1 from "/Assets/image5.svg";
import img2 from "/Assets/image19.svg";

function Delphi() { 
  return (
    <div className=" relative  w-full px-4  overflow-visible  ">
      <div className="relative z-10 max-w-7xl mx-auto  flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0.5 lg:gap-0 xl:gap-6 2xl:gap-[84px] ">
       
        <div className="absolute bg-cyan-500 opacity-22 blur-[500px] rounded-2x2  
        w-[906px] h-[656px]  left-[-100px] bottom-[-250px]  
         sm:left-[-350px] sm:bottom-[-250px] sm:h-[850px]   
         md:left-[-550px] md:bottom-[-350px]   md:h-[700px]
         lg:left-[-440px] lg:bottom-[-420px]   lg:h-[730px]
         xl:left-[-700px] xl:bottom-[-440px]   xl:h-[800px]
         2xl:left-[-700px] 2xl:bottom-[-510px]   
         z-0" />
        <div className="absolute bg-indigo-500 opacity-25 blur-[500px] rounded-2x2  
        w-[644px] h-[644px]  right-[-350px] bottom-[-450px]
       sm:right-[-330px] sm:bottom-[-400px]  
        md:right-[-380px] md:bottom-[-350px]
        lg:right-[-350px] lg:bottom-[-340px] lg:h-[560px]
        xl:right-[-440px] xl:bottom-[-450px] xl:h-[660px]
        2xl:right-[-630px] 2xl:bottom-[-470px] 2xl:h-[684px]
        z-0" />
        
        {/* Left Content */}
        <div  className="flex flex-col items-center md:items-start
          gap-y-4 md:gap-4
          text-base 
          sm:text-lg md:ml-10 2xl:ml-0 sm:min-w-[564px] sm:max-w-[790px]
          w-full 
          md:min-w-[380px] md:max-w-[400px]
          lg:max-w-[581px] 
          xl:max-w-[621px] 
          2xl:max-w-[621px]
          md:flex-shrink-70
          lg:flex-shrink-10
          xl:flex-shrink-0 "
        >
          <img
            src={img2}
            alt="Delphi"
            className="min-w-[40px] max-w-[64px] min-h-[40px] max-h-[64px]  object-cover rounded bg-transparent transition-transform duration-300 hover:scale-105"
          />

          <h2 className="text-3xl  font-semibold text-center md:text-left sm:text-3xl md:text-4xl 2xl:text-[40px] leading-[150%] text-neutral-800">
            Delphi <span className="font-normal">11.2</span>
          </h2>

          <p className="text-neutral-600 text-[18px] font-normal max-w-2xl text-center md:text-left lg:text-[20px] xl:text-[24px] leading-[150%]">
            Delphi® is the original IDE for building single-source multi-platform native apps with powerful visual design features and best-in-class Windows integration and up to 5x productivity gains.
          </p>

          <div className="flex items-center justify-center flex-col mt-8 sm:mt-7 md:mt-5 gap-4 md:justify-start sm:gap-4 md:gap-3 lg:gap-4 sm:flex-row md:flex-row w-full">
            <div className="flex items-center justify-center w-full sm:min-w-[165px] sm:max-w-[165px] sm:min-h-[48px] sm:max-h-[52px] md:w-auto">
              <button className="cursor-pointer font-medium w-full  px-1 py-4 h-12 text-base border border-neutral-800 bg-neutral-800 text-white rounded-lg transition-colors duration-150 hover:bg-neutral-800 hover:text-white md:text-md flex items-center justify-center">
                Start a Free Trial
              </button>
            </div>

            <div className="flex items-center justify-center font-medium w-full sm:min-w-[137px] sm:max-w-[137px] sm:max-h-[48px] lg:max-h-[52px] ">
              <button className="cursor-pointer w-full  px-1 py-1 h-12 text-base border border-neutral-800 bg-white text-neutral-800 rounded-lg transition-colors duration-150 hover:bg-neutral-800 hover:text-white md:text-md flex items-center justify-center font-medium">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="w-full z-10 flex items-center justify-center 
          min-w-[343px] max-w-[400px] min-h-[285px] max-h-[350px]
          sm:min-w-[400px] sm:max-w-[562px] sm:min-h-[400px] sm:max-h-[470px] 
          md:min-w-[350px] md:max-w-[435px] 
          lg:min-w-[460px] lg:max-w-[561px] 
          lg:min-h-[500px] lg:max-h-[513px]
          xl:min-w-[615px]  xl:max-w-[623px]  xl:min-h-[709px]  xl:max-h-[511px]
         2xl:min-w-[661px] 2xl:max-w-[886px] 2xl:min-h-[709px] 2xl:max-h-[710px] "
        >
          <img
            src={logo1}
            alt="Delphi 11.2"
            className="block max-w-none min-w-[343px] min-h-[285px] sm:min-w-[562px] sm:min-h-[468px] md:min-w-[300px] md:min-h-[411px] lg:min-w-[500px] lg:min-h-[500px] xl:min-w-[613px] xl:max-h-[511px] 2xl:min-w-[661px] 2xl:min-h-[550px] object-contain"
          />
        </div>

      </div>
    </div>
  );
}

export default Delphi;
