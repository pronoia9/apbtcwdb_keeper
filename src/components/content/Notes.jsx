import React, { useState } from 'react';
import Card from './Card';
import Create from './Create';
import colors from '../colors.js';
import defaultNotes from '../defaultNotes.js';

function Content() {
  const [input, setInput] = useState({ title: '', content: '', remove: false }); // user input
  const [notes, setNotes] = useState(setDefaultNotes()); // all notes
  const [addButtonColor, setAddButtonColor] = useState(''); // add button mouseover state (for css)

  // handle add button click
  function addNote() {
    if (input.title !== '' && input.content !== '') {
      setAddButtonColor(colors.addButtonValid);

      const x = getRandomId();
      setNotes([...notes, { ...input, id: x, key: x, remove: false }]);

      // reset the input values
      setInput({ title: '', content: '' });
    } else {
      setAddButtonColor(colors.addButtonInvalid);
    }
    // reset the button color
    setTimeout(() => setAddButtonColor(''), 150);
  }

  // remove a note
  function deleteNote(i) {
    // change the remove status to true to render delete css
    setNotes(notes.map((n) => (n.id === i ? { ...n, remove: true } : n)));

    // filter the notes and remove the note whos id is the same as the parameter
    setTimeout(() => setNotes(notes.filter((n) => n.id !== i)), 150);
  }

  return (
    <div>
      <Create
        input={input}
        setInput={setInput}
        addNote={addNote}
        addButtonColor={addButtonColor}
        setAddButtonColor={setAddButtonColor}
      />
      {notes.map((n) => (
        <Card
          id={n.id}
          key={n.id}
          title={n.title}
          content={n.content}
          remove={n.remove}
          setNotes={setNotes}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

export default Content;

// get random/default notes from defaultNotes.js
function setDefaultNotes() {
  return defaultNotes.map(function (n) {
    const y = getRandomId();
    return { key: y, id: y, title: n.title, content: n.content, remove: false };
  });
}

// random string id
function getRandomId() {
  return Math.random().toString().slice(2);
}
