import React from 'react';
import img1 from '/Assets/logo2.svg';
import img2 from '/Assets/logo3.svg';
import img3 from '/Assets/logo4.svg';
import img4 from '/Assets/logo5.svg';
import img5 from '/Assets/logo6.svg';
import img6 from '/Assets/logo7.svg';
import img7 from '/Assets/logo1.svg';
import img8 from '/Assets/logo8.svg';
import img9 from '/Assets/logo9.svg';
import img10 from '/Assets/logo10.svg';
import img11 from '/Assets/logo11.svg';
import img12 from '/Assets/logo12.svg';
import img13 from '/Assets/logo13.svg';

function Companies() {
  return (
    <div className="relative w-full px-4 py-10 sm:py-14 flex flex-col items-center gap-6 sm:gap-8 overflow-visible">
      
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center gap-6 sm:gap-8">
      <div className="absolute bg-indigo-200 opacity-25 blur-[80px] rounded-full w-[250px] h-[350px] sm:w-[300px] sm:h-[450px] md:w-[350px] md:h-[480px] right-[-100px] top-[-200px] sm:right-[-150px] sm:top-[-250px] md:right-[-180px] md:top-[-280px] z-0" />
        <p className="text-center text-base sm:text-lg md:text-xl font-semibold max-w-4xl z-10"> The world's leading companies rely on software built with Embarcadero products </p>
        <div className="flex flex-wrap justify-center sm:justify-around items-center gap-6 sm:gap-8 mt-4 z-10">
          {[  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13 ].map((img, idx) => (
            <img key={idx}  className="w-20 sm:w-24 md:w-28 h-8 sm:h-12 md:h-16 object-contain transition-transform duration-300 hover:scale-110"
              src={img}  alt={`company logo ${idx + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Companies;
