import React from 'react';
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";


function Header() {
    return (
        <header className="w-full bg-black text-white">
            <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
                <div className="flex h-12 items-center justify-between">
                    <div className="flex gap-3 text-xs font-semibold tracking-tight -mt-1 -ml-2 ">
                        <p >See what's new in Delphi, C++ Builder, and RAD Studio </p>
                        <a href="#" className="underline underline-offset-2 text-white-600 visited:text-purple-600 ..."> Watch The Replay </a>
                    </div>
                    <nav className="flex items-center gap-6 text-xs">
                        <a href="#" className="hover:text-blue-200 transition-colors">My Downloads</a>
                        <a href="#" className="hover:text-blue-200 transition-colors">Upgrade Center</a>
                        <a href="#" className="hover:text-blue-200 transition-colors">My Customer Portal</a>
                        <a href="#" className="hover:text-blue-200 transition-colors">Contact Us</a>
                        <a href="#" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                            <FiSearch size={18} /> 
                        </a>
                        <a href="#" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                            <FiShoppingCart size={18} /> 
                        </a>
                        <a href="#" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                            <FiUser size={18} /> 
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )


}

export default Header;