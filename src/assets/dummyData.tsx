import b1 from '../assets/bannerAssets/b1.jpg'
import b2 from '../assets/bannerAssets/b2.jpg'
import b3 from '../assets/bannerAssets/b3.jpg'
import b4 from '../assets/bannerAssets/b4.jpg'
import img1 from "../assets/articleAssets/clothesTest (1).svg"
import img2 from "../assets/articleAssets/clothesTest (2).svg"
import img3 from "../assets/articleAssets/clothesTest (3).svg"
import img4 from "../assets/articleAssets/clothesTest (4).svg"
import img5 from "../assets/articleAssets/clothesTest (5).svg"
import img6 from "../assets/articleAssets/clothesTest (6).svg"
import img7 from "../assets/articleAssets/clothesTest (7).svg"
import img8 from "../assets/articleAssets/clothesTest (8).svg"


export const images: string[] = [b1,b2,b3,b4];

export const categories: string[] = [
  'Camperas',
  'Remeras',
  'Pantalones',
  'Vestidos',
  'Polleras',
  'Accesorios'
];

export const featured: string[] = ['article1', 'article2', 'article3'];

export interface ArticleThumbnailProps {
  name: string;
imageUrl: string;
}

export const articles: ArticleThumbnailProps[] = [
  {
    name: 'T-Shirt',
    imageUrl: img1
  },
  {
    name: 'Jeans',
    imageUrl: img2
  },
  {
    name: 'Sweater',
    imageUrl: img3
  },
  {
    name: 'T-Shirt',
    imageUrl: img4
  },
  {
    name: 'Jeans',
    imageUrl: img5
  },
  {
    name: 'Sweater',
    imageUrl: img6
  },
  {
    name: 'T-Shirt',
    imageUrl: img7
  },
  {
    name: 'Jeans',
    imageUrl: img8
  },
  {
    name: 'T-Shirt',
    imageUrl: img1
  },
  {
    name: 'T-Shirt',
    imageUrl: img1
  },
  {
    name: 'Jeans',
    imageUrl: img2
  },
  {
    name: 'Sweater',
    imageUrl: img3
  },
  {
    name: 'T-Shirt',
    imageUrl: img4
  },
  {
    name: 'Jeans',
    imageUrl: img5
  },
  {
    name: 'Sweater',
    imageUrl: img6
  },
  {
    name: 'T-Shirt',
    imageUrl: img7
  },
  {
    name: 'Jeans',
    imageUrl: img8
  },
  {
    name: 'T-Shirt',
    imageUrl: img1
  },
];