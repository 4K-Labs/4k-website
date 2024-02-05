'use client'
// 'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2; // Set the total number of slides

  const scrollSlider = (direction:String) => {
    if (direction === 'left') {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    } else {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }
  };

  return (
    <div className="relative w-full py-40">
      <div className="slider-container flex items-center justify-between overflow-hidden">
        <div className="left-arrow flex-shrink-0" onClick={() => scrollSlider('left')}>
          Left Arrow
        </div>

        <div className="slider flex transition-transform ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {/* Your existing content here */}
          <div className="slide flex gap-4 w-full">
          
            <div className="flex flex-col w-4/6 inline-block">
              <Image width={500} height={500} src="/images/event.jpg" alt="" className="w-40 h-40" />
              <div>
                <p>The content of the testimonials goes here.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2">Hello</div>
                <div>
                  <h1>Name</h1>
                  <h1>Title</h1>
                </div>
                <div className="mt-2">World</div>
              </div>
            </div>

            <div className="flex flex-col w-4/6 inline-block">
              <Image width={500} height={500} src="/images/event.jpg" alt="" className="w-40 h-40" />
              <div>
                <p>The content of the testimonials goes here.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2">Hello</div>
                <div>
                  <h1>Name</h1>
                  <h1>Title</h1>
                </div>
                <div className="mt-2">World</div>
              </div>
            </div>

          </div>
        </div>

        <div className="right-arrow flex-shrink-0" onClick={() => scrollSlider('right')}>
          Right Arrow
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;


// <div className="flex items-center justify-between w-full">
//     <div className="flex-shrink-0">Left Arrow</div>

//     <div className="flex flex-col w-4/6">
//         <div>
//             <Image width={500} height={500} src="/images/event.jpg" alt="" className='w-40 h-40'/>
//         </div>
//         <div>
//             <p>The content of the testimonials goes here.</p>
//         </div>
//         <div className="flex flex-col items-center">
//             <div className="mb-2">
//                 Hello
//             </div>
//             <div>
//                 <h1>Name</h1>
//                 <h1>Title</h1>
//             </div>
//             <div className="mt-2">
//                 World
//             </div>
//         </div>
//     </div>

//     <div className="flex-shrink-0">Right Arrow</div>
// </div>