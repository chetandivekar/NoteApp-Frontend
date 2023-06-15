import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = [];

  const [note, setNote] = useState(initialNotes);

  //Get All notes

  const getAllNotes = async () => {
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ODY2ZTliMTZjYTA3MDQ1YjkxZTgwIn0sImlhdCI6MTY4NjY2MjU5NX0.JuEOZDyeHcYSbeXHjdZ-nlf4QxkkrJgv2iI-jBpYqJI"; // Replace with the actual token

    try {
      const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });

      const json = await response.json();
      setNote(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  //Add note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addNote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ODY2ZTliMTZjYTA3MDQ1YjkxZTgwIn0sImlhdCI6MTY4NjY2MjU5NX0.JuEOZDyeHcYSbeXHjdZ-nlf4QxkkrJgv2iI-jBpYqJI",
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        throw new Error("Failed to add note");
      }

      const json = await response.json();
      console.log("adding a new note");
      setNote([...note, json]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  //Delete the note
  const deleteNote = async (id) => {
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ODY2ZTliMTZjYTA3MDQ1YjkxZTgwIn0sImlhdCI6MTY4NjY2MjU5NX0.JuEOZDyeHcYSbeXHjdZ-nlf4QxkkrJgv2iI-jBpYqJI"; // Replace with the actual token

    try {
      const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }

    console.log("Deleting with id" + id);
    const newNote = note.filter((note) => {
      return note._id !== id;
    });
    setNote(newNote);
  };

  //Edit the note
  const editNote = async (id, title, description, tag) => {
    // API Call
    await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ODY2ZTliMTZjYTA3MDQ1YjkxZTgwIn0sImlhdCI6MTY4NjY2MjU5NX0.JuEOZDyeHcYSbeXHjdZ-nlf4QxkkrJgv2iI-jBpYqJI",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // Logic to Edit the note

    setNote((prevNote) => {
      const updatedNote = prevNote.map((element) => {
        if (element._id === id) {
          return {
            ...element,
            title,
            description,
            tag,
          };
        }
        return element;
      });
      return updatedNote;
    });
  };

  return (
    <NoteContext.Provider
      value={{ note, addNote, deleteNote, editNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
