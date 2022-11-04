import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function singUp() {
    const router = useRouter()
  
   
  return (
    <div className='bg-gray-300 h-screen flex flex-col justify-center items-center'>
       <div className='bg-white justify-center items-center flex flex-col pt-4'>
            <p className='text-3xl pb-4'>Create a Account</p>
        <input className='w-96 outline-blue-400 rounded-md border border-1 my-2 py-2 px-1 mx-6' required min={3} type="text" placeholder='Enter Name' />
        <input className='w-96 outline-blue-400 rounded-md border border-1 my-2 py-2 px-1' type="text" placeholder='Enter Lastname' />
        <input className='w-96 outline-blue-400 rounded-md border border-1 my-2 py-2 px-1' type="password" placeholder='Password' />
        <input className='w-96 outline-blue-400 rounded-md border border-1 my-2 py-2 px-1'  type="password" placeholder='Crent Password' />
        <input className='font-bold text-white w-60 bg-blue-600 rounded-full border border-1 my-6 py-2 px-1' type="submit" onClick={() => router.push('/facebook')} />
       </div>
    
    </div>
  )
}

export default singUp