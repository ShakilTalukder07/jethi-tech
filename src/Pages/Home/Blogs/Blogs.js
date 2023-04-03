import React from 'react';
import blog1 from '../../../assets/blog1.jpg';
import blog2 from '../../../assets/blog2.jpg';
import blog3 from '../../../assets/blog3.jpg';
import Button from '../../../components/Buttons/Button';

const Blogs = () => {
    return (
        <div id='blog' className='my-[56px]  '>
            <h2 className='text-xl text-center font-bold underline'>Blogs</h2>
            <div className='flex gap-[29px] justify-center mt-[31px]'>
                <div className='w-[467px] h-[450px] shadow-xl rounded-lg m-2 '>
                    <img src={blog1} alt="" className='w-[285px] h-[210px] rounded-lg m-2 ' />
                    <div className='mx-2'>
                        <p className='text-xs my-2'>Real Estate, Analysis</p>
                        <div className='flex justify-between text-xs'>
                            <p>09 jun 2022</p>
                            <p>By Admin</p>
                        </div>
                        <p className='text-xl my-2 font-semibold'>Guide for personal property Buying</p>
                        <p className='text-xs my-3'>"Lorem ipsum dolor sit amet, consectetur adipis
                            cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...
                        </p>
                        <Button>
                            View More
                        </Button>
                    </div>
                </div>
                <div className='w-[467px] h-[450px] shadow-xl rounded-lg m-2 '>
                    <img src={blog2} alt="" className='w-[285px] h-[210px] rounded-lg m-2 ' />
                    <div className='mx-2'>
                        <p className='text-xs my-2'>Real Estate, Analysis</p>
                        <div className='flex justify-between text-xs'>
                            <p>09 jun 2022</p>
                            <p>By Admin</p>
                        </div>
                        <p className='text-xl my-2 font-semibold'>Guide for personal property Buying</p>
                        <p className='text-xs my-3'>"Lorem ipsum dolor sit amet, consectetur adipis
                            cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...
                        </p>
                        <Button>
                            View More
                        </Button>
                    </div>
                </div>
                <div className='w-[467px] h-[450px] shadow-xl rounded-lg m-2 '>
                    <img src={blog3} alt="" className='w-[285px] h-[210px] rounded-lg m-2 ' />
                    <div className='mx-2'>
                        <p className='text-xs my-2'>Real Estate, Analysis</p>
                        <div className='flex justify-between text-xs'>
                            <p>09 jun 2022</p>
                            <p>By Admin</p>
                        </div>
                        <p className='text-xl my-2 font-semibold'>Guide for personal property Buying</p>
                        <p className='text-xs my-3'>"Lorem ipsum dolor sit amet, consectetur adipis
                            cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...
                        </p>
                        <Button>
                            View More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;