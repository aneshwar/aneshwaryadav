import React, { useState } from "react";

export default function Navbar({sidebar}) {

  return (
    <>
      <div className="flex justify-between h-7 text-yellow-200 bg-yellow-500 items-center">
        <p onClick={sidebar} className="bg-blue-400 px-3 rounded-md">
          Aneshwar
        </p>
        <input
          type="text"
          className="outline-none bg-white text-black flex-1 ml-4 mr-4 rounded-md "
          placeholder="   Search"
        />
        <p className="bg-blue-400 px-3 rounded-md">logo</p>
      </div>
    </>
  );
}
