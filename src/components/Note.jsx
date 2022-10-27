import React from "react";

const Note = ({ noteContent }) => {
  return (
    <div className="content-table-card">
      <div className="content-table-card-header">
        <div>
          <span>{noteContent.title}</span>
        </div>
        <div>
          <span onClick={() => alert("deleted")}>X</span>
        </div>
      </div>
      <div className="content-table-card-content">{noteContent.content}</div>
    </div>
  );
};

export default Note;
