import React from 'react';
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className='bg-[#002550] text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
            <div className='mt-6 ml-10'>
                <img className='h-10 w-10' src={logo} alt="" />
            </div>
            <div className='flex flex-col my-6'>
                <h3 className='font-bold text-xl'>Company</h3>
                <a className='mt-2 text-sm' href=".">Home</a>
                <a className='mt-2 text-sm' href=".">Our Offerings</a>
                <a className='mt-2 text-sm' href=".">Our Team</a>
                <a className='mt-2 text-sm' href=".">Contact US</a>
            </div>
            <div className='flex flex-col mt-6'>
                <h3 className='font-bold text-xl'>Useful Link</h3>
                <a className='mt-2 text-sm' href=".">Blog</a>
                <a className='mt-2 text-sm' href=".">FAQ's</a>
            </div>
            <div className='mt-6'>
                <h2 className='font-bold text-xl'>Email:</h2>
                <p className='text-sm' >support@inreglobal.com</p>
                <h2 className='font-bold text-xl'>Phone:</h2>
                <p className='text-sm' >+91 | 7019305889</p>
            </div>
        </div>
    );
};

export default Footer;