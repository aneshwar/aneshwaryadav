import React, { useContext, useEffect } from "react";
import NoteContext from "../context/Notes/NoteContext";
import Addnote from "./Addnote";
import Note from "./Note";



function Noteitem () {
  const { note, setnote, addnote, getnote } = useContext(NoteContext);
 
  useEffect(() => {
    getnote()
  
  
  }, [getnote])
  return (
    <>
      <Addnote />

      <div className="grid grid-flow-row-dense grid-cols-4 py-5 gap-2">
        {note.map((note, i) => {
          return (
            <div className="pl-2 pr-2" key={i}>
              <Note note={note} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Noteitem;