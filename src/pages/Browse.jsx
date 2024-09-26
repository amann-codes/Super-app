import React from 'react'
import image from '../components/image.png';
import image2 from '../components/br.png';
export default function Browse() {
  return (
    <div className='w-sceen h-screen bg-black'>
      <div className='flex flex-row justify-between'>
        <img src={image} className='m-4 w-[150px]'></img>
        <img src={image2} width={50} className='m-4'></img>
      </div>
        <div className='mx-10 my-5'>
          <p className='text-white text'>Entertainment according to your choice</p>
        </div>
    </div>
  )
}
