import React, { useState } from "react";
import Note from "./Note";

const Tablenotes = () => {
  const [notes, setNotes] = useState([]);

  return (
    <div className="content-table">
      <Note />
    </div>
  );
};

export default Tablenotes;
