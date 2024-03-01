import React, { useState, useEffect } from 'react';
import arrow from "../assets/arrow.svg";
import selectedBanner from "../assets/bannerAssets/selectedBanner.svg"
import notSelectedBanner from "../assets/bannerAssets/notSelectedBanner.svg"

interface BannerProps {
    images: string[];
}

const Banner: React.FC<BannerProps> = ({ images }) => {

    {/* For Desktop Use */ }

    const [currentIndex, setCurrentIndex] = useState(0);
    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    {/* For mobile Use */ }

    const [touchStartX, setTouchStartX] = useState(0);
    const [touchMoveX, setTouchMoveX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);


    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging) setIsDragging(true);
        setTouchMoveX(event.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (isDragging) {
            const difference = touchStartX - touchMoveX;
            if (difference > 50) {
                goToNextImage();
            } else if (difference < -50) {
                goToPrevImage();
            }
            setIsDragging(false);
        }
        setTouchStartX(0);
        setTouchMoveX(0);
    };

    { /* Banner AutoScroll */ }

    useEffect(() => {
        const interval = setInterval(() => {
            goToNextImage()
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative h-1/6  sm:h-2/5 lg:h-3/5 bg-black"
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}>

            {/* Left arrow */}
            <div onClick={goToPrevImage} className="cursor-pointer absolute z-10 left-0 w-20 bg-black h-full opacity-0 hover:opacity-50 transition-opacity duration-500 flex justify-center items-center">
                <img src={arrow} alt="" className="h-6 w-6 transform invert rotate-180" />
            </div>

            {/* Right arrow */}
            <div onClick={goToNextImage} className="cursor-pointer  absolute z-10 top-1/2 right-0 transform -translate-y-1/2 w-20 bg-black h-full opacity-0 hover:opacity-50 transition-opacity duration-500 flex justify-center items-center">
                <img src={arrow} alt="" className="h-6 w-6 invert mx-8" />
            </div>

            {/* Center Dots*/}
            <div className='z-10 absolute bottom-4 space-x-7 left-0 w-full h-1 flex justify-center items-center'>
                {images.map((_, circleIndex) => (
                    <img
                        key={circleIndex}
                        src={`${circleIndex === currentIndex ? selectedBanner : notSelectedBanner}`}
                        alt={`Banner ${circleIndex}`}
                        className={`w- h-3 mx-1 cursor-pointer opacity-50 hover:opacity-90 hover:scale-110 transition-all`}
                        onClick={() => goToImage(circleIndex)}
                    />
                ))}
            </div>

            {images.map((images, index) => (
                <img
                    key={index}
                    src={images}
                    alt={`Banner ${index}`}
                    className={`absolute  w-full h-full object-cover  overflow-hidden transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}



        </div>
    );
};

export default Banner;
