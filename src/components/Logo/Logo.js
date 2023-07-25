import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'


const Logo = () => {
    return (
        <div className='ma2'>
            <Tilt className='Tilt pa1'>
                <div>
                    <img src={brain} alt="logo"/>
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;