import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const InputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: '',
      content: '',
    });
  };

  const expandIt = () => {
    setExpand(true);
  };
  const backToNormal = () => {
    setExpand(false);
  };
  return (
    <>
      <div className="main-div">
        <form>
          <div className="main-note-div">
            {expand ? (
              <input
                type="text"
                placeholder="Title"
                autoComplete="off"
                value={note.title}
                name="title"
                onChange={InputEvent}
              />
            ) : null}
            <textarea
              rows=""
              column=""
              value={note.content}
              name="content"
              onChange={InputEvent}
              placeholder="Write a note..."
              onClick={expandIt}
              onDoubleClick={backToNormal}
            ></textarea>
          </div>
          {expand ? (
            <Button className="add-note" onClick={addEvent}>
              <AddIcon className="plus-sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
