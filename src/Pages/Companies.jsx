import React from 'react';
import img1 from '/Assets/logo2.svg';
import img2 from '/Assets/logo3.svg';
import img3 from '/Assets/logo4.svg';
import img4 from '/Assets/logo5.svg';
import img6 from '/Assets/logo7.svg';
import img5 from '/Assets/logo6.svg';
import img7 from '/Assets/logo1.svg';
import img8 from '/Assets/logo8.svg';
import img9 from '/Assets/logo9.svg';
import img10 from '/Assets/logo10.svg';
import img11 from '/Assets/logo11.svg';
import img12 from '/Assets/logo12.svg';
import img13 from '/Assets/logo13.svg';

function Companies() {
    return (
        <div className="relative w-full min-w-full px-4 py-10 sm:py-15 flex flex-col items-center gap-6 sm:gap-8 overflow-hidden ">
            <div className="absolute   bg-indigo-500 opacity-10 blur-[280px] rounded-full w-[35vw] h-[35vh] sm:w-[40vw] sm:h-[50vh] md:w-[30vw] md:h-[40vh] left-[-15vw] top-[-10vh] z-0" />
            <div className="absolute   bg-[#6366F1] opacity-10 blur-[410px] rounded-full w-[70vw] h-[95vh] sm:w-[60vw] sm:h-[85vh] md:w-[50vw] md:h-[75vh] left-[-25vw] top-[-30vh] z-0"/>
            <div className="absolute   bg-[#F43F5E] opacity-10 blur-[410px] rounded-full  w-[75vw] h-[100vh] sm:w-[65vw] sm:h-[90vh] md:w-[55vw] md:h-[80vh]  right-[-30vw] top-[-25vh] z-0" />
            
            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="w-full flex justify-center">
                    <p className="text-center text-base sm:text-lg md:text-xl font-semibold max-w-4xl">
                        The world's leading companies rely on software built with Embarcadero products
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-4">
                    {[img1, img2,img3, img4, img5, img6, img7,img8,img9,img10,img11,img12,img13].map((img, idx) => (
                        <img
                            key={idx}
                            className="w-20 sm:w-24 md:w-28 h-12 sm:h-16 md:h-20 object-contain transition-transform duration-300 hover:scale-110"
                            src={img}
                            alt={`company logo ${idx + 1}`}
                        />
                    ))}
                </div>
                {/* <div className="w-full flex justify-center mt-10">
                    <p className="text-center text-base sm:text-lg md:text-xl font-light max-w-4xl">
                        Plus, thousands more
                    </p>
                </div> */}
            </div>
        </div>
    );
}

export default Companies;