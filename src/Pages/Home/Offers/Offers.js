import React from 'react';
import offer1 from '../../../assets/offer1.png';
import offer2 from '../../../assets/offer2.png';
import offer3 from '../../../assets/offer3.png';

const Offers = () => {
    return (
        <div>
            <h2 className='text-xl text-center font-bold underline'>Our Offerings</h2>
            <p className='text-xs text-center'>This whole purchase journey can be divided into three stages. For more details, <span className='font-bold'>Click Here</span></p>
            <div className='flex gap-[29px] justify-center mt-[31px]'>
                <div className='w-[467px] h-[50px] bg-[#F2F4F6] text-center'>Pre-Booking</div>
                <div className='w-[467px] h-[50px] bg-[#CCD3DC] text-center'>Post-Booking & <br />
                    Pre-Registration</div>
                <div className='w-[467px] h-[50px] bg-[#F2F4F6] text-center'>Post-Registration </div>
            </div>
            <div className='flex gap-[29px] justify-center mt-[31px]'>
                <div className='w-[467px] h-[360px] border-black border-[1px] rounded-lg '>
                    <img src={offer1} alt="" className='w-[230px] h-[210px] rounded-lg m-2 ' />
                    <div className='m-2'>
                        <h2 className='text-xl mb-2'>Background verification</h2>
                        <p className='text-xs'>Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...</p>
                    </div>
                </div>
                <div className='w-[467px] h-[360px] border-black border-[1px] rounded-lg '>
                    <img src={offer2} alt="" className='w-[230px] h-[210px] rounded-lg m-2 ' />
                    <div className='m-2'>
                        <h2 className='text-xl mb-2'>Virtual site visit</h2>
                        <p className='text-xs'>It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...</p>
                    </div>
                </div>
                <div className='w-[467px] h-[360px] border-black border-[1px] rounded-lg '>
                    <img src={offer3} alt="" className='w-[230px] h-[210px] rounded-lg m-2 ' />
                    <div className='m-2'>
                        <h2 className='text-xl mb-2'>Title diligence</h2>
                        <p className='text-xs'>Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;