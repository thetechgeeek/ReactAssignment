import { useState } from "react";

const Card = ({ title: titleProp, desc: descProp, id: idProp, handleDelete }) => {
  const [title, setTitle] = useState(titleProp);
  const [desc, setDesc] = useState(descProp);
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {editMode ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
          <input value={desc} onChange={(e) => setDesc(e.target.value)}></input>
        </>
      ) : (
        <>
          <div>{title}</div>
          <div>{desc}</div>
        </>
      )}
      <button onClick={() => setEditMode(editMode ? false : true)}>{editMode ? "Save" : "Edit"}</button>
      <button onClick={() => handleDelete(idProp)}>Delete</button>
    </>
  );
};

export default Card;
