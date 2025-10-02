import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import img1 from '../assets/image19.jpg';
import img2 from '../assets/image20.jpg';
import img3 from '../assets/image21.jpg';
import img4 from '../assets/image22.jpg';
import img5 from '../assets/image23.jpg';

function Product() {
    return (
        <div className="w-full h-155.5 p-4 bg-gradient-to-r from-blue-100 via-pink-50 to-red-100">
            <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
                <div>
                    <h2 className="text-6xl font-semibold ml-6">Developer Tools</h2>
                    <p className="text-2xl text-gray-600 mt-8 -ml-9">Trusted by Over Three Million Developers Worldwide.</p>
                        <div className='m-15'>
                            <div className="flex flex-col lg:flex-row gap-4 items-center -mt-5 ml-6">
                                <img src={img4} alt="logo1" />
                                <img src={img1} alt="logo2" />
                                <img src={img5} alt="logo3" />
                                <img src={img2} alt="logo4" />
                                <img src={img3} alt="logo5" />
                            </div>
                        </div>
                        <div className="flex justify-center ">
                            <a href="#" className="flex items-center justify-center mt-10 bg-gray-100 rounded-full w-16 h-16 shadow hover:bg-gray-200 transition-colors">
                                <FaArrowDownLong size={32} />
                            </a>
                        </div>
                </div>

            </div>
        </div>
    );
}

export default Product;
