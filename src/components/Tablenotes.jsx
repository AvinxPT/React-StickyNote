import React, { useState, useEffect } from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const Tablenotes = ({ showAddForm, setShowAddForm, userId }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const notesFromServer = await fetchNotesForUser(userId);
      setNotes(notesFromServer);
    };
    getNotes();
  }, []);

  const fetchNotesForUser = async (id) => {
    const res = await fetch(`http://localhost:5500/notes/${id}`);
    const data = await res.json();
    return data;
  };

  //const fetchNotes = async () => {
  //  const res = await fetch("http://localhost:5500/notes");
  //  const data = await res.json();
  //  return data;
  //};

  const deleteNote = async (id) => {
    const res = await fetch(`http://localhost:5500/notes/${id}`, {
      method: "DELETE",
    });
    res.status === 200
      ? setNotes(notes.filter((noteContent) => noteContent.id !== id))
      : alert("NOT DELETED");
  };

  //const addNewNote = async (note) => {
  //  const res = await fetch("http://localhost:5500/notes", {
  //    method: "POST",
  //    headers: {
  //      "Content-type": "application/json",
  //    },
  //    body: JSON.stringify(note),
  //  });
  //  const data = await res.json();
  //  setNotes([...notes, data.result]);
  //  setShowAddForm(false);
  //};

  const addNewNoteForUser = async (note) => {
    const res = await fetch("http://localhost:5500/notes/insert", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const data = await res.json();
    setNotes([...notes, data.result]);
    setShowAddForm(false);
  };

  return (
    <>
      {showAddForm && <AddNote onAdd={addNewNoteForUser} userid={userId} />}
      <div className="content-table">
        {notes.map((noteContent, index) => (
          <Note key={index} noteContent={noteContent} onDelete={deleteNote} />
        ))}
      </div>
    </>
  );
};

export default Tablenotes;
