import { CardData } from '../types/types';

import python1 from '../../public/images/event/copy_of_python_training_1.png'
import python2 from '../../public/images/event/copy_of_python_training_2.png'
import python3 from '../../public/images/event/copy_of_python_training_3.png'
import python4 from '../../public/images/event/copy_of_python_training_4.png'
import demoday1 from '../../public/images/event/copy_of_demo_day_1.png'
import demoday2 from '../../public/images/event/copy_of_demo_day_2.png'
import demoday3 from '../../public/images/event/copy_of_demo_day_3.png'
import demoday4 from '../../public/images/event/copy_of_demo_day_4.png'
import remotesensing from '../../public/images/event/Remote_sensing.jpg'
import remotesensing2 from '../../public/images/event/t1.jpg'
import automatic from '../../public/images/event/2.jpg'
import automatic2 from '../../public/images/event/3.jpg'
import automatic3 from '../../public/images/event/san.jpg'
import opendoor from '../../public/images/event/opendoor.png'
import adwa from '../../public/images/event/hackaton.jpg'
import { autocompleteClasses } from '@mui/material';
const cardData: CardData[] = [
  {
    category: 'startups',
    title: 'Python programming online training ',
    content:
      'Online is where everyone can come together regardless of location. With the opportunity of online tools and the internet, the world has become a smaller place. 4K Labs was able to train more than 150 youth online on python programming. The training included students from different regional parts of  #Ethiopia like Bahir Dar, Adama, and dire dawa. More over students from different part of africa such as #Liberia, #Botswana, and #Cameroon also benefited from the free training opportunity. ',
    imageUrl: [python1, python2, python3, python4]
  },
  {
    category: 'startups',
    title: 'Open house',
    content:
      '4K Labs opens its door for the public to come and visit the lab. Taking the advantage of this event students, teachers, and industry professionals come together to network and discuss technology. Networking has a key value for R&D, as it will help us discover new territories of opportunity and skills. ',
    imageUrl: [opendoor]
  },
  {
    category: 'startups',
    title: 'Demo Day',
    content:
      'Its an important part of a 4K Labs culture to demonstrate projects that are being developed, which will help us shape and molde projects in the right direction at its early age. During this event members of 4K Labs have showcased their projects, which they worked on for a couple of months. Invited guests and lab members participated in commenting and shaping projects for a better opportunity. ',
    imageUrl: [demoday1, demoday2, demoday3, demoday4]
  },
  {
    category: 'startups',
    title: 'Adwa Hackathon',
    content:
      'This hackathon was dedicated to Alpha1s robot. The challenge was to find ways to control the signals in Alpha1s in a defined manner and develop functionalities. It was given the name “ADWA Hackathon due to the fact that the event was the same exact day of the Ethiopian ADWA celebration. Members of 4K Labs as well students that were interested participated in the hackathon. The achievements from the hackathon were promising.',
    imageUrl: [adwa]
  },
  {
    category: 'startups',
    title: 'Remote sensing training',
    content:
      'Training on remote sensing was provided By Dr. Tesfaye which was facilitated by ACDRM(African Center for Disaster Risk Management). The training was on acquisition of information about an object or phenomenon without making physical contact using satellites and remote sensing. Which is important especially to acquiring information about the Earth. Few projects have been developed after the training. ',
    imageUrl: [remotesensing, remotesensing2]
  },
  {
    category: 'startups',
    title: 'Automatic Sanitizer Dispenser',
    content:
      '4K Labs strives to find local solutions to problems existing in Ethiopia. In response to COVID-19 4k Labs have collaborated with FabLab Addis to develop a contactless sanitizer dispenser. We were able to change this project into a product for mass manufacturing. The dispenser was designed and implemented with significant attention to details. This product included a user manual and a branded package.',
    imageUrl: [automatic,automatic2,automatic3]
  }
];

export default cardData;
