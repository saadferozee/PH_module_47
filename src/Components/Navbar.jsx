import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className='border w-full px-[5%] py-2 text-center flex justify-between'>
                <h1 className='font-thin text-2xl'>This is navbar</h1>
                <div className='flex gap-5 font-light'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;