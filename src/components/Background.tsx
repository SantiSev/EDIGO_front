import React, { ReactNode } from 'react';
import wavesSgv from '../assets/waves.jpg';

interface BackgroundProps {
    children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
        <div className="absolute bg-white w-full h-full">
            {children}

           {/*  <img className='absolute bottom-0 w-full h-1/6' src={wavesSgv} alt="none" /> */}
        </div >
    );
};

export default Background;