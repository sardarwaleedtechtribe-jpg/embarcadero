import React from "react";
import img1 from '../assets/image19.svg';
import img8 from '../assets/image20.svg';
import img3 from '../assets/image21.svg';
import img4 from '../assets/image23.svg';
import img5 from '../assets/image22.svg';
import img6 from '../assets/android.svg';
import img7 from '../assets/apple.svg';
import img2 from '../assets/ios.svg';
import img9 from '../assets/linux.svg';
import img10 from '../assets/microsoft.svg';
import img11 from '../assets/Vector227.svg';
import img12 from '../assets/Vector228.svg';
import img13 from '../assets/Vector231.svg';
import img14 from '../assets/Vector233.svg';

function RAD() {
    return (
        <div className="w-full h-155.5 p-4 bg-gradient-to-r from-blue-100 via-pink-50 to-red-100 flex justify-between items-center">
            <div className="flex flex-col items-start space-y-4 ml-20 text-xl ">
                <img src={img5} alt="RAD Section" className="w-10 h-10 object-cover rounded bg-transparent" />
                <h2 className="text-3xl font-bold">RAD Studio 11.2</h2>
                <p className="text-gray-700 max-w-md">
                    RAD Studio® is ultimate IDE for building single-source multi-platform native apps with Delphi® and modern C++ using advanced Windows desktop UI libraries ready for Windows 11                </p>
                <div className="flex space-x-4">
                    <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition">Start a Free Trial</button>
                    <button className="px-6 py-2 bg-white text-gray-800 rounded-lg hover:bg-black hover:text-white transition">Learn More</button>
                </div>
            </div>
            <div className="relative w-96 h-96 mr-30 ">
                
                <img src={img1} alt="RAD" className="absolute top-54 right-101 w-16 h-16 z-1" />
                <img src={img4} alt="RAD" className="absolute top-26 right-101 w-16 h-16 z-1" />
                <img src={img3} alt="RAD" className="absolute top-4 right-85 w-16 h-16 z-1" />
                <img src={img8} alt="iOS" className="absolute bottom-3 right-85 w-16 h-16 z-1" />
                <img src={img5} alt="RAD" className="absolute top-1/2 right-35 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 z-1" />
               

                <img src={img2} alt="RAD" className="absolute -top-5 right-9 w-16 h-16  z-1"/>
                <img src={img6} alt="Android"className="absolute top-20 -right-6 w-16 h-16 z-1" />
                <img src={img7} alt="Apple"className="absolute top-40 -right-18 w-16 h-16 z-1" />
                <img src={img9} alt="Linux"className="absolute bottom-18 -right-6 w-16 h-16 z-1" />
                <img src={img10} alt="Microsoft"    className="absolute top-85 -right-1 transform -translate-x-1/2 w-16 h-16 z-1" />
                <img src={img11} alt="Vector"className="absolute  bottom-8 right-50 w-50 h-50 z-0" />
                {/* <img src={img12} alt="Vector"className="absolute  bottom-8 right-50 w-50 h-50 z-0" /> */}
                <img src={img13} alt="Vector"className="absolute  bottom-8 right-10 w-50 h-50 z-0" />
                <img src={img14} alt="Vector"className="absolute  bottom-30 right-60 w-50 h-50 z-0" />
            </div>
        </div>
    );
}

export default RAD;