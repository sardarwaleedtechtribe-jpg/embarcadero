import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Product from '../components/Product';
import RAD from '../components/RAD';
import Delphi from '../components/Delphi';
import InterBase from '../components/InterBAse';
import Builder from '../components/Builder';
import RADServer from '../components/RADServer';
import Companies from '../components/Companies';
import Community from '../components/Community';
import Footer from '../components/Footer';

function Home(){
    return(
        <div className="w-full min-h-screen bg-gray-50">
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
    )
}

export default Home;