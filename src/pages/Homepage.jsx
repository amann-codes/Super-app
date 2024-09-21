import React from 'react'
import ProfileCard from '../components/ProfileCard'

export default function Homepage() {
  return (
    <div className='w-screen h-screen bg-black p-5'>
      <div className='flex flex-wrap gap-3'>
      <ProfileCard/>
      </div>
    </div>
  )
}
