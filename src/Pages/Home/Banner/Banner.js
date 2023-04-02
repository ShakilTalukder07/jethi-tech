import React from 'react';
import banner2 from "../../../assets/Banner2.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='bg-[#E6EAEE] rounded-[8px] my-[35px]'>
                <div className='flex'>
                    <img src={banner2} alt="" className='h-[400px] w-1/2 m-[23px]' />
                    <div className='flex flex-col justify-start w-1/2'>
                        <div className='align-center my-[54px] mx-[31px]'>
                            <h2 className='text-xl mb-[35px]'>Who We Are</h2>
                            <p className='text-sm'>The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.</p>
                            <a href='.' className='border-solid border-4 mt-[35px]'>Contact Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;