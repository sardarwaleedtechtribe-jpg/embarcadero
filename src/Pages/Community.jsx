import React from "react";
import img1 from '/Assets/map.svg';

function Community() {
    return (
        <div className="w-full px-4 py-8 sm:py-12 ">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12">
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
                            // style={{ height: 'auto' }}
                        />
                        <button type="submit" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white text-base rounded-lg hover:bg-white hover:text-black transition border-2 border-grey-1200">
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