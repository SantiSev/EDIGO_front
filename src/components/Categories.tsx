import React from 'react'

interface CategoryProps {
  categories: string[];
}


const Categories: React.FC<CategoryProps> = ({ categories }) => {
  
    return (
      <div className='mx-16 mb-12'>
        <div className='py-4 font-satoshi font-bold text-2xl relative'>
          Top Categorias
          <div className="w-80 h-[0.5px] bg-black "></div>
        </div>


        <div className='flex justify-center space-x-6 pb-10'>
          {categories.map((category, index) => (
            <div key={index} className='flex items-center justify-center rounded-md hover:scale-125 transition-all font-satoshi font-bold w-32 h-32 bg-slate-300'>
              {category}
            </div>
          ))}
        </div>
      </div>
    )
}

export default Categories;
