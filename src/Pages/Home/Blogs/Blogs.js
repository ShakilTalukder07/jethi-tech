import React from 'react';
import blog1 from '../../../assets/blog1.jpg';
import blog2 from '../../../assets/blog2.jpg';
import blog3 from '../../../assets/blog3.jpg';
import Button from '../../../components/Buttons/Button';

const Blogs = () => {
    return (
        <div className='my-[56px] bg-[#F2F4F6] '>
            <h2 className='text-xl text-center font-bold underline'>Blog</h2>
            <div className='flex gap-[29px] justify-center mt-[31px]'>
                <div className='w-[467px] h-[360px] shadow-xl rounded-lg '>
                    <img src={blog1} alt="" className='w-[300px] h-[210px] rounded-lg m-2 ' />
                    <div className='m-2'>
                        <h2 className='text-xl mb-2'>Background verification</h2>
                        <p className='text-xs'>Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...</p>
                    </div>
                    <Button>
                        View More
                    </Button>
                </div>
                <div className='w-[467px] h-[360px] shadow-xl rounded-lg '>
                    <img src={blog2} alt="" className='w-[300px] h-[210px] rounded-lg m-2 ' />
                    <div className='m-2'>
                        <h2 className='text-xl mb-2'>Background verification</h2>
                        <p className='text-xs'>Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...</p>
                    </div>
                    <Button>
                        View More
                    </Button>
                </div>
                <div className='w-[467px] h-[360px] shadow-xl rounded-lg '>
                    <img src={blog3} alt="" className='w-[300px] h-[210px] rounded-lg m-2 ' />
                    <div className='m-2'>
                        <h2 className='text-xl mb-2'>Background verification</h2>
                        <p className='text-xs'>Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...</p>
                    </div>
                    <Button>
                        View More
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;