import React, { useState } from 'react';
import Card from './Card';
import Create from './Create';
import colors from '../colors.js';
import defaultNotes from '../defaultNotes.js';

function Content() {
  const [input, setInput] = useState({ title: '', content: '' }); // user input
  const [notes, setNotes] = useState(setDefaultNotes()); // all notes
  const [addButtonColor, setAddButtonColor] = useState(false); // add button mouseover state (for css)
  const [deleteButtonColor, setDeleteButtonColor] = useState(false); // delete button mousever state (for css)

  // handle add button click
  function addNote() {
    if (input.title !== '' && input.content !== '') {
      setAddButtonColor(colors.addButtonValid);

      const x = getRandomId();
      setNotes([...notes, { ...input, id: x, key: x }]);

      // reset the input values
      setInput({ title: '', content: '' });
    } else {
      setAddButtonColor(colors.addButtonInvalid);
    }
    // reset the button color
    setTimeout(() => setAddButtonColor(''), 150);
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
      {notes.map((notes) => (
        <Card
          id={notes.id}
          key={notes.id}
          title={notes.title}
          content={notes.content}
          deleteButtonColor={deleteButtonColor}
          setdeleteButtonColor={setDeleteButtonColor}
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
    return { key: y, id: y, title: n.title, content: n.content };
  });
}

// random string id
function getRandomId() {
  return Math.random().toString().slice(2);
}
