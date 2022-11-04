import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NoteState from "../context/Notes/NoteState";
import "../styles/style.css";
import React, { useState } from "react";
import Main from "../components/Notes";
import Notes from "../components/Notes";

function MyApp({ Component, pageProps }) {
  const [side, setside] = useState("");

  const sidebar = () => {
    if (side == "hidden") {
      setside("");
    } else {
      setside("hidden");
    }
  };

  return (
    <>
      <NoteState>
        <Navbar sidebar={sidebar} />
        {/* <div className={`flex`}>
          <Sidebar side={side} />
      </div> */}
        <Component {...pageProps} />
       {/* <Notes /> */}
       
      </NoteState>
    </>
  );
}

export default MyApp;
