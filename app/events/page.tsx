import HorizontalCard from "../../components/horizontalcard";
import cardData from '../data/eventdata';
import { CardData } from "../types/types";


const Events = () => {
  return (
    <div className="text-center  py-44 bg-primary-bg  ">
      <h1 className="font-medium leading-10 text-4xl flex justify-center"> Events </h1>
      <p className="text-gray-500 py-5 md:py-7 text-justify m-auto w-2/3">
      4K Labs has a vast event category, where some are dedicated to lab members only and others the general public. 
      4K Labs events are open door day, Demo Day, chat with 4KLabs, let us connect, 
      and trainings. The description for each event is as follows:-
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
