import React from 'react';
import Card from './Card';
import notes from '../notes.js';

function Content() {
  return notes.map((note) => (
    <Card id={note.id} key={note.id} title={note.title} content={note.content} />
  ));
}

export default Content;
