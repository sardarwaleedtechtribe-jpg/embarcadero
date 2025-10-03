import React from 'react';
import img3 from '../assets/image5.svg';
import img6 from '../assets/image19.svg';

function Delphi() {
    return (
        <div className="w-full h-155.5 p-4 bg-gradient-to-r from-blue-100 via-pink-50 to-red-100 flex justify-between items-center">
            <div className="flex flex-col items-start space-y-4 ml-30 text-xl ">
                <img src={img6} alt="Delphi 11.2" className="w-10 h-10 object-cover rounded bg-transparent transition-transform duration-300 hover:scale-105" />
                <h2 className="text-3xl font-bold">Delphi 11.2</h2>
                <p className="text-gray-700 max-w-md">
                    Delphi@ is the original IDE for building single-source multi-platform native apps with powerful visual design features and best-in-class Windows integration and up to 5x productivity gains  
                </p>
                <div className="flex space-x-4">
                    <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition border-2 border-grey-1200">Start a Free Trial</button>
                    <button className="px-6 py-2 bg-white text-gray-800 rounded-lg border-2 border-grey-1200 hover:bg-black hover:text-white hover:border-gray-800 transition">View Details</button>
                </div>
            </div>
            <div className="relative w-[550px] h-[700px] mr-15 ml-auto flex justify-end">
                <img src={img3} alt="Delphi 11.2" className="w-[3500px] h-[700px]" />
            </div>
        </div>
    );
}

export default Delphi;