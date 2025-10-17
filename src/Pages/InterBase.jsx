import React from "react";
import img3 from "/Assets/image.svg";
import img6 from "/Assets/image20.svg";

function InterBase() {
  return (
    <div className="relative w-full px-4 py-8 sm:py-12 overflow-autovisable">
      <div className="absolute  bg-[#6366F1] opacity-10 blur-[350px] rounded-full w-[70vw] h-[120vh] sm:w-[60vw] sm:h-[110vh] md:w-[50vw] md:h-[100vh] left-[-15vw] top-[-25vh] z-0" />
      <div className="absolute  bg-[#F43F5E] opacity-10 blur-[410px] rounded-full w-[75vw] h-[125vh] sm:w-[65vw] sm:h-[115vh] md:w-[55vw] md:h-[105vh] right-[-20vw] top-[-20vh] z-0" />
   
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 md:ml-5 flex flex-col items-center md:items-start gap-4 md:gap-6 text-base sm:text-lg">
          <img
            src={img6}
            alt="InterBase"
            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded bg-transparent transition-transform duration-300 hover:scale-105"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            InterBase 2020 Update 3
          </h2>
          <p className="text-gray-700 max-w-2xl text-center md:text-left">
            InterBase® is a full-featured, encryptable, scalable, embeddable, and
            multi-platform relational SQL database with commercial-grade data
            security, disaster recovery, and change synchronization.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-5 md:flex-row w-full">
            <div className="flex justify-center items-center w-full md:w-auto">
              <button className="w-full md:w-auto px-6 py-4 h-12 text-base border border-black bg-black text-white rounded-lg transition-colors duration-150 hover:bg-gray-900 hover:text-white md:text-lg flex items-center justify-center">
                Start a Free Trial
              </button>
            </div>

            <div className="flex justify-center items-center w-full md:w-auto">
              <button className="w-full md:w-auto px-6 py-4 h-12 text-base bg-white text-gray-800 rounded-lg hover:bg-black hover:text-white transition md:text-lg flex items-center justify-center">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 max-w-3xl mx-auto md:mx-0 flex justify-center md:justify-end">
          <img
            src={img3}
            alt="InterBase"
            className="w-full h-auto max-h-[480px] sm:max-h-[560px] md:max-h-[640px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default InterBase;

