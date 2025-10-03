import React from 'react';
import logo from '../Assets/embarcader.svg';
import NavMenu from '../Component/NavMenu';

function Navbar() {
    return (
        <div className="w-full bg-white/95 backdrop-blur-sm text-gray-800 flex h-16 items-center place-content-between shadow-sm border-b border-gray-100">
            <div className='m-15'>
                <img src={logo} alt="Embarcadero logo" />
            </div>
            
            <NavMenu />

            <div className='m-15 flex items-center gap-4'>
                <button className="px-4 py-2 rounded-lg border border-transparent bg-transparent text-black transition-all hover:border-gray-800 active:bg-black active:text-white">Sign In</button>
                <button className="px-4 py-2 rounded-lg border border-transparent bg-transparent text-black transition-all hover:border-gray-800 active:bg-black active:text-white">Buy Now</button>
                <button className="px-4 py-2 rounded-lg border border-transparent bg-transparent text-black transition-all hover:border-gray-800 active:bg-black active:text-white">Free Trial</button>
            </div>
        </div>
    )
}

export default Navbar;