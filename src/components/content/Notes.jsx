import React, { useState } from 'react';
import Card from './Card';
import Create from './Create';
import defaultNotes from '../defaultNotes.js';

function Content() {
  // user input
  const [input, setInput] = useState({ title: '', content: '' });

  // all notes
  const [notes, setNotes] = useState(setDefaultNotes());

  // handle add button click
  function addNote() {
    const x = getRandomId();
    setNotes([...notes, { ...input, id: x, key: x }]);
  }

  return (
    <div>
      <Create input={input} setInput={setInput} addNote={addNote} />
      {notes.map((notes) => (
        <Card id={notes.id} key={notes.id} title={notes.title} content={notes.content} />
      ))}
    </div>
  );
}

export default Content;

function setDefaultNotes() {
  return defaultNotes.map(function (n) {
    const y = getRandomId();
    return { key: y, id: y, title: n.title, content: n.content };
  });
}

function getRandomId() {
  return Math.random().toString().slice(2);
}
