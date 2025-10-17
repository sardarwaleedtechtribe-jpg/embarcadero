import React from 'react';

import Header from '../Pages/Header';
import Navbar from '../Pages/Navbar';
import Product from '../Pages/Product';
import RAD from '../Pages/RAD';
import Delphi from '../Pages/Delphi';
import InterBase from '../Pages/InterBase';
import Builder from '../Pages/Builder';
import RADServer from '../Pages/RADServer';
import Companies from '../Pages/Companies';
import Community from '../Pages/Community';
import Footer from '../Pages/Footer';

function Home(){
    return(
            <div className="w-full   min-h-screen bg-gray-50 overflow-x-hidden">
            <Header />
            <Navbar />
            <Product />
            <RAD />
            <Delphi />
            <Builder />
            <InterBase />
            <RADServer />
            <Companies />
            <Community />
            <Footer />       
        </div>
    );
}

export default Home;