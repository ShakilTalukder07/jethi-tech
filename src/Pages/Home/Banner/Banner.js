import React from 'react';
import './Banner.css'
import banner1 from "../../../assets/blog3.jpg"
import banner2 from "../../../assets/Banner2.jpg"
import Button from '../../../components/Buttons/Button';

const Banner = () => {
    return (
        <div id='home' className='mt-[60px]'>
            <div className='bg-[#002550] flex'>
                <h2 className='text-2xl text-white w-1/3 ml-6 my-24'>Making Your <span className='text-[yellow] font-[Solway] font-bold '>Real Estate</span> Purchase Journey Faster And Transparent</h2>
                <img className='clipPath w-3/4 h-[300px]' src={banner1} alt="" />
            </div>
            <div className='bg-[#E6EAEE] rounded-[8px] my-[35px]'>
                <div className='flex'>
                    <img src={banner2} alt="" className='h-[400px] w-1/2 m-[23px]' />
                    <div className='flex flex-col justify-start w-1/2'>
                        <div className='align-center my-[54px] mx-[31px]'>
                            <h2 className='text-xl mb-[35px]'>Who We Are</h2>
                            <p className='text-sm mb-10'>The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.</p>
                            <Button>
                                Contact Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;