import React, { useState } from 'react';
import Card from './Card';
import Create from './Create';
import styles from '../styles.js';
import defaultNotes from '../defaultNotes.js';

function Content() {
  const [input, setInput] = useState({ title: '', content: '' }); // user input
  const [notes, setNotes] = useState(setDefaultNotes()); // all notes
  const [addButtonColor, setAddButtonColor] = useState(''); // add button mouseover state (for css)

  // handle on click on add button
  function addNote() {
    if (input.title !== '' || input.content !== '') {
      setAddButtonColor(styles.addButtonValid);

      const x = getRandomId();
      setNotes([...notes, { ...input, id: x, key: x }]);

      // reset the input values
      setInput({ title: '', content: '' });
    } else {
      setAddButtonColor(styles.addButtonInvalid);
    }
    // reset the button color
    setTimeout(() => setAddButtonColor(''), 150);
  }

  // handle on click on delete icon
  function deleteNote(i) {
    // filter the notes and remove the note whos id is the same as the parameter
    setTimeout(() => setNotes(notes.filter((n) => n.id !== i)), 150);
  }

  // handle on click on edit icon
  // function editNote(i) {
  //   // change the editable status to true to enable content edit html property
  //   setNotes(notes.map((n) => (n.id === i ? { ...n, editable: 'true' } : n)));
  // }

  return (
    <div>
      <Create
        input={input}
        setInput={setInput}
        addNote={addNote}
        addButtonColor={addButtonColor}
        setAddButtonColor={setAddButtonColor}
        edit={false}
      />
      {notes.map((n) => (
        <Card
          id={n.id}
          key={n.id}
          title={n.title}
          content={n.content}
          setNotes={setNotes}
          deleteNote={deleteNote}
          //editNote={editNote}
        />
      ))}
    </div>
  );
}

export default Content;

// get default notes from defaultNotes.js
function setDefaultNotes() {
  return defaultNotes.map(function (n) {
    const y = getRandomId();
    return { key: y, id: y, title: n.title, content: n.content };
  });
}

// random string id
function getRandomId() {
  return Math.random().toString().slice(2);
}
