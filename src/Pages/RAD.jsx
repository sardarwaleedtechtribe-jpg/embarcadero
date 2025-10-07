import React from "react";
import img3 from '/Assets/image3.svg';
import img6 from '/Assets/image22.svg';


function RAD() {
    return (
        <div className="w-full min-w-full px-4 py-8 sm:py-12 bg-gradient-to-r from-blue-100 via-pink-50 to-red-100 flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12">
            <div className="w-full  md:w-1/2 md:ml-5 flex flex-col items-center md:items-start gap-4 md:gap-6 text-base sm:text-lg">
                <img
                    src={img6}
                    alt="RAD Section"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded bg-transparent transition-transform duration-300 hover:scale-105"
                />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">RAD Studio 11.2</h2>
                <p className="text-gray-700 max-w-2xl text-center md:text-left">
                    RAD Studio® is ultimate IDE for building single-source multi-platform native apps with Delphi® and modern C++ using advanced Windows desktop UI libraries ready for Windows 11                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
                    <button className="px-5 sm:px-6 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition">Start a Free Trial</button>
                    <button className="px-5 sm:px-6 py-2 bg-white text-gray-800 rounded-lg hover:bg-black hover:text-white transition">View Details</button>
                </div>
            </div>
            <div className="w-full md:w-1/2 max-w-3xl mx-auto md:mx-0 flex justify-center md:justify-end">
                <img src={img3} alt="RAD Section" className="w-full h-auto max-h-[480px] sm:max-h-[560px] md:max-h-[640px] object-contain" />
            </div>
        </div>
    );
}

export default RAD;