import React from "react";

import Notes from "./Notes";
import Addnote from "./Addnote";

export default function Home() {
  return (
    <div>
      <Addnote />
      <Notes />
    </div>
  );
}
