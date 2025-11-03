import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";

const navLinks = [
  { title: "My Downloads", href: "#" },
  { title: "Upgrade Center", href: "#" },
  { title: "My Customer Portal", href: "#" },
  { title: "Contact Us", href: "#" },
];

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white z-50  relative mb-2 ">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8  overflow-hidden">
        {/* Increase height for sm and smaller */}
        <div className="flex h-28 sm:h-[68px] md:h-[53px] lg:h-[53px] xl:h-[53px] 2xl:h-[53px] items-center flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0">
          <div className="w-full max-w-[550px] flex flex-col sm:flex-row gap-3 text-[14px] 2xl:text-[16px] font-semibold tracking-tight mt-2 text-center sm:text-left 2xl:ml-16">
            <p className="font-light">
              See what's new in Delphi, C++ Builder, and RAD Studio
            </p>
            <a
              href="#"
              className="underline underline-offset-2 hover:text-blue-300 font-medium"
            >
              {" "}
              Watch The Replay{" "}
            </a>
          </div>

          <div className="relative flex items-center justify-between gap-6 text-xs z-55 xl:mr-20 2xl:mr-0  ">
            <nav className="hidden xl:flex items-center gap-6 text-[16px] xl:w-[540px] ">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="hover:text-blue-200 transition-colors "
                >
                  {link.title}
                </a>
              ))}
            </nav>

            {[
              { title: "Account", icon: FiUser },
              { title: "Search", icon: FiSearch },
              { title: "Cart", icon: FiShoppingCart },
            ].map((link) => (
              <a
                key={link.title}
                href="#"
                className="flex items-center gap-1 hover:text-blue-200 transition-colors  "
                aria-label={link.title}
              >
                <link.icon size={20} />
              </a>
            ))}

            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 hover:text-blue-200 transition-colors xl:hidden z-65"
              aria-label="Menu"
              aria-expanded={isDropdownOpen}
            >
              <MdArrowDropDown size={20} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-black border border-gray-700 rounded-md shadow-lg z-[999] w-56 sm:w-64 lg:hidden transition-all duration-200 ease-in-out">
                <div className="flex flex-col gap-2 p-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className="block px-3 py-2 hover:bg-gray-800 transition-colors rounded-md"
                      onClick={() => setIsDropdownOpen(false)}
                    >
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
