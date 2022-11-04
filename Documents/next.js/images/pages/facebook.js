import { useRouter } from "next/router";
import React from "react";

function facebook() {
  const router = useRouter()  
  const js = 'rounded-md w-full bg-blue-700 px-2 text-white font-bold'
  return (
    <div className="flex justify-center items-center bg-gray-200 h-screen ">
        {/* 1st div */}
      <div className="flex  flex-col items-center justify-center ml-36 p-4 px-10 w-1/2">
        <img className="w-full h-16" src="IMG-20220510-WA0001.jpg" alt="" />
        <p className="flex flex-wrap">
          Lorem ipsum dolor sit amet consectetur 
        </p>
      </div>
      {/* //2nd div */}
      <div className="text-center border bg-white flex flex-col w-1/5 justify-center items-center mr-36 p-4 relative">
         <input className="my-3 px-1 py-2 w-full border bottom-4 outline-blue-600" type="text" placeholder="Enter email" />
         <input className="my-3 px-1 py-2 w-full border bottom-4 outline-blue-600" type="password" placeholder="Enter password" />
        
         <sspan className='hover:underline text-blue-800 py-3'>Forget password now</sspan>
        
         <hr />
         <button className="jk">Log In</button>
         <button className="rounded-md text-white px-6  bg-green-700 py-1 font-bold my-2" onClick={() => router.push('/singUp')}>Create Now</button>
        <span className="absolute -bottom-14 text-sm"><span className="font-bold">Create a page</span> Page for cloudy brond and bussness</span>
      </div>
      
    </div>
  );
}

export default facebook;
