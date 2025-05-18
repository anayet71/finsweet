import React from 'react';
import img from '../assets/Illustration.png'
import { FaLongArrowAltRight } from "react-icons/fa";


const Banner = () => {
    return (

        <div className=' text-white flex justify-center gap-16 py-[150px]'>
            <div>
                <h1 className='text-6xl pb-6'>Building stellar <br /> websites for early <br /> startups</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <div className='flex items-center gap-8'>

                    <div>
                        <button className=' mt-8 btn shadow-none rounded-3xl px-8 py-5 bg-[#fcd980] border-gray-500 border-2 '>View our work</button>
                    </div>
                    <div className='flex items-center gap-5 cursor-pointer'>
                        <div>View Pricing</div>
                        <div><FaLongArrowAltRight />
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;