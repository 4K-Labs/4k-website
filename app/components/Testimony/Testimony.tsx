'use client'

import { useMediaQuery } from 'react-responsive'
import TestimonyDesktop from './TestimonyDesktop';
import TestimonyMobile from './TestimonyMobile';

const Testimony = () => {
  const isTabletOrMobile  = useMediaQuery({ query: '(min-width: 527px)' })

  return (
    <div>
      <div className="flex justify-center p-4">
        <h1 className="text-4xl font-bold">Testimonial</h1>
      </div>
      {isTabletOrMobile ? (
        <TestimonyDesktop/>
      ) : (
        <TestimonyMobile/>
      )}
    </div>
  );
};

export default Testimony;
