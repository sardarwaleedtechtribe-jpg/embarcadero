import React from 'react';
import img1 from '/Assets/logo3.svg';
import img2 from '/Assets/logo2.svg';
import img3 from '/Assets/logo1.svg';
import img4 from '/Assets/logo4.svg';
import img5 from '/Assets/logo5.svg';
import img6 from '/Assets/logo7.svg';
import img7 from '/Assets/logo6.svg';


function Companies() {
    return (
        <div className="w-full min-w-full px-4 py-8 -mb-25 sm:py-12 bg-gradient-to-r from-blue-100 via-pink-50 to-red-100 flex flex-col items-center gap-6 sm:gap-8">
            <div className="w-full flex flex-col items-center">
                <div className="w-full flex justify-center">
                    <p className="text-center text-base sm:text-lg md:text-xl font-semibold max-w-4xl">
                        The world's leading companies rely on software built with Embarcadero products
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-4 mb-20 w-full max-w-7xl">
                    {[img1, img2, img3, img4, img5, img6, img7].map((img, idx) => (
                        <img
                            key={idx}
                            className="w-20 sm:w-24 md:w-28 h-12 sm:h-16 md:h-20 object-contain transition-transform duration-300 hover:scale-110"
                            src={img}
                            alt={`company logo ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Companies;