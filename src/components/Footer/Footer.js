import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#002550] text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
            <div>

            </div>
            <div className='flex flex-col'>
                <h3 className='font-bold'>Company</h3>
                <a href=".">Home</a>
                <a href=".">Our Offerings</a>
                <a href=".">Our Team</a>
                <a href=".">Contact US</a>
            </div>
            <div className='flex flex-col'>
                <h3 className='font-bold'>Useful Link</h3>
                <a href=".">Blog</a>
                <a href=".">FAQ's</a>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Footer;