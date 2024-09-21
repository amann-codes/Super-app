import React from 'react'
import ProfileCard from '../components/ProfileCard'
import WeatherCard from '../components/WeatherCard'

export default function Homepage() {
  return (
    <div className='w-screen h-screen bg-black p-5'>
      <div className='flex flex-col gap-3'>
      <ProfileCard/>
      <WeatherCard/>
      </div>
    </div>
  )
}
