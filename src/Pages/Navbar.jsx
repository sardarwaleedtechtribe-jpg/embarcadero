import React from 'react';
import logo from '/Assets/embarcader.svg';

function Navbar() {
    return (
        <nav className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="h-14 sm:h-16 flex items-center justify-between">
					<img src={logo} alt="Embarcadero" className="h-6 sm:h-7 md:h-8 w-auto" />
					<div className="flex items-center gap-2 ">
						<button className="w-25 text-left -mr-6 px-4 py-2 rounded-lg border border-transparent bg-transparent text-black transition-all hover:border-gray-800 active:bg-black active:text-white">Sign In</button>
						<button className="w-25 text-left px-4 py-2 rounded-lg border border-transparent bg-transparent text-black transition-all hover:border-gray-800 active:bg-black active:text-white">Download</button>
						<button className="w-25 text-left px-4 py-2 rounded-lg border border-transparent bg-transparent text-black transition-all hover:border-gray-800 active:bg-black active:text-white">Buy Now</button>
					</div>
				</div>
            </div>
        </nav>
    );
}

export default Navbar;
