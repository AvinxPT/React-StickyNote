import React, { useState } from "react";

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, content);
    onAdd({ title, content });
  };

  return (
    <section className="newNote">
      <form className="newNote-form" onSubmit={submitHandler}>
        <div className="form-row">
          <label className="form-title">Title:</label>
          <input
            className="form-title-box"
            type="text"
            placeholder="add title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
        </div>
        <div className="form-row">
          <label className="form-description">Details:</label>
          <input
            className="form-description-box"
            type="text"
            placeholder="add content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></input>
        </div>
        <input type="submit" className="form-add" value="Add Note"></input>
      </form>
    </section>
  );
};

export default AddNote;
