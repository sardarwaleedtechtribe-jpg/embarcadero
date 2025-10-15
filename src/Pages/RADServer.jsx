import React from "react";
import img3 from "/Assets/image4.svg";
import img6 from "/Assets/image20.svg";

function RADServer() {
  return (
    <div className="relative w-full px-4 py-8 sm:py-12 overflow-hidden">
      <div className="absolute   bg-indigo-500 opacity-10 blur-[280px] rounded-full w-[35vw] h-[35vh] sm:w-[40vw] sm:h-[55vh] md:w-[30vw] md:h-[45vh] left-[-5vw] top-[-5vh] z-0" />
      <div className="absolute   bg-[#6366F1] opacity-10 blur-[410px] rounded-full w-[70vw] h-[110vh] sm:w-[60vw] sm:h-[100vh] md:w-[50vw] md:h-[90vh] left-[-15vw] top-[-30vh] z-0"/>
      <div className="absolute   bg-[#F43F5E] opacity-10 blur-[410px] rounded-full  w-[75vw] h-[115vh] sm:w-[65vw] sm:h-[105vh] md:w-[55vw] md:h-[95vh]  right-[-20vw] top-[-25vh] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 md:ml-5 flex flex-col items-center md:items-start gap-4 md:gap-6 text-base sm:text-lg">
          <img 
            src={img6}
            alt="RAD Server"
            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded bg-transparent transition-transform duration-300 hover:scale-105"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            RAD Server
          </h2>
          <p className="text-gray-700 max-w-2xl text-center md:text-left">
            Enterprise-grade REST API application platform available as
            on-premise or deployable to the cloud. Generate database APIs
            instantly in Delphi® and C++Builder® to build apps faster.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
          <button className="px-5 sm:px-6 py-2 border border-black bg-black text-white rounded-lg transition-colors duration-150 hover:bg-gray-900 hover:text-white">
              Start a Free Trial
            </button>
            <button className="px-5 sm:px-6 py-2 bg-white text-gray-800 rounded-lg hover:bg-black hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 max-w-3xl mx-auto md:mx-0 flex justify-center md:justify-end">
          <img
            src={img3}
            alt="RAD Server"
            className="w-full h-auto max-h-[480px] sm:max-h-[560px] md:max-h-[640px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default RADServer;
