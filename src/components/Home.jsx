import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

const Home = () => {
    return (
        <div className=' bg-[#1c1e53] '>
            <div className='max-w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>

            </div>
        </div>
    );
};

export default Home;