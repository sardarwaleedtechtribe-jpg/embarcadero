import React from 'react';
import img1 from '../assets/logo3.svg';
import img2 from '../assets/logo2.svg';
import img3 from '../assets/logo1.svg';
import img4 from '../assets/logo4.svg';
import img5 from '../assets/logo5.svg';
import img6 from '../assets/logo7.svg';
import img7 from '../assets/logo6.svg';


function Companies() {
    return (
        <div className="w-full h-85 p-4 bg-gradient-to-r from-blue-100 via-pink-50 to-red-100 flex justify-between items-center">
            <div className="w-full flex flex-col items-center ">
                <div className="w-full mb-4 flex justify-center">
                    <p className="text-center text-xl font-semibold">
                        The world's leading companies rely on software built with Embarcadero products
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 items-center mt-4 mb-30 w-full max-w-7xl">
                    {[img1, img2, img3, img4, img5, img6, img7].map((img, idx) => (
                        <img
                            key={idx}
                            className="w-28 h-20 mb-5 object-contain transition-transform duration-300 hover:scale-110"
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