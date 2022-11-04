import React from 'react'

export default function Sidebar({side}) {
  return (
    <div className={`${side} bg-red-400 font-bold text-blue-900 w-36 flex-col h-screen px-5 overflow-hidden`}>
      <p className='py-2 w-screen'>Home</p>
      <p className='py-2'>About</p>
      <p className='py-2'>Eplore</p>
      <p className='py-2'>open</p>
      <p className='py-2'>close</p>
    </div>
  )
}
