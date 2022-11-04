import { useEffect, useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  let host = "http://localhost:3000";

  const [note, setnote] = useState([{title: 'aneshwra', description: 'aneshwar yadav', tag: 'tag'}]);
  // addnote

  const getnote = async () => {
    const responce = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ZmFjMWM4N2YwYmQ2N2M4YzNkMjE3In0sImlhdCI6MTY2NjE2NTgwNH0.pK0sPJzF6GNvn5mR4qUQTO-PgA6ct7r6FpofTGI-8Ss",
      },
    });
    const json = await responce.json();
    console.log(json);
  };
  const addnote = async (title, description, tag) => {
    const responce = await fetch(`${host}/api/notes/createnotes`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ZmFjMWM4N2YwYmQ2N2M4YzNkMjE3In0sImlhdCI6MTY2NjE2NTgwNH0.pK0sPJzF6GNvn5mR4qUQTO-PgA6ct7r6FpofTGI-8Ss",
      },
      body: JSON.stringify(title, description, tag),
    });
    //  const json = responce.json()
    const note1 = {
      _id: `634fd5205a01e2212e4825`,
      user: "634fac1c87f0bd67c8c3d217",
      title: title,
      description: description,
      tag: tag,
      date: "1666176288296",
      __v: 0,
    };
    setnote(note.concat(note1));
  };

  const deletnote = (id) => {
    const newnote = note.filter((note) => {
      return note._id !== id;
    });
    setnote(newnote);
  };
  // edite note
  const editnote = async (id, title, description, tag) => {
    const responce = await fetch(`${host}/api/notes/upadate/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ZmFjMWM4N2YwYmQ2N2M4YzNkMjE3In0sImlhdCI6MTY2NjE2NTgwNH0.pK0sPJzF6GNvn5mR4qUQTO-PgA6ct7r6FpofTGI-8Ss",
      },
      body: JSON.stringify(data),
    });
    const json = responce.json();
    // logic edite in clinte
    for (let index = 0; index < note.length; index++) {
      const element = note[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ note, setnote, addnote, deletnote, editnote, getnote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
