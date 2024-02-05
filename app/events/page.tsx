import HorizontalCard from "../../components/horizontalcard";
import cardData from '../data/eventdata';
import { CardData } from "../types/types";


const Events = () => {
  return (
    <div className="text-center  py-44 bg-gray-100  ">
      <h1 className="font-medium leading-10 text-4xl flex justify-center"> Events </h1>
      <p className="text-gray-500 py-5 md:py-7 text-center m-auto w-2/3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
        vero iusto officiis deserunt sit ipsa neque illum ducimus! Ut, autem?
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
