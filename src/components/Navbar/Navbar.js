import React from 'react';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#offer'>Our Offerings</a></li>
                        <li><a href='#team'>Our Team</a></li>
                        <li><a href='#contact'>Contact Us</a></li>
                        <li><a href='#blog'>Blogs</a></li>
                    </ul>
                </div>
                <img src={logo} alt="" className='h-10 w-10 ml-4' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-6 px-1 font-sans">
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#offer'>Our Offerings</a></li>
                    <li><a href='#team'>Our Team</a></li>
                    <li><a href='#contact'>Contact Us</a></li>
                    <li><a href='#blog'>Blogs</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='.' className="px-1 py-1 border-solid border-[1px] bg-[#002550] text-white mr-4">Register Now</a>
            </div>
        </div>
    );
};

export default Navbar;