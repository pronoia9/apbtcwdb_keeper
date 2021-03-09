import React, { useState } from 'react';
import Card from './Card';
import Create from './Create';
import defaultNotes from '../defaultNotes.js';

function Content() {
  // user input
  const [input, setInput] = useState({ id: null, title: '', content: '' });

  // all notes
  const [notes, setNotes] = useState(setDefaultNotes());

  return (
    <div>
      <div>
        <Create />
      </div>
      <div>
        {notes.map((notes) => (
          <Card id={notes.id} key={notes.id} title={notes.title} content={notes.content} />
        ))}
      </div>
    </div>
  );
}

export default Content;

function setDefaultNotes() {
  return defaultNotes.map(function (n) {
    return { id: Math.random().toString().slice(2), title: n.title, content: n.content };
  });
}
