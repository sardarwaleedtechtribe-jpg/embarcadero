import React, { useEffect, useState } from "react";

function ProductSection({
  id,
  logo,
  title,
  subtitle,
  description,
  image,
  blurColor,
  blurStyles = {},
  blurColor2,
  blurStyles2 = {},
}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getResponsiveStyle = (styles) => {
    const base = { ...styles };
    Object.keys(styles).forEach((key) => {
      if (key.startsWith("@media")) {
        const match = key.match(/\(min-width:\s*(\d+)px\)/);
        if (match && screenWidth >= parseInt(match[1], 10)) {
          Object.assign(base, styles[key]);
        }
        delete base[key]; 
      }
    });
    return base;
  };

  const resolvedBlur1 = getResponsiveStyle(blurStyles);
  const resolvedBlur2 = getResponsiveStyle(blurStyles2);

  return (
    <div id={id} className="bg-amber-10 relative w-full px-4 overflow-visible sm:mt-10 md:mt-10  lg:mt-0 pt-12 sm:pt-0 ">
      <div
        className="  relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row 
        items-center md:justify-between gap-6 xl:gap-8 2xl:gap-[260px]"
      >
        {/* --- Background Blur --- */}
        <div
          className={`absolute ${blurColor} blur-[0px] rounded-2xl z-0`}
          style={resolvedBlur1}
        />
        <div
          className={`absolute ${blurColor2} blur-[0px] rounded-2xl -z-90`}
          style={resolvedBlur2}
        />

        {/* --- Left Content --- */}
        <div
          className="flex flex-col items-center md:items-start gap-y-4  md:gap-4 text-base 
          sm:text-lg md:ml-10 2xl:-ml-30 sm:min-w-[564px] sm:max-w-[790px]
          w-full md:min-w-[380px] md:max-w-[400px]
          lg:max-w-[581px] xl:max-w-[621px] 2xl:max-w-[621px] 
          xl:flex-shrink-0"
        >
          <img
            src={logo}
            alt={`${title} logo`}
            className="min-w-[40px] max-w-[64px] min-h-[40px] max-h-[64px] object-cover rounded bg-transparent transition-transform duration-300 hover:scale-105"
          />

          <h2 className="text-3xl font-semibold text-center text-[30px]  lg:text-[40px] leading-[150%] text-neutral-800">
            {title}{" "}
            {subtitle && <span className="font-[300]">{subtitle}</span>}
          </h2>

          <p className="text-neutral-600 text-[16px] font-normal max-w-2xl text-center md:text-left lg:text-[20px]  xl:text-[24px] leading-[150%]">
            {description}
          </p>

          {/* --- Buttons --- */}
          <div className="flex flex-col sm:flex-row md:flex-row items-center justify-center md:justify-start mt-8 sm:mt-7 md:mt-5 gap-4 md:gap-3 lg:gap-4 w-full">
            <button className="cursor-pointer font-medium w-full sm:w-[165px] h-12 text-base border border-neutral-800 bg-neutral-800 text-white rounded-lg transition duration-150 hover:bg-neutral-800 hover:text-white flex items-center justify-center z-99">
              Start a Free Trial
            </button>

            <button className="cursor-pointer font-medium w-full sm:w-[137px] h-12 text-base border border-neutral-800 bg-white text-neutral-800 rounded-lg transition duration-150 hover:bg-neutral-800 hover:text-white flex items-center justify-center z-99 ">
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
            src={image}
            alt={title}
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

export default ProductSection;
