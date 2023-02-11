import React, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((oldData) => {
      return [...oldData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((currData, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="main_notes">
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
