import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h3 className="title">{props.title}</h3>
        <div className="content">{props.content}</div>
        <button onClick={deleteNote} className="delete-btn">
          <DeleteOutlineIcon className="delete-icon" />
        </button>
      </div>
    </>
  );
};

export default Note;
