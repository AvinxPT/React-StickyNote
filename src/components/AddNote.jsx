import React from "react";

const AddNote = () => {
  return (
    <section className="newNote">
      <form className="newNote-form">
        <div className="form-row">
          <label className="form-title">Title:</label>
          <input
            className="form-title-box"
            type="text"
            placeholder="add title"
          ></input>
        </div>
        <div className="form-row">
          <label className="form-description">Details:</label>
          <input
            className="form-description-box"
            type="text"
            placeholder="add content"
          ></input>
        </div>
        <input type="submit" className="form-add" value="Add Note"></input>
      </form>
    </section>
  );
};

export default AddNote;
