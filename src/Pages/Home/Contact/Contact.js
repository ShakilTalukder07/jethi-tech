import React from 'react';
import contactLogo from "../../../assets/contact.jpg"

const Contact = () => {
    return (
        <div id='#contact' className='my-[35px]'>
            <div className='flex justify-between shadow-md px-10 py-10'>
                <div>
                    <p className='text-xl font-semibold my-3'>Get In Touch With Us To Connect</p>
                    <p className='text-md font-semibold mb-3'>Contact Us</p>
                    <div className='grid gap-6 grid-cols-2'>
                        <input className='py-2 px-10 border-[1px] border-solid border-black' type="text" />
                        <input className='py-2 px-10 border-[1px] border-solid border-black' type="email" />
                        <input className='py-2 px-10 border-[1px] border-solid border-black' type="number" />
                        <input className='py-2 px-10 border-[1px] border-solid border-black' type="text" />
                    </div>
                    <div className='my-4'>
                        <input className='py-2 px-10 border-[1px] border-solid border-black' type="text" />
                    </div>
                    <button className='text-white bg-[#01244A] w-[265px] py-2 ' type='submit'>Submit</button>
                </div>
                <div>
                    <img src={contactLogo} alt="" className='w-[250px] h-[250px]' />
                </div>
            </div>
        </div>
    );
};

export default Contact;