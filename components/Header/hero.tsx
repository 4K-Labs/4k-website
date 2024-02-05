import React from 'react'
import robot from '../../public/images/robot.png'
import Image from 'next/image'
import Button from '../button'

import Video from 'next/image'

const Hero = () => {
  return (
    <div className='w-3/4 py-60 m-auto flex justify-around  items-center self-center'>
      <div className='flex-col justify-start self-center'>
      <div className='font-medium leading-10 text-3xl md:text-4xl pr-10'>
        Welcome To 4K Labs - <br/> Igniting Curiosity, Fostering <br/> Excellence
      </div>
      <p className='py-3 md:py-6 font-light text-lg md:text-xl leading-10'> Where innovation Meets Dedication</p>
      <Button> EXPLORE OUR JOURNEY</Button>
      </div>
      <div>
        <Video className='hidden md:block' src={'/4krobot.MP4'} width={500} height={500} alt={''}/>
        {/* <Image className = 'hidden md:block' src={robot} alt = "robot"/> */}
      </div>

    </div>
  )
}

export default Hero