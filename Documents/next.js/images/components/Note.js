import React, { useContext } from "react";
import NoteContext from "../context/Notes/NoteContext";
import NoteState from "../context/Notes/NoteState";
// import { FaBeer } from 'react-icons/fa';

export default function Note({ note, i }) {
  const { _id, user, title, description, tag, date } = note;
  const {deletnote, editnote} = useContext(NoteContext)

  
  return (
    <div key={i} className="border border-blue-900">
      <div className="flex flex-row-reverse justify-evenly">
        <p onClick={() => deletnote(_id)} className="bg-blue-700 px-2 rounded opacity-90 hover:opacity-100 ">
          delet
        </p>
        <p className="bg-blue-700 px-2 rounded opacity-90 hover:opacity-100">
          edit
        </p>
      </div>

      <p>{title}</p>
      <p>{description}</p>
      <p>{tag}</p>
    </div>
  );
}
