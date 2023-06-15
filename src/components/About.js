import React, { useContext } from "react";
import noteContext from "../contexts/notes/noteContext";

export default function About() {
  const a = useContext(noteContext);
  return (
    <div>
      About {a.name} and he is in the class {a.class}
    </div>
  );
}
