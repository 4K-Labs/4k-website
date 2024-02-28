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
      4K Labs has a vast event category, where some are dedicated to lab members only and others the general public. 
      4K Labs events are open door day, Demo Day, chat with 4KLabs, let us connect, 
      and trainings. The description for each event is as follows:-
      </p>
      <p className='text-justify m-auto w-2/3 py-1  text-gray-500'>
        <span className="font-bold  text-primary ">
            <span className="border-b-4 border-primary  text-gray-500 ">
              Open {" "}
            </span>
            Day: {" "}
          </span>
          during this event the general public could come to 4K Labs and visit the lab while also networking with potential like minded peoples. 
      </p>
      <p className='text-justify m-auto w-2/3 py-1  text-gray-500'>
        <span className="font-bold  text-primary ">
            <span className="border-b-4 border-primary  text-gray-500 ">
              Demo {" "}
            </span>
            Day: {" "}
          </span>
          is an event in 4K Labs where the members of the lab showcase their projects.
      </p>
      <p className='text-justify m-auto w-2/3 py-1  text-gray-500'>
        <span className="font-bold  text-primary ">
            <span className="border-b-4 border-primary  text-gray-500 ">
            Chat with {" "}
            </span>
            4K Labs: {" "}
          </span>
          Discussion is one of the pivotal points for technological advancement. To take advantage of this, 4K Labs invites professionals for public discussion on a specific trending topic. 
      </p>
      <p className='text-justify m-auto w-2/3 py-1  text-gray-500'>
        <span className="font-bold  text-primary ">
            <span className="border-b-4 border-primary  text-gray-500 ">
            Let Us{" "} 
            </span>
            Connect: {" "}
          </span>
          With a strong network, tech labs can accelerate their growth. 4K Labs hosts online, in-person, or hybrid networking events to synergize tech labs.
      </p>
      <p className='text-justify m-auto w-2/3 py-1 text-gray-500'>
        <span className="font-bold  text-primary ">
            <span className="border-b-4 border-primary  text-gray-500 ">
            Training
            </span>
            : {"  "}
          </span>
          We at 4K Labs appreciate working on the transfer of knowledge, which is one of the key values of our lab. We provide training in the areas of programming, graphics design, digital fabrication, and related areas. 
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
