import React, { useState, useEffect } from 'react';

interface BannerProps {
    images: string[];
}

const Banner: React.FC<BannerProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    return (
        <div className="relative h-1/2 overflow-hidden">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Banner ${index}`}
                    className={`absolute w-full h-full object-cover transition-transform duration-500 ${index === currentIndex ? 'translate-x-0' : index === currentIndex - 1 || (currentIndex === 0 && index === images.length - 1) ? '-translate-x-full' : 'translate-x-full'
                        }`}
                />
            ))}
        </div>
    );
};

export default Banner;