import React, { useContext } from "react";
import noteContext from "../contexts/notes/noteContext";
import Noteitem from "./Noteitem";

export default function Notes() {
  const notes = useContext(noteContext);
  const { note, addNote } = notes;

  return (
    <div className="row flex my-3">
      <h1>Your Notes</h1>
      {note.map((n) => {
        return <Noteitem key={n._id} notes={n} />;
      })}
    </div>
  );
}
