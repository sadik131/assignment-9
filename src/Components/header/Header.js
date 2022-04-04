import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-between py-4 px-4 bg-slate-400 sticky top-0'>
            <div>
                <h1 className='text-5xl font-bold'>GTA 5 Online</h1>
            </div>
            <div className='p-4 text-2xl flex'>
                <CustomLink className='m-4' to="/">Home</CustomLink>
                
                <CustomLink className='m-4' to="/Ratting">Ratting</CustomLink>
                <CustomLink  className='m-4' to="/dashbord">Dashbord</CustomLink>
                <CustomLink className='m-4' to="/blog">blog</CustomLink>
                <CustomLink className='m-4' to="/about">About</CustomLink>
            </div>
        </div>
    );
};

export default Header;