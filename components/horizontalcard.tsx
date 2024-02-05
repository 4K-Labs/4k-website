import React from 'react';
import { CardData } from '../app/types/types';
import Image from 'next/image';


interface HorizontalCardProps {
  eventData: CardData;
  index: number;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ eventData, index }) => {
  const { category, title, content, imageUrl } = eventData;

  return (
    <>
    <div className={`w-3/4 m-auto border mt-10 border-gray-200 rounded-lg overflow-hidden shadow-lg`}>
      <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        <div className="lg:w-1/2">
          <Image src={imageUrl} alt="card-image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6 lg:w-1/2">
          <h6 className="text-gray-500 mb-4 uppercase">{category}</h6>
          <h4 className="text-blue-gray-700 text-2xl font-bold mb-2">{title}</h4>
          <p className="text-gray-600 mb-8">{content}</p>
          <a href="#" className="inline-block">
            <button className="flex items-center gap-2 bg-transparent border border-blue-500 text-blue-500 font-semibold px-4 py-2 rounded-md transition duration-300 hover:bg-blue-500 hover:text-white">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default HorizontalCard;
