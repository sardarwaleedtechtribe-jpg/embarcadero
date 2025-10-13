import React from "react";
// import logo from "/Assets/embarcader.svg";
import NavMenu from "./NavMenu";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-transparent z-40 xl:hidden" onClick={onClose} />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 xl:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-end p-4 border-b border-gray-200">
                {/* <img src={logo} alt="Embarcadero" className="h-6 w-auto" /> */}
            <button onClick={onClose} className="p-2 rounded-md  text-gray-700 hover:text-black hover:bg-gray-100" aria-label="Close navigation menu">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>


          <div className="flex-1 p-4 overflow-auto">
            <NavMenu isSidebar={true} onItemClick={onClose} />
          </div>

          <div className="p-4 border-t border-gray-200 md:hidden">
            <div className="space-y-2">
              {["Sign In", "Buy Now"].map((label) => (
                <button key={label} className="w-full text-left px-4 py-2 rounded-lg border border-gray-300 bg-transparent text-black transition-all hover:border-gray-800 hover:bg-gray-50" >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
