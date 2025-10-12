import React, { useState } from 'react';
import logo from '/Assets/embarcader.svg';
import NavMenu from '../Component/NavMenu';

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
                        {/* Left side - Logo */}
                        <div className="flex items-center">
                            <img src={logo} alt="Embarcadero" className="h-5 sm:h-6 md:h-7 w-auto" />
                        </div>

                        {/* Center - Desktop Navigation */}
                        <div className="flex-1 flex justify-center hidden xl:flex">
                            <NavMenu />
                        </div>

                        {/* Right side - Buttons and Hamburger Menu */}
                        <div className="flex items-center gap-2">
                            {/* Desktop Buttons - Hidden only when screen is less than 900px */}
                            <div className="hidden md:flex items-center gap-2">
                                {["Sign In", "Buy Now"].map((label) => (
                                    <button
                                        key={label}
                                        className="text-left px-3 py-1 rounded-lg border border-transparent bg-transparent text-black transition-all hover:border-gray-800 active:bg-black active:text-white"
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>

                            {/* Free Trial Button - Always visible */}
                            <button className="text-left px-3 py-1 rounded-lg border border-transparent bg-transparent text-black transition-all hover:border-gray-800 active:bg-black active:text-white">
                                Free Trial
                            </button>

                            {/* Hamburger Menu - Visible when sidebar appears */}
                            <button
                                onClick={toggleSidebar}
                                className="p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 xl:hidden"
                                aria-label="Toggle navigation menu"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {isSidebarOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-transparent z-40 xl:hidden"
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed  top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 xl:hidden ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className="flex flex-col  h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <img src={logo} alt="Embarcadero" className="h-6 w-auto" />
                        <button
                            onClick={closeSidebar}
                            className="p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100"
                            aria-label="Close navigation menu"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <div className="flex-1 p-4">
                        <NavMenu isSidebar={true} onItemClick={closeSidebar} />
                    </div>

                    {/* Bottom Buttons - Visible only when screen is less than 900px */}
                    <div className="p-4 border-t border-gray-200 md:hidden">
                        <div className="space-y-2">
                            {["Sign In", "Buy Now"].map((label) => (
                                <button
                                    key={label}
                                    className="w-full text-left px-4 py-2 rounded-lg border border-gray-300 bg-transparent text-black transition-all hover:border-gray-800 hover:bg-gray-50"
                                >
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

export default Navbar;

