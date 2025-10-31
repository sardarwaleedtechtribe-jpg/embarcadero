import React from "react";
import logo from "/Assets/embarcader.svg";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className=" relative w-full overflow-hidden bg-white">
      <div
        className="absolute bg-indigo-500/10 border border-white rounded-full 
        w-[497px] h-[497px] top-[5101px] left-[1515px] backdrop-blur-[500px] rotate-0 z-0"
      />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 py-8 sm:py-12 ">
        <div className="flex flex-col 2xl:flex-row 2xl:gap-50">
          {/* logo */}
          <div className="mb-8 sm:mb-10 2xl:mb-0 2xl:mAX-w-[447px]">
            <img
              src={logo}
              alt="Embarcadero logo"
              className="h-8 sm:h-10 w-auto 2xl:w-[291px] 2xl:h-[40px]"
            />
          </div>

          {/* grid columns */}
          <div
            className=" 
              grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-6
              gap-6 sm:gap-4 lg:gap-0
              w-full max-w-[1281px] 2xl:max-w-[1600px]
              2xl:min-mr-70 2xl:max-mr-74 
            "
          >
            {/* Column 1 */}
            <div  className="">
              <h4 className="font-semibold text-base sm:text-lg  pb-[28px] lg:font-bold 2xl:text-[20px] 2xl:leading-[20px]">
                Products
              </h4>
              <ul className="space-y-6 text-xs sm:text-sm 2xl:pb-[24px] xl:text-[16px]">
                {[
                  "RAD STUDIO™",
                  "DELPHI®",
                  "C++BUILDER®",
                  "INTERBASE®",
                  "RAD SERVER™",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-700 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="xl:min-w-[222px]  ">  
              <h4 className="font-semibold text-base sm:text-lg pb-[28px] 2xl:text-[20px] 2xl:leading-[20px]">
                Free Tools
              </h4>
              <ul className="space-y-6 text-xs sm:text-sm 2xl:space-y-4 2xl:pb-[24px] 2xl:text-[16px]">
                {[
                  "C++ Compiler",
                  "C++Builder Community ED",
                  "DELPHI Community ED",
                  "REST Debugger",
                  "INTERBASE Developer Edition",
                  "FMX STENCILS",
                  "DEV-C++",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-700 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="lg:ml-14 2xl:min-w-[177px] 2xl:max-w-[177px]">
              <h4 className="font-semibold text-base sm:text-lg pb-[28px] 2xl:text-[20px] 2xl:leading-[20px]">
                Resources
              </h4>
              <ul className="space-y-6 text-xs sm:text-sm 2xl:space-y-4 2xl:pb-[24px] 2xl:text-[16px] 2xl:leading-[20px] lg:tracking-tight ">
                {[
                  "Events and Webinars",
                  "White Papers",
                  "Success Stories",
                  "For Educators",
                  "Partners",
                  "Certifications",
                  "MVP Program",
                  "WEB APP Development",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-700 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div className="lg:ml-8 2xl:min-w-[177px] 2xl:max-w-[177px]">
              <h4 className="font-semibold text-base sm:text-lg pb-[28px] 2xl:text-[20px] 2xl:leading-[20px]">
                Community
              </h4>
              <ul className="space-y-6 text-xs sm:text-sm 2xl:space-y-4 2xl:pb-[24px] 2xl:text-[16px] 2xl:leading-[20px]">
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-blue-700 transition-colors"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h4 className="font-semibold text-base sm:text-lg pb-[28px] 2xl:text-[20px] 2xl:leading-[20px]">
                Company
              </h4>
              <ul className="space-y-6 text-xs sm:text-sm 2xl:text-[16px] 2xl:pb-[24px] 2xl:leading-[20px]">
                {[
                  "About us",
                  "Contact us",
                  "Contact sales",
                  "Legal",
                  "Privacy Policy",
                  "Logo",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-700 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 6 */}
            <div className="2xl:w-[205px]">
              <h4 className="font-semibold text-base sm:text-lg pb-[28px] 2xl:text-[20px] 2xl:leading-[20px]">
                Get In Touch
              </h4>
              <ul className="space-y-6 text-xs sm:text-sm 2xl:space-y-4 2xl:pb-[24px] 2xl:text-[16px]">
                {[
                  { country: "US", phone: "1 (512) 226-8080" },
                  { country: "DE", phone: "+49 (0)6103-3866-100" },
                ].map((c) => (
                  <li key={c.country}>
                    {c.country}: {c.phone}
                  </li>
                ))}
                <li>info@embarcadero.com</li>
              </ul>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div
          className="mt-10 flex flex-col-reverse sm:flex-row items-center justify-between gap-4
            border-t border-gray-200 pt-6 text-xs sm:text-sm"
        >
          <p>2022 Embarcadero Inc. All Rights Reserved</p>
          <div className="flex items-center gap-3 sm:gap-4">
            {[FaTwitter, RiInstagramFill, FaFacebook, FaGithub].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="rounded-full inline-flex items-center justify-center transition-transform duration-200 hover:scale-110"
                >
                  <Icon className="h-6 w-6" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
