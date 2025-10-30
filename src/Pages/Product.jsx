import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import img1 from "/Assets/image19.svg";
import img2 from "/Assets/image20.svg";
import img3 from "/Assets/image21.svg";
import img4 from "/Assets/RAD.svg";
import img5 from "/Assets/image23.svg";
const Product = () => {
  const logos = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
  ];
  const breadcrumbs = [
    { label: "Home", color: "text-gray-600" },
    { label: "Products", color: "text-red-600" },
  ];

  return (
    <div className=" relative w-full min-h-[30vh] sm:min-h-[33vh] md:min-h-[40vh] lg:min-h-[45vh]   pb-12 md:pb-14    lg:pb-22 xl:pb-27  xl:min-h-[48vh] 2xl:min-h-[48vh] flex items-start justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative  z-10 w-full flex flex-col items-center justify-center">
        <div className="absolute bg-rose-500 opacity-5 blur-[400px] rounded-1x1 z-0 pointer-events-none 
        w-[869px] max-w-[862px] min-w-[862px]  h-[869] max-h-[860px] min-h-[862px] 
        right-1/2 -top-[5%] 
        translate-x-[85%] -translate-y-[20%] 
        sm:translate-x-[85%] sm:-translate-y-[-35%]
         md:translate-x-[110%] md:-translate-y-[20%]
        lg:translate-x-[130%] lg:-translate-y-[20%]
        xl:translate-x-[128%] xl:-translate-y-[-0%]
        2xl:translate-x-[150%] 2xl:-translate-y-[20%] 
        " aria-hidden="true" />

        <div  className="absolute bg-cyan-600 sm:bg-blue-[500px] md:bg-cyan-600 opacity-5 blur-[100px] rounded-2xl border border-white z-0 pointer-events-none
            w-[906px] max-w-[906px] min-w-[820px]
            h-[906px] max-h-[906px] min-h-[820px] sm:w-[320PX]
            left-1/2 top-[35%]
            -translate-x-[95%]  translate-y-[-30%] 
            sm:-translate-x-[72%] sm:translate-y-[-65%] 
            md:-translate-x-[115%] md:translate-y-[-5%] 
            lg:-translate-x-[122%] lg:translate-y-[-5%]
            xl:-translate-x-[155% ]  xl:translate-y-[-5%]
            2xl:-translate-x-[150%] 2xl:translate-y-[-3%] "
          aria-hidden="true"/>
        <div className="absolute bg-[#3037DE]/10 blur-[500px] rounded-2xl border border-white  z-0 pointer-events-none
            w-[495px] max-w-[495px] min-w-[495px]
            h-[495px] max-h-[495px] min-h-[495px] sm:w-[320PX]
            left-1/2 top-[-50%]
            -translate-x-[120%] -translate-y-[37%] sm:-translate-x-[140%] sm:-translate-y-[120px]  md:-translate-x-[145%] md:-translate-y-[80px] 
            lg:-translate-x-[150%] lg:-translate-y-[70px] xl:-translate-x-[150%] xl:-translate-y-[50px] 2xl:-translate-x-[200%] ]"
          aria-hidden="true" />
        <div  className="
    hidden 2xl:block
    absolute bg-[#3037DE]/10 blur-[500px] rounded-2xl z-0 pointer-events-none
    w-[650px] max-w-[650px] min-w-[650px]
    h-[650px] max-h-[650px] min-h-[650px]
    left-1/2 top-[35%]
    -translate-x-[170%] translate-y-[19%]
  " aria-hidden="true" />

        <div className="w-full flex flex-col items-center text-center  mt-16 xs:mt-20 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="w-full pt-4 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <nav
              className="max-w-4xl mx-auto w-full text-left flex items-center 
                  text-[14px] font-500 text-gray-500 z-20 -mt-14 xs:-mt-12 sm:-mt-10 md:-mt-14 lg:-mt-16 xl:-mt-24 
                  -translate-x-3 sm:-translate-x-7 md:-translate-x-11 lg:-translate-x-14 xl:-translate-x-38"
            >
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={item.label}>
                  <a href="#" className={`mr-2 ${item.color}`}>
                    {item.label}
                  </a>
                  {index < breadcrumbs.length - 1 && (
                    <span className="mr-2 text-gray-400">&gt;</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>

          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] 2xl:text-[64px] font-semibold bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent px-2 xs:px-4 mt-2">
            Developer Tools
          </h2>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl text-gray-600 mt-4 sm:mt-6 md:mt-8 lg:mt-8 xl:mt-8 px-2 xs:px-4 max-w-4xl">
            Trusted by Over Three Million Developers Worldwide.
          </p>
          <div className="w-full  flex flex-wrap justify-center items-center gap-3 xs:gap-4 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-12 my-6 sm:my-8 md:my-10 lg:my-12 xl:my-12 px-2 xs:px-4">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"
              >
                <img
                  src={logo.img}
                  alt={`logo${idx + 1}`}
                  className="object-contain h-auto w-[40px] sm:w-[48px] md:w-[48px] lg:w-[48px] xl:w-[50px]"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full mt-4  sm:mt-6 md:mt-8 lg:mt-10  xl:mt-4">
            <a
              href="#"
              className="flex items-center justify-center bg-gray-100 rounded-full w-10 h-10 xs:w-12 xs:h-12 sm:w-[48px] sm:h-[48px] md:w-16 md:h-16 lg:w-[60px] lg:h-[60px] xl:w-14 xl:h-14 shadow hover:bg-gray-200 transition-all transform hover:scale-110 duration-200"
            >
              <FaArrowDownLong className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
