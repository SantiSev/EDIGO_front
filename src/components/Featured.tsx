
import { ArticleThumbnailProps } from '../assets/dummyData';
import ArticleThumbnail from './ArticleThumbnail';

interface FeaturedProps {
    articles: ArticleThumbnailProps[];
}


const Featured: React.FC<FeaturedProps> = ({ articles }) => {


    return (
        <div className="w-full h-fit relative font-satoshi">
            <div className='font-bold text-2xl relative'>

                <div className='mx-5'>
                    Featured
                    <div className="w-80 h-[0.5px] bg-black "></div>
                </div>
            </div>

            <div className="grid md:grid-cols-4 mx-24 mt-4 justify-center items-center ">
                {articles.map((article, index) => (
                    <ArticleThumbnail key={index} article={article} /> // Pass each article as a prop to ArticleThumbnail
                ))}
            </div>

        </div>
    );
}




export default Featured;
