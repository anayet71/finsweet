import React from 'react';
import picOne from '../assets/pic1.jpg'
import picTwo from '../assets/pic2.jpg'
// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideShow() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (

        <div className='bg-[teal]'>
            <div className='w-[100vh] mx-auto '>

                <div>
                    <h1 className='text-5xl font-bold text-white py-12'>React Slider </h1>
                </div>
                <div>
                    <Slider {...settings}>

                        <div >
                            <img className='' src={picOne} alt="" />
                        </div>
                        <div>
                            <img src={picTwo} alt="" />
                        </div>

                    </Slider>

                </div>

            </div>
        </div>
    );
};

