import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Product from '../components/Product';
import RAD from '../components/RAD';

function Home(){
    return(
        <div className="w-full min-h-screen bg-gray-50">
            <Header />
            <Navbar />
            <Product />
            {/* <br/> */}
            <RAD />
        </div>
    )
}

export default Home;