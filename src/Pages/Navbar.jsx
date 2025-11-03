import React, { useState } from "react";
import logo from "/Assets/embarcader.svg";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Component/Sidebar";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="w-full  bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 sticky top-0 z-40">
        {/* Center container */}
        <div className="max-w-[1536px] w-full bg-grey-200  mx-auto flex justify-center">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Set navbar text size to 14px */}
            <div className="h-12 sm:h-14 flex items-center justify-between text-[14px]">
              
              {/* Logo */}
              <div className="flex items-center 2xl:-ml-32">
                <img
                  src={logo}
                  alt="Embarcadero"
                  className="w-[138px] h-[24px]"
                />
              </div>

              {/* Center Nav Menu on xl+ */}
              <div className="hidden xl:flex flex-1 items-center justify-center">
                <NavMenu />
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center gap-2">
                  {["Sign In", "Buy Now"].map((label) => (
                    <button
                      key={label}
                      className={`cursor-pointer text-left px-3 py-1 rounded-lg border transition-colors duration-500 
                          ${
                            label === "Buy Now"
                              ? "border-black text-black bg-transparent hover:bg-black hover:text-white"
                              : "border-transparent text-black bg-transparent hover:bg-black hover:text-white"
                          }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <button className="cursor-pointer text-left px-3 py-1 rounded-lg border border-black bg-black text-white transition-colors duration-150 hover:bg-gray-900 ">
                  Free Trial
                </button>

                <button
                  onClick={toggleSidebar}
                  className="cursor-pointer p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 xl:hidden"
                  aria-label="Toggle navigation menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isSidebarOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>

            </div>

          </div>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}

export default Navbar;
