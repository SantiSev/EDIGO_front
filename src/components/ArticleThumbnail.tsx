import React from 'react'
import { ArticleThumbnailProps } from '../assets/dummyData';


{/*TODO: change interface arrangements */ }
interface ArticleThumbnailProps_ {
    article: ArticleThumbnailProps;
}


const ArticleThumbnail: React.FC<ArticleThumbnailProps_> = ({ article }) => {
    return (
        <div className="-mx-16 my-2 flex flex-col items-center">
            <div className='relative hover:scale-110 transition-all rounded-md w-1/2 h-1/2 cursor-pointer overflow-hidden'>
                <div className="w-full h-full">
                    <img src={article.imageUrl} alt={article.name} className="object-cover w-full h-full" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <p className="mt-2 text-center">{article.name}</p>
                </div>
            </div>
        </div>
    )
}

export default ArticleThumbnail