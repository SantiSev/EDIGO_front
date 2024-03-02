import React from 'react'
import { ArticleThumbnailProps } from '../assets/dummyData';


{/*TODO: change interface arrangements */}
interface ArticleThumbnailProps_{
    article: ArticleThumbnailProps;
}


const ArticleThumbnail: React.FC<ArticleThumbnailProps_> = ({ article }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={article.imageUrl} alt={article.name} className="w-32 h-32 object-cover rounded-md" />
            <p className="mt-2 text-center">{article.name}</p>
        </div>
    )
}

export default ArticleThumbnail