import Router from 'next/router'
import React from 'react'
import Ak from './Ak'


function In() {
  return ( <>
    <div className='flex justify-around text-md bg-yellow-400 '>
      <div onClick={() => Router.push('/')} className='hover:text-blue-500 hover:text-lg'>
        <p>Aneshwar Yadu</p>
        
      </div>
      
      <div onClick={() => Router.push('/gl')} className='flex hover:text-blue-500 space-x-1 hover:text-lg'>
          <p>Ganesh</p>
          <p>Laxmi</p>
      </div>
     
       
      <div onClick={() => Router.push('/ts')} className='flex hover:text-lg hover:text-blue-500 space-x-1'>
        <p>Tulsi Mata</p>
        <p>Sali bhagvan</p>
      </div>
   
    </div>
   
  
</> )
}




export default In