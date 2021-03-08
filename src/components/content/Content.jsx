import React from 'react';
import Note from './Note';
import notes from '../notes.js';

function Content() {
  return notes.map((note) => (
    <Note id={note.id} key={note.id} title={note.title} content={note.content} />
  ));
}

export default Content;
