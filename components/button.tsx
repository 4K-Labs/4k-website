import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className='bg-primary text-white font-[Poppins] py-2 px-6 rounded hover:bg-primary-100 duration-500'>
      {props.children}
    </button>
  );
};

export default Button;
