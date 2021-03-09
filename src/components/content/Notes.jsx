import React from 'react';
import Card from './Card';
import Create from './Create';
import notes from '../notes.js';

function Content() {
  return (
    <div>
      <div>
        <Create />
      </div>
      <div>
        {notes.map((note) => (
          <Card id={note.id} key={note.id} title={note.title} content={note.content} />
        ))}
      </div>
    </div>
  );
}

export default Content;
