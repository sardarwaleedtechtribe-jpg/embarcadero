import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import img1 from '/Assets/image19.svg';
import img2 from '/Assets/image20.svg';
import img3 from '/Assets/image21.svg';
import img4 from '/Assets/image22.svg';
import img5 from '/Assets/image23.svg';

const Product = () => {
    const logos = [
      { img: img1 },
      { img: img2 },
      { img: img3 },
      { img: img4 },
      { img: img5 },
    ];
  
    return (
        
      <div className="w-full h-65.5 xs:min-h-[40vh] sm:min-h-[60vh] md:min-h-screen lg:min-h-screen flex items-start md:items-center justify-center px-2 xs:px-3 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-100 via-pink-50 to-red-100 overflow-x-hidden">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center text-center mt-16 xs:mt-20 sm:mt-8 md:mt-0">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl  lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold bg-gradient-to-r from-fuchsia-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent px-2 xs:px-4 mt-2 xs:mt-4 sm:mt-6 md:mt-0">
              Developer Tools
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 mt-2 xs:mt-3 sm:mt-4 md:mt-6 lg:mt-8 px-2 xs:px-4 max-w-4xl">
              Trusted by Over Three Million Developers Worldwide.
            </p>
            
            <div className="my-4 xs:my-6 sm:my-8 md:my-10 lg:my-12 w-full px-2 xs:px-4 mt-4 xs:mt-6 sm:mt-8 md:mt-0">
              <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                {logos.map((logo, idx) => (
                  <div
                    key={idx}
                    className={`transition-transform duration-300 hover:scale-110 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 flex items-center justify-center`}
                  >
                    <img
                      src={logo.img}
                      alt={`logo${idx + 1}`}
                      className="w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center w-full mt-2 xs:mt-4 sm:mt-6 md:mt-8 lg:mt-10">
              <a
                href="#"
                className="flex items-center justify-center bg-gray-100 rounded-full w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 shadow hover:bg-gray-200 transition-all transform hover:scale-110 duration-200"
              >
                <FaArrowDownLong className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Product;
























  
// function Product() {
//     return (
//         <div className="w-full p-4 md:px-8 bg-gradient-to-r from-blue-100 via-pink-50 to-red-100 min-h-[30vh] md:min-h-[60vh] lg:min-h-[80vh]">
//             <div className="max-w-7xl mx-auto flex flex-col items-center justify-center align min-h-[45vh]">
//                 <div className="w-full flex flex-col items-center text-center">
//                     <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-fuchsia-600 to-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
//                         Developer Tools
//                     </h2>
//                     <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 mt-3 sm:mt-4 md:mt-8">
//                         Trusted by Over Three Million Developers Worldwide.
//                     </p>
//                     <div className="my-6 sm:my-8 md:my-12 w-full">
//                         <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 items-center">
//                             <img className="transition-transform duration-300 hover:scale-105 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src={img4} alt="logo1" />
//                             <img className="transition-transform duration-300 hover:scale-105 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src={img1} alt="logo2" />
//                             <img className="transition-transform duration-300 hover:scale-105 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src={img5} alt="logo3" />
//                             <img className="transition-transform duration-300 hover:scale-105 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src={img2} alt="logo4" />
//                             <img className="transition-transform duration-300 hover:scale-105 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src={img3} alt="logo5" />
//                         </div>
//                     </div>
//                     <div className="flex justify-center w-full">
//                         <a
//                             href="#"
//                             className="flex items-center justify-center mt-6 sm:mt-8 md:mt-10 bg-gray-100 rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 shadow hover:bg-gray-200 transition-colors transform hover:scale-110 duration-200"
//                         >
//                             <FaArrowDownLong className="text-2xl xs:text-3xl sm:text-4xl" />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Product;
