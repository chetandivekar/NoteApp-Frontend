import React, { useContext, useState } from "react";
import noteContext from "../contexts/notes/noteContext";

export default function Addnote() {
  const notes = useContext(noteContext);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const { addNote } = notes;

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="contanier my-3">
        <h1>Add a Notes</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleITitlenputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              onChange={onChange}
              className="form-control"
              id="title"
              name="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <input
              type="text"
              onChange={onChange}
              className="form-control"
              id="description"
              name="description"
            />
          </div>
          <button
            type="submit"
            onClick={handleClick}
            className="btn btn-primary"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}
