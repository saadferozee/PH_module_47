import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='border py-0.5 font-thin text-sm text-center'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Saad Ferozee</p>
            </div>
        </div>
    );
};

export default Footer;