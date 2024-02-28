import React, { useState, useEffect } from 'react';
import arrow from "../assets/arrow.svg";

interface BannerProps {
    images: string[];
}

const Banner: React.FC<BannerProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    /* useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]); */

    return (
        <div className="relative h-3/5 overflow-hidden bg-black">

            {/* Left arrow */}
            <div onClick={goToPrevImage} className="absolute z-10 left-0 w-20 bg-black h-full opacity-0 hover:opacity-50 transition-opacity duration-500 flex justify-center items-center">
                <img src={arrow} alt="" className="h-6 w-6 transform invert rotate-180" />
            </div>

            {/* Right arrow */}
            <div onClick={goToNextImage} className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2 w-20 bg-black h-full opacity-0 hover:opacity-50 transition-opacity duration-500 flex justify-center items-center">
                <img src={arrow} alt="" className="h-6 w-6 invert mx-8" />
            </div>

            {images.map((images, index) => (
                <img
                    key={index}
                    src={images}
                    alt={`Banner ${index}`}
                    className={`absolute  w-full h-full object-cover transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
        </div>
    );
};

export default Banner;
