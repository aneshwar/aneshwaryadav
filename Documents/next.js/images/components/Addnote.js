import React, { useContext, useState } from 'react'
import NoteContext from '../context/Notes/NoteContext'

 function Addnote () {
    const {addnote} = useContext(NoteContext)
    const [note, setnote] = useState({title: 'aneshwar', description:'', tag:''})
    const hadleclick = () => {
       addnote(note.title, note.description, note.tag)
       console.log(note.title)
    }
    const onchange = (e) => {
        e.preventDefault();
     setnote({...note, [e.target.name]: e.target.value})
     
     
    }


   

  return (
    <div>
         <p className="text-center py-5 ">Add notes</p>
      <div className="space-y-8 flex-none text-center">
        <input
        onChange={onchange}
          type="text"
          name="title"
          id="title"
          placeholder="title"
          className="outline-none border-blue-600 border-2"
        />
        <br />
        <input
        onChange={onchange}
          type="text"
          name="description"
          id="decription"
          placeholder="decription"
          className="outline-none border-blue-600 border-2"
        />
        <br />
        <input
        onChange={onchange}
          type="text"
          name="tag"
          id="tag"
          placeholder="tag"
          className="outline-none  border-blue-600 border-2"
        />
        <br />
        <button
         disabled={note.title.length<2 || note.description.length <2|| note.tag.length < 1}
         className="bg-blue-400 px-2 my-10 rounded-md text-left" onClick={hadleclick}>
          Add Note
        </button>
      
      </div>
    
    </div>
  )
}

export default Addnote;