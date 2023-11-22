import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className='bg-orange-400 text-white font-[Poppins] py-2 px-6 rounded hover:bg-orange-200 duration-500'>
      {props.children}
    </button>
  );
};

export default Button;
