'use client'

import React, { useState, useEffect } from 'react';
import Testimony from './Testimony';
import TestimonyMobile from './TestimonyMobile';

const Testimonial = () => {

  return (
    <div>
      <div className="flex justify-center p-4"><h1 className="text-4xl font-bold p-4">Testimonial</h1></div>
      {window.innerWidth>=530 ? (
        <Testimony/>
      ) : (
        <TestimonyMobile/>
      )}
    </div>
  );
};

export default Testimonial;
