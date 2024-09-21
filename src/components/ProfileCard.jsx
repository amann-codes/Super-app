import React from 'react'
import image from './pfp.png';
export default function ProfileCard() {
  const cat = JSON.parse(localStorage.getItem('selectedCategories'))
  console.log(cat)
  return (
    <div className='w-[600px] h-max flex flex-row bg-[#5746EA] rounded-3xl'>
        <img src={image} width={100} className='m-4'></img>
        <div className='flex flex-col justify-start pr-6 mt-4'>
            <p className='font-normal text-lg text-white mt-4'>{localStorage.getItem('name')}</p>
            <p className='font-normal text-lg text-white'>{localStorage.getItem('email')}</p>
            <p className='font-normal text-3xl text-white'>{localStorage.getItem('username')}</p>
            <div className='flex flex-wrap gap-3 my-3'>  
            {cat.map((items, index)=>{
              return <div className='w-max h-max rounded-full bg-[#9F94FF] py-1 px-2' key={index}>
                <p className=' text-white'>{items}</p>
              </div>
            }
          )}
          </div>
        </div>
    </div>
  )
}
