// components/NewsCard.tsx
import { FaRegNewspaper } from 'react-icons/fa';

interface NewsCardProps {
 
  title: string;
  date: string;
  description: string;
  imageSrc: string;

}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, description, imageSrc }) => {
  return (
    <div className="bg-white   overflow-hidden ">
      <div className="relative overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-60 object-cover  relative z-0  transition-all duration-300 hover:scale-110" />
        <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-sm uppercase">
          <FaRegNewspaper className="inline mr-1" /> News
        </div>
      </div>
      <div className="p-2 mt-6">
        <div className="text-black text-sm mb-2 uppercase">Post by Alukas Shopify - {date}</div>
        <h2 className="font-semibold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
       <div className='text-lg  group relative w-max'>
       <a href={``} className="text-black px-1 relative z-10 group-hover:text-white">
          Continue Reading
          
        </a>
        <span className='absolute left-0 bottom-0 w-full h-0.5 transition-all bg-black z-0 group-hover:h-full'></span>
       </div>
      </div>
    </div>
  );
};

export default NewsCard;
