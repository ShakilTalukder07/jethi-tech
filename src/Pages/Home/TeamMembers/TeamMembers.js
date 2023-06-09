import React from 'react';
import member1 from '../../../assets/member1.png';
import member2 from '../../../assets/member2.jpg';
import member3 from '../../../assets/member3.jpg';

const TeamMembers = () => {
    return (
        <div id='team' className='my-[35px]'>
            <h2 className='text-xl text-center underline mb-[35px] font-bold'>Our Team Members</h2>
            <div className='flex gap-[29px] justify-center mt-[31px]'>
                <div className='w-[467px] h-[370px] shadow-xl rounded-lg '>
                    <img src={member1} alt="" className='w-[300px] h-[210px] rounded-lg m-2 ' />
                    <div className='m-2'>
                        <h2 className='text-xl mb-2'>Brajesh Pathak</h2>
                        <p className='text-xs'>A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...</p>
                        <p className='text-end text-xs font-bold mt-3 mr-2'>View more</p>
                    </div>
                </div>
                <div className='w-[467px] h-[370px] shadow-xl rounded-lg '>
                    <img src={member2} alt="" className='w-[300px] h-[210px] rounded-lg m-2 ' />
                    <div className='m-2'>
                        <h2 className='text-xl mb-2'>Deepak Shukla</h2>
                        <p className='text-xs'>A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...</p>
                        <p className='text-end text-xs font-bold mt-3 mr-2'>View more</p>
                    </div>
                </div>
                <div className='w-[467px] h-[370px] shadow-xl rounded-lg '>
                    <img src={member3} alt="" className='w-[300px] h-[210px] rounded-lg m-2 ' />
                    <div className='m-2'>
                        <h2 className='text-xl mb-2'>Brajesh Pathak</h2>
                        <p className='text-xs'>A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...</p>
                        <p className=' text-end text-xs font-bold mt-3 mr-2'>View more</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;