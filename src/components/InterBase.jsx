import React from 'react';
import img3 from '../assets/image.svg';
import img6 from '../assets/image20.svg';

function InterBase() {
    return (
        <div className="w-full h-155.5 p-4 bg-gradient-to-r from-blue-100 via-pink-50 to-red-100 flex justify-between items-center">
            <div className="flex flex-col items-start space-y-4 ml-30 text-xl ">
                <img src={img6} alt="InterBase" className="w-10 h-10 object-cover rounded bg-transparent transition-transform duration-300 hover:scale-105" />
                <h2 className="text-3xl font-bold">InterBase 2020 Update 3</h2>
                <p className="text-gray-700 max-w-md">
                InterBase@ is a full-featured, encrypt able, scalable, embeddable and multi-platform relational SQL database with commercial-grade data security. disaster recovery and change synchronization
                </p>
                <div className="flex space-x-4">
                    <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition border-2 border-grey-1200">Start a Free Trial</button>
                    <button className="px-6 py-2 bg-white text-gray-800 rounded-lg border-2 border-grey-1200 hover:bg-black hover:text-white transition">Learn More</button>
                </div>
            </div>
            <div className="relative w-[700px] h-[700px] mr-15 ml-auto flex justify-end">
                <img src={img3} alt="InterBase" className="w-[3500px] h-[700px]" />
            </div>
        </div>
    );
}

export default InterBase;
