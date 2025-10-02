import React from "react";
import img1 from '../assets/image22.jpg';

function RAD() {
    return (
        <div className="w-full h-155.5 p-4 bg-gradient-to-r from-blue-100 via-pink-50 to-red-100 flex justify-between">
            <div className="flex flex-col items-start space-y-4 ml-12">
                <img src={img1} alt="RAD Section" className="w-10 h-10 object-cover rounded bg-transparent" />
                <h2 className="text-3xl font-bold">RAD Studio 11.2</h2>
                <p className="text-gray-700 max-w-md">
                    RAD Studio® is ultimate IDE for building single-source multi-platform native apps with Delphi® and modern C++ using advanced Windows desktop UI libraries ready for Windows 11                </p>
                <div className="flex space-x-4">
                    <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition">Start a Free Trial</button>
                    <button className="px-6 py-2 bg-white text-gray-800 rounded-lg hover:bg-black hover:text-white transition">Learn More</button>
                </div>
            </div>
            <div>
                Right
            </div>
        </div>
    );
}

export default RAD;