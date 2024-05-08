import HorizontalCard from "../../components/horizontalcard";
import cardData from '../data/eventdata';
import { CardData } from "../types/types";


const Events = () => {
  return (
    <div className="text-center  py-44 bg-primary-bg  ">
      <div className='text-center pb-4'>
        <h3 className="mb-2 inline-block text-4xl font-bold  text-primary  font-heading">
          <span className="border-b-4 border-primary  text-gray-700 ">
            EVENTS
          </span>
        </h3>
      </div>
      <p className="text-gray-500 py-5 md:py-7 text-justify m-auto w-2/3">
      4K Labs has a vast event category, where some are dedicated to lab members only and others the general public. 4K Labs events are open door day, Demo Day, chat with 4KLabs, let us connect, and trainings. The description for each event is as follows 
      </p>
      
      <div>
      {cardData.map((event: CardData, index: number) => (
        <HorizontalCard  key={index} eventData={event} index={index} />
      ))}
    </div>
      
    </div>
  );
};

export default Events;
