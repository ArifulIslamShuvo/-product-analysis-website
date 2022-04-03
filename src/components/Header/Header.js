import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-6 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link to="/home" className='font-sans text-2xl font-bold '><span className='text-rose-700'>ROYALS</span> <span className='text-sky-600'>CAR-BD</span></Link>
                
            </div>
            
            <div className='flex gap-4 text-xl'>
                <CustomLink to="/home">HOME</CustomLink>
                <CustomLink to="/reviews">REVIEWS</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink to="/blogs">BLOGS</CustomLink>
                <CustomLink to="/about">ABOUT</CustomLink>
            </div>
        </div>
    );
};

export default Header;