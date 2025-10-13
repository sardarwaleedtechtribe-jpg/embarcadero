import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { MdArrowDropDown } from 'react-icons/md';
function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <header className="w-full bg-black text-white z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 sm:h-20 items-center flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0">
          <div className="flex flex-col sm:flex-row gap-3 text-xs font-semibold tracking-tight mt-2 -ml-2 ">
            <p>See what's new in Delphi, C++ Builder, and RAD Studio </p>
            <a href="#" className="underline underline-offset-2 text-white-600 visited:text-purple-600 ... text-center sm:text-left" > Watch The Replay </a>
          </div>
          <nav className="flex-row hidden lg:flex items-center gap-6 text-xs">
            {[
              { title: "My Downloads", href: "#" },
              { title: "Upgrade Center", href: "#" },
              { title: "My Customer Portal", href: "#" },
              { title: "Contact Us", href: "#" }
            ].map(link => (
              <a key={link.title} href={link.href} className="hover:text-blue-200 transition-colors">
                {link.title}
              </a>
            ))}
          </nav>
          <div className="relative flex items-center gap-8 text-xs">
            <div className="flex items-center gap-1 text-xs">
              <a href="#" className="flex items-center gap-1 hover:text-blue-200 transition-colors" aria-label="Account" ><FiUser size={18} />{" "}</a>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <a href="#" className="flex items-center gap-1 hover:text-blue-200 transition-colors" aria-label="Search" ><FiSearch size={18} /></a>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <a href="#" className="flex items-center gap-1 hover:text-blue-200 transition-colors" aria-label="Cart" ><FiShoppingCart size={18} /></a>
            </div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex sm:flex lg:hidden items-center gap-1 hover:text-blue-200 transition-colors"
              aria-label="Menu"
            >
              <MdArrowDropDown size={18} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-black border border-gray-700 rounded-md shadow-lg z-51 lg:hidden">
                <div className="flex flex-col gap-2 p-2">
                  {[
                    { title: "My Downloads", href: "#" },
                    { title: "Upgrade Center", href: "#" },
                    { title: "My Customer Portal", href: "#" },
                    { title: "Contact Us", href: "#" }
                  ].map(link => (
                    <a key={link.title} href={link.href} className="block px-3 py-1 hover:bg-gray-800 transition-colors" onClick={() => setIsDropdownOpen(false)}>
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
