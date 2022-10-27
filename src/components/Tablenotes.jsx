import React, { useState, useEffect } from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const Tablenotes = ({ showAddForm }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const notesFromServer = await fetchNotes();
      setNotes(notesFromServer);
    };
    getNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await fetch("http://localhost:5500/notes");
    const data = await res.json();
    return data;
  };

  return (
    <>
      {showAddForm && <AddNote />}
      <div className="content-table">
        {notes.map((noteContent, index) => (
          <Note key={index} noteContent={noteContent} />
        ))}
      </div>
    </>
  );
};

export default Tablenotes;
