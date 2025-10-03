import React from "react";
import img1 from '/Assets/map.svg';

function Community() {
    return (
        <div className="w-full h-90 p-4 bg-gradient-to-r from-blue-100 via-pink-50 to-red-100 flex justify-between items-center ">
            <div className="flex flex-col items-start space-y-4 ml-30 text-xl mb-35">
                {/* <h2>
                    Join Our
                </h2> */}
                <h2 className="text-3xl font-bold w-90">
                    <span className="text-gray-900">Join Our </span>
                    <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 to-fuchsia-600 bg-clip-text text-transparent">Global Developer Community</span>
                </h2>
                <p className="text-gray-700 max-w-md">
                Join our email list and receive the latest case studies, event updates, product news, and much more.
                </p>
                <div className="flex space-x-4">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="px-4 py-2 text-sm rounded-lg border-2 border-grey-1200 focus:outline-none focus:border-blue-400 w-65"
                    />
                    <button className="px-8 py-3 bg-black text-white text-base rounded-lg hover:bg-white hover:text-black transition border-2 border-grey-1200">
                       Subscribe
                    </button>
                </div>
            </div>
            <div className="relative w-[700px] h-[700px] mt-25 mr-20 ml-auto flex justify-end mb-40">
                <img src={img1} alt="C++ Builder" className="w-[3500px] h-[700px]" />
            </div>
        </div>
    );
}

export default Community;