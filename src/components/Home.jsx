import React, { useState } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import SlideShow from './SlideShow';
import Loader from './Loader';



const Home = () => {

    const [loading, setLoading] = useState(false)

    setTimeout(() => {
        setLoading(true)
    }, 5000);

    return (

        <div>
            {loading ? <>

            <div className=' bg-[#1c1e53] '>

                <div className='max-w-11/12 mx-auto'>
                    <Navbar></Navbar>
                    <Banner></Banner>
                </div>
            </div>
            <div>
                <SlideShow></SlideShow>

            </div>

            </> : 
            
            <Loader></Loader>
            }


        </div>
    );
};

export default Home;