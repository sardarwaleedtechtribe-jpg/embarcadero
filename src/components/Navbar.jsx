import React from 'react';
import logo from '../assets/embarcader.svg';

function Navbar() {
    return (
        <div className="w-full bg-white/95 backdrop-blur-sm text-gray-800 flex h-16 items-center place-content-between shadow-sm border-b border-gray-100">
            <div className='m-15'>
                <img src={logo} alt="Embarcadero logo" />
            </div>
            <nav className="flex items-center gap-6 text-xs">
                <div className="relative group">
                    <button className="hover:text-black-200 transition-colors">
                        My Downloads
                    </button>
                    <div className="absolute left-0 mt-2 hidden group-hover:block bg-white/95 backdrop-blur-sm border border-gray-100 rounded-lg shadow-lg min-w-40 z-10">
                        <ul className="py-2">
                            {["RAD Studio", "Delphi", "C++Builder"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className="relative group">
                    <button className="hover:text-black-200 transition-colors">Upgrade Center</button>
                    <div className="absolute left-0 mt-2 hidden group-hover:block bg-white/95 backdrop-blur-sm border border-gray-100 rounded-lg shadow-lg min-w-40 z-10">
                        <ul className="py-2">
                            <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors">Pricing</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors">What's New</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors">License FAQ</a></li>
                        </ul>
                    </div>
                </div>

                <div className="relative group">
                    <button className="hover:text-black-200 transition-colors">My Customer Portal</button>
                    <div className="absolute left-0 mt-2 hidden group-hover:block bg-white/95 backdrop-blur-sm border border-gray-100 rounded-lg shadow-lg min-w-40 z-10">
                        <ul className="py-2">
                            <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors">Manage Licenses</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors">Support Cases</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors">Downloads</a></li>
                        </ul>
                    </div>
                </div>

                <div className="relative group">
                    <button className="hover:text-black -200 transition-colors">Contact Us</button>
                    <div className="absolute left-0 mt-2 hidden group-hover:block bg-white/95 backdrop-blur-sm border border-gray-100 rounded-lg shadow-lg min-w-40 z-10">
                        <ul className="py-2">
                            <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors">Sales</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors">Technical Support</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors">Community</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='m-15 flex items-center gap-4'>
                <button className="px-4 py-2 rounded-lg border border-transparent bg-transparent text-black transition-all hover:border-gray-400 active:bg-black active:text-white">Sign In</button>
                <button className="px-4 py-2 rounded-lg border border-transparent bg-transparent text-black transition-all hover:border-gray-400 active:bg-black active:text-white">Buy Now</button>
                <button className="px-4 py-2 rounded-lg border border-transparent bg-transparent text-black transition-all hover:border-gray-400 active:bg-black active:text-white">Free Trial</button>
            </div>
        </div>
    )
}

export default Navbar;