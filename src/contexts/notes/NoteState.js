import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "6488812cf43e4566c00275657bd",
      title: "My-title3",
      description: "my description",
      tag: "my tag",
      date: "2023-06-13T14:46:04.466Z",
      __v: 0,
    },
    {
      _id: "64888146bbe7649f900a11ba5b",
      title: "My-title4",
      description: "my description",
      tag: "my tag",
      date: "2023-06-13T14:46:30.700Z",
      __v: 0,
    },
    {
      _id: "6488945765a659d7c0174f496fb",
      title: "My-title5",
      description: "my description",
      tag: "my tag",
      date: "2023-06-13T16:07:54.771Z",
      __v: 0,
    },
    {
      _id: "6488812cf43e6c7600275657bd",
      title: "My-title3",
      description: "my description",
      tag: "my tag",
      date: "2023-06-13T14:46:04.466Z",
      __v: 0,
    },
    {
      _id: "64888146bbe49765f900a11ba5b",
      title: "My-title4",
      description: "my description",
      tag: "my tag",
      date: "2023-06-13T14:46:30.700Z",
      __v: 0,
    },
    {
      _id: "6488945a659d7c0174f496fb",
      title: "My-title5",
      description: "my description",
      tag: "my tag",
      date: "2023-06-13T16:07:54.771Z",
      __v: 0,
    },
    {
      _id: "6488812cf43e6c002756576577bd",
      title: "My-title3",
      description: "my description",
      tag: "my tag",
      date: "2023-06-13T14:46:04.466Z",
      __v: 0,
    },
    {
      _id: "64888146bbe4769f907670a11ba5b",
      title: "My-title4",
      description: "my description",
      tag: "my tag",
      date: "2023-06-13T14:46:30.700Z",
      __v: 0,
    },
    {
      _id: "6488945a659d7c01747665f496fb",
      title: "My-title5",
      description: "my description",
      tag: "my tag",
      date: "2023-06-13T16:07:54.771Z",
      __v: 0,
    },
  ];

  const [note, setNote] = useState(initialNotes);
  //Add note
  const addNote = () => {
    console.log("adding a new note");
    const addnote = {
      _id: "6488945a659d7c01747665f496fb",
      title: "My-title5",
      description: "my description",
      tag: "my tag",
      date: "2023-06-13T16:07:54.771Z",
      __v: 0,
    };
    setNote(note.concat(addnote));
  };

  const deleteNote = () => {};

  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ note, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
