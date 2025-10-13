import React, { useState } from "react";
import logo from "/Assets/embarcader.svg";
import NavMenu from "../Component/NavMenu";
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
      <nav className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-12 sm:h-14 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Embarcadero"
                className="h-5 sm:h-6 md:h-7 w-auto"
              />
            </div>

            <div className="flex-1 flex justify-center hidden xl:flex">
              <NavMenu />
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2">
                {["Sign In", "Buy Now"].map((label) => (
                  <button
                    key={label}
                    className="cursor-pointer text-left px-3 py-1 rounded-lg border border-transparent bg-transparent text-black transition-all hover:border-gray-800 active:bg-black active:text-white"
                  >
                    {label}
                  </button>
                ))}
              </div>

              <button className="cursor-pointer text-left px-3 py-1 rounded-lg border border-black bg-black text-white transition-colors duration-150 hover:bg-gray-500 hover:text-white active:bg-white active:text-black">

                Free Trial
              </button>

              <button
                onClick={toggleSidebar}
                className="cursor-pointer p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100  xl:hidden"
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
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}

export default Navbar;
