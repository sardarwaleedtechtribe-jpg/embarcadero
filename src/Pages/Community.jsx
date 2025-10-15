import React from "react";
import img1 from '/Assets/map.svg';

function Community() {
    return (
        <div className="relative w-full px-4 py-8 sm:py-12 mt-0 sm:mt-0 overflow-hidden">
            <div className="absolute bg-indigo-500 opacity-10 blur-[280px] rounded-full w-[35vw] h-[35vh] sm:w-[40vw] sm:h-[50vh] md:w-[30vw] md:h-[40vh] left-[-15vw] top-[-10vh] z-0" />
            <div className="absolute bg-[#6366F1] opacity-10 blur-[410px] rounded-full w-[70vw] h-[95vh] sm:w-[60vw] sm:h-[85vh] md:w-[50vw] md:h-[75vh] left-[-25vw] top-[-30vh] z-0"/>
            <div className="absolute bg-[#F43F5E] opacity-10 blur-[410px] rounded-full w-[75vw] h-[100vh] sm:w-[65vw] sm:h-[90vh] md:w-[55vw] md:h-[80vh] right-[-30vw] top-[-25vh] z-0" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between ">
                <div className="w-full md:w-1/2 md:ml-5 flex flex-col items-center md:items-start gap-4 md:gap-6 text-base sm:text-lg">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left w-full">
                        <span className="text-gray-900">Join Our </span>
                        <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 to-fuchsia-600 bg-clip-text text-transparent">Global Developer Community</span>
                    </h2>
                    <p className="text-gray-700 max-w-2xl text-center md:text-left">
                        Join our email list and receive the latest case studies, event updates, product news, and much more.
                    </p>
                    <form className="w-full  flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full h-auto sm:w-auto flex-1 px-4 py-2.5 sm:py-3 text-sm rounded-lg border-2 border-grey-1200 focus:outline-none focus:border-blue-400"
                        />
                       <button 
                       className="px-5 sm:px-6 py-2 border border-black bg-black text-white rounded-lg transition-colors duration-150 hover:bg-gray-900 hover:text-white"
                       >
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 max-w-3xl mx-auto md:mx-0 flex justify-center md:justify-end">
                    <img src={img1} alt="Global Community" className="w-full h-auto max-h-[480px] sm:max-h-[560px] md:max-h-[640px] object-contain" />
                </div>
            </div>
        </div>
    );
}

export default Community;