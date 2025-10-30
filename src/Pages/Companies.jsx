import React, { useEffect, useState } from 'react';
import img1 from '/Assets/logo2.svg';
import img2 from '/Assets/logo3.svg';
import img3 from '/Assets/logo4.svg';
import img4 from '/Assets/logo5.svg';
import img5 from '/Assets/logo6.svg';
import img6 from '/Assets/logo7.svg';
import img7 from '/Assets/logo1.svg';
import img8 from '/Assets/logo8.svg';
import img9 from '/Assets/logo9.svg';
import img10 from '/Assets/logo10.svg';
import img11 from '/Assets/logo11.svg';
import img12 from '/Assets/logo12.svg';
import img13 from '/Assets/logo13.svg';
import img14 from '/Assets/logo14.svg';
import img15 from '/Assets/logo15.svg';

function Companies() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 746);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 746);
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const baseLogos = [
    { src: img1, customWidth: { base: 74, sm: 106 } },
    { src: img2, customWidth: { base: 64, sm: 91 } },
    { src: img3, customWidth: { base: 79, sm: 113 } },
    { src: img4, customWidth: { base: 80, sm: 141 } },
    { src: img5, customWidth: { base: 93, sm: 148 } },
    { src: img6, customWidth: { base: 84, sm: 94 } },
    { src: img7, customWidth: { base: 135, sm: 194 } },
    { src: img14, customWidth: { base: 95, sm: 65 } },
    { src: img15, customWidth: { base: 76, sm: 76 } },
  ];

  const extraLogos = [
    { src: img8 ,customWidth: { base: 86, sm: 86 }},
    { src: img9 ,customWidth: { base: 86, sm: 106 }},
    { src: img10 ,customWidth: { base: 80, sm: 90 }},
    { src: img11 ,customWidth: { base: 96, sm: 140 }},
    { src: img12 ,customWidth: { base: 76, sm: 66 }},
    { src: img13, customWidth: { base: 95, sm: 100 } },
  ];

  const logosToShow = isMobile ? [...baseLogos, ...extraLogos] : baseLogos;

  const getResponsiveWidth = (logo) => {
    if (!logo.customWidth) return undefined;
    const { base, sm, md, lg, xl, '2xl': x2l } = logo.customWidth;
    if (width >= 1536 && x2l) return x2l;
    if (width >= 1280 && xl) return xl;
    if (width >= 1024 && lg) return lg;
    if (width >= 768 && md) return md;
    if (width >= 640 && sm) return sm;
    return base;
  };

  return (
    <div className="relative w-full px-4 py-[70px] pb-[120px] sm:py-14 flex flex-col items-center gap-6 sm:gap-8 overflow-visible">
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center gap-6 sm:gap-8">
        
        {/* Background Blur */}
        <div
          className="absolute bg-cyan-500 opacity-10 blur-[400px] rounded-2x1 
          w-[731px] h-[731px] right-[-550px] top-[-190px]
          sm:right-[-500px] sm:top-[-280px]
          md:top-[-220px] md:right-[-500px]
          lg:right-[-485px] lg:top-[-280px]
          xl:top-[-370px] xl:right-[-570px]
          2xl:right-[-700px] 2xl:top-[-400px] z-0"
        />

        {/* Heading */}
        <p className="text-center text-xl xl:text-2xl font-400 max-w-4xl z-10">
          The world's leading companies rely on software built with Embarcadero products
        </p>

        {/* Logos */}
        <div
          className="flex flex-wrap justify-center sm:justify-around items-center gap-6 sm:gap-8 mt-4 md:gap-[24px] z-10
          xl:w-[1280px]
          2xl:w-[1536px]"
        >
          {logosToShow.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={`company logo ${idx + 1}`}
              className="object-contain transition-transform duration-300 hover:scale-110 h-[28px] sm:h-[40px]"
              style={
                logo.customWidth
                  ? { width: `${getResponsiveWidth(logo)}px` }
                  : {}
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Companies;
