import React, { useState } from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const Tablenotes = ({ showAddForm }) => {
  const [notes, setNotes] = useState([]);

  return (
    <>
      {showAddForm && <AddNote />}
      <div className="content-table">
        <Note />
      </div>
    </>
  );
};

export default Tablenotes;
