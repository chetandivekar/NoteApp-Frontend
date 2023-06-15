import React from "react";

export default function Noteitem(props) {
  const { notes } = props;
  return (
    <div className="col-md-4 d-flex justify-content-center my-3">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{notes.title}</h5>
          <p className="card-text">{notes.description}</p>
          <i className="fa-solid fa-trash mx-3"></i>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
      </div>
    </div>
  );
}
