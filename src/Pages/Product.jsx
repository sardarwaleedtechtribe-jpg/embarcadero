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
    <div className="relative w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[75vh] xl:min-h-[70vh] xl:min-h-[90vh] flex items-start justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Breadcrumbs */}
      <div className="absolute top-[20px] left-[50px] xs:left-[30px] sm:left-[40px] md:left-[150px] lg:left-[200px] text-sm text-gray-600 z-20">
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={item.label}>
            <span className={`mr-2 ${item.color}`}>{item.label}</span>
            {index < breadcrumbs.length - 1 && (
              <span className="mr-2 text-gray-400">&gt;&gt;</span>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Background Blurs */}
      <div className="absolute bg-cyan-500 opacity-[5%] blur-[40px] rounded-full w-[906px] h-[906px] sm:w-[85vw] sm:h-[110vh] md:w-[75vw] md:h-[100vh] left-[-20vw] top-[15vh] sm:left-[-40vw] sm:top-[25vh] md:left-[-43vw] md:top-[47vh] z-0" />
      <div className="absolute bg-rose-600 opacity-[5%] blur-[40px] rounded-full w-[190vw] h-[120vh] sm:w-[85vw] sm:h-[110vh] md:w-[75vw] md:h-[100vh] right-[-20vw] top-[-15vh] sm:right-[-40vw] sm:top-[-30vh] md:right-[-50vw] md:top-[-45vh] z-0" />
      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center text-center 
          mt-16 xs:mt-20 sm:mt-8 md:mt-16 
          lg:mt-24 xl:mt-28">
          {/* Heading */}
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] 2xl:text-[64px] font-semibold bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent px-2 xs:px-4 mt-2">
            Developer Tools
          </h2>
          {/* Paragraph */}
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl text-gray-600 mt-4 sm:mt-6 md:mt-8 lg:mt-8 xl:mt-8 px-2 xs:px-4 max-w-4xl" style={{ fontSize: "calc(20px + 0.4vw)" }}>
            Trusted by Over Three Million Developers Worldwide.
          </p>
          {/* Logos */}
          {/* <div className="my-6 sm:my-8 md:my-10 lg:my-12 xl:my-12 w-full px-2 xs:px-4 ">
            <div className="bg-black flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-12 items-center">
              {logos.map((logo, idx) => (
                <div key={idx}  className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"  >
                  <img  src={logo.img}  alt={`logo${idx + 1}`}  className="object-contain h-auto w-[40px] sm:w-[48px] md:w-[48px] lg:w-[48px] xl:w-[50px]" />
                </div>
              ))}
            </div>
          </div> */}
          <div className="w-full  flex flex-wrap justify-center items-center gap-3 xs:gap-4 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-12 my-6 sm:my-8 md:my-10 lg:my-12 xl:my-12 px-2 xs:px-4">
            {logos.map((logo, idx) => (
              <div key={idx}  className="transition-transform duration-300 hover:scale-110 flex items-center justify-center" >
                <img   src={logo.img}  alt={`logo${idx + 1}`}   className="object-contain h-auto w-[40px] sm:w-[48px] md:w-[48px] lg:w-[48px] xl:w-[50px]"/>
              </div>
            ))}
          </div>
          {/* Down Arrow */}
          <div className="flex justify-center w-full mt-4 sm:mt-6 md:mt-8 lg:mt-0  xl:mt-4 mb-6">
            <a href="#" className="flex items-center justify-center bg-gray-100 rounded-full w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-14 xl:h-14 shadow hover:bg-gray-200 transition-all transform hover:scale-110 duration-200">
              <FaArrowDownLong className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
