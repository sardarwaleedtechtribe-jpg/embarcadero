import React from "react";
import img9 from "/Assets/image.svg";
import img10 from "/Assets/image20.svg";

function InterBase() {
  return (
    <div className=" relative  w-full px-4  overflow-visible  ">
      <div className="relative z-10 max-w-7xl mx-auto  flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0.5 lg:gap-0 xl:gap-7 2xl:gap-[70px] ">
 
      <div className="absolute bg-rose-600 opacity-5 blur-[850px] rounded-[40px] w-[35rem] h-[35rem]  right-[-22rem] top-[26rem] -translate-y-1/2 sm:top-[26rem] z-0" />



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
                    src={img10}
                    alt="InterBase"
                    className="min-w-[40px] max-w-[64px] min-h-[40px] max-h-[64px]  object-cover rounded bg-transparent transition-transform duration-300 hover:scale-105"
                  />

                <h2 className="text-3xl font-semibold text-center md:text-left sm:text-3xl md:text-4xl 2xl:text-[40px] leading-[150%] text-neutral-800 md:tracking-tighter">
                  InterBase 2020 <span className="font-normal">Update 3</span>
                </h2>

                <p className="text-neutral-600 text-[18px] font-normal max-w-2xl text-center md:text-left lg:text-[20px] xl:text-[24px] leading-[150%]">
                  InterBase® is a full-featured, encryptable, scalable, embeddable and multi-platform relational SQL database with commercial-grade data security, disaster recovery and change synchronization 
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
                  lg:min-w-[460px] lg:max-w-[561px] lg:min-h-[500px] lg:max-h-[660px]
                  xl:min-w-[615px] xl:max-w-[623px] xl:min-h-[709px] xl:max-h-[709px]
                  2xl:min-w-[661px] 2xl:max-w-[886px] 2xl:min-h-[709px] 2xl:max-h-[709px]"
                >
                  <img
                    src={img9}
                    alt="InterBase 2020"
                    className="block max-w-none 
                    min-w-[343px] min-h-[285px] 
                    sm:min-w-[562px] sm:min-h-[468px] 
                    md:min-w-[300px] md:min-h-[411px] 
                    lg:min-w-[510px] lg:min-h-[500px] 
                    xl:min-w-[613px] xl:max-h-[511px] 
                   2xl:min-w-[661px] 2xl:min-h-[550px]
                     object-contain"
                  />
                </div>

      </div>
    </div>
  );
}

export default InterBase;
