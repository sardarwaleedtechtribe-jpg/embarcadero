import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import img1 from '../assets/image19.svg';
import img2 from '../assets/image20.svg';
import img3 from '../assets/image21.svg';
import img4 from '../assets/image22.svg';
import img5 from '../assets/image23.svg';
import img6 from '../assets/GroupIcons.svg';

function Product() {
    return (
        <div className="w-full h-155.5 p-4 bg-gradient-to-r from-blue-100 via-pink-50 to-red-100">
            <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
                <div>
                    <h2 className="text-6xl font-semibold ml-6 bg-gradient-to-r from-fuchsia-600 to-pink-600 to-fuchsia-600 bg-clip-text text-transparent">Developer Tools</h2>
                    <p className="text-2xl text-gray-600 mt-8 -ml-9">Trusted by Over Three Million Developers Worldwide.</p>
                        <div className='m-15'>
                            <div className="flex flex-col lg:flex-row gap-4 items-center -mt-5 ml-6">
                                {/* <img className="transition-transform duration-300 hover:scale-105" src={img6} alt="Developer Tools Logos"/> */}
                                <img className="w-12  h-12 transition-transform duration-300 hover:scale-105" src={img4} alt="logo1" />
                                <img className="transition-transform duration-300 hover:scale-105" src={img1} alt="logo2" />
                                <img className="transition-transform duration-300 hover:scale-105" src={img5} alt="logo3" />
                                <img className="transition-transform duration-300 hover:scale-105" src={img2} alt="logo4" />
                                <img className="transition-transform duration-300 hover:scale-105" src={img3} alt="logo5" />
                            </div>
                        </div>
                        <div className="flex justify-center ">
                            <a
                                href="#"
                                className="flex items-center justify-center mt-10 bg-gray-100 rounded-full w-16 h-16 shadow hover:bg-gray-200 transition-colors transform hover:scale-110 duration-200"
                            >
                                <FaArrowDownLong size={32} />
                            </a>
                        </div>
                </div>

            </div>
        </div>
    );
}

export default Product;
