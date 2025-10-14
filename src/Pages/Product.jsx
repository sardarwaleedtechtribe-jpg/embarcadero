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

  return (
    <div className="w-full xs:min-h-[40vh] sm:min-h-[30vh] md:min-h-screen lg:min-h-screen flex items-start md:items-center justify-center px-2 xs:px-3 sm:px-6 lg:px-8 ">
      <div className="absolute border-1 border-white bg-blue-500 opacity-10 blur-[50px] w-[60vw] h-[80vh] md:w-[50vw] md:h-[70vh] lg:w-[40vw] lg:h-[60vh] xl:w-[35vw] xl:h-[50vh] left-[-10vw] top-[-15vh] md:left-[-8vw] md:top-[-12vh] lg:left-[-6vw] lg:top-[-10vh] lg:top-[2.5vh] xl:left-[-4vw] xl:top-[13vh]"/>
      <div className="absolute border-1 border-white opacity-10 blur-[80px] bg-[#E11D48] w-[70vw] h-[80vh] md:w-[60vw] md:h-screen lg:w-[50vw] lg:h-screen xl:w-[25vw] xl:h-screen left-[30vw] top-[-20vh] md:left-[35vw] md:top-[13.5vh] lg:left-[40vw] lg:top-[-15vh] xl:left-[50vw] xl:top-[-10vh]"/>
      <div className="w-full flex flex-col items-center justify-center ">
        <div className="w-full flex flex-col items-center text-center mt-16 xs:mt-20 sm:mt-8 md:mt-0 lg:mt-30">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-7xl  lg:text-6xl xl:text-8xl 2xl:text-6xl font-semibold bg-gradient-to-r from-fuchsia-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent px-2 xs:px-4 mt-2 xs:mt-4 sm:mt-6 md:mt-0">
            Developer Tools
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-3xl text-gray-600 mt-2 xs:mt-3 sm:mt-4 md:mt-6 lg:mt-8 px-2 xs:px-4 max-w-4xl">
            Trusted by Over Three Million Developers Worldwide.
          </p>

          <div className="my-4 xs:my-6 sm:my-8 md:my-14 mt-4 lg:my-13 w-full px-2 xs:px-4 mt-4 xs:mt-6 sm:mt-8 md:mt-6 lg:mt-8 xl:my-16">
            <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-14 items-center">
              {logos.map((logo, idx) => (
                <div
                  key={idx}
                  className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"
                >
                  <img
                    src={logo.img}
                    alt={`logo${idx + 1}`}
                    className="object-contain h-auto max-w-[48px] xs:max-w-[56px] sm:max-w-[72px] md:w-[65px] lg:w-[55px] xl:w-[160px]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center w-full mt-2 xs:mt-4 sm:mt-6 md:mt-8  lg:mt-10 mb-6">
            <a
              href="#"
              className="flex items-center justify-center bg-gray-100 rounded-full w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-22 xl:h-22 2xl:w-40 2xl:h-40 shadow hover:bg-gray-200 transition-all transform hover:scale-110 duration-200"
            >
              <FaArrowDownLong className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-9xl" />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Product;
