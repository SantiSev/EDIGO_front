import React, { useState, useEffect } from 'react';

interface CategoryProps {
  categories: string[];
}

interface SliderProps {
  categories: string[];
  startIndex: number;
}

const Categories: React.FC<CategoryProps> = ({ categories }) => {

  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex((startIndex - 1 + categories.length) % categories.length);
  };

  const handleNextClick = () => {
    setStartIndex((startIndex + 1) % categories.length);
  };

  return (
    <div className="w-full h-fit relative">
      <div className='py-4 font-satoshi font-bold text-2xl relative'>

        <div className='mx-5'>
          Top Categorias
          <div className="w-80 h-[0.5px] bg-black "></div>
        </div>

        <div className='mt-2 transform space-x-2 flex justify-center items-center'>
          <button className="text-3xl " onClick={handlePrevClick}>‹</button>
          <CategorySlider categories={categories} startIndex={startIndex} />
          <button className="text-3xl" onClick={handleNextClick}>›</button>
        </div>
      </div>
    </div>
  );
}

const CategorySlider: React.FC<SliderProps> = ({ categories, startIndex }) => {
  const [maxItemsToShow, setMaxItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMaxItemsToShow(6); // Show 5 items for wider screens
      } else {
        setMaxItemsToShow(3); // Show 3 items for smaller screens
      }
    };
    handleResize(); // Call once to set initial maxItemsToShow
    window.addEventListener('resize', handleResize);

    console.log(window.innerWidth)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex justify-center items-center space-x-2 md:space-x-6'>
      {(categories.concat(categories)).slice(startIndex, startIndex + maxItemsToShow).map((category, index) => (
        <div key={index} className='cursor-pointer flex items-center justify-center rounded-md  hover:scale-110 transition-all font-satoshi text-xs md:text-sm font-bold h-20 w-20   md:w-28 md:h-28 bg-slate-300'>
          {category}
        </div>
      ))}
    </div>
  )
}

export default Categories;
