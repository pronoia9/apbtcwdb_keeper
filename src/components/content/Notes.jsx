import React, { useState } from 'react';
import Card from './Card';
import Create from './Create';
import Edit from './Edit';
import styles from '../styles.js';
import defaultNotes from '../defaultNotes.js';

function Content() {
  const [input, setInput] = useState({ title: '', content: '' });
  const [notes, setNotes] = useState(setDefaultNotes());
  const [editArea, setEditArea] = useState({ show: false });

  // Add button css depending on the valid input
  const [addButtonColor, setAddButtonColor] = useState('');

  // handle on click on add button
  function addNote() {
    // invalid input (both fields are empty)
    if (input.title === '' && input.content === '') {
      setAddButtonColor(styles.addButtonInvalid);
    } else {
      setAddButtonColor(styles.addButtonValid);

      const x = getRandomId();
      setNotes([...notes, { ...input, id: x, key: x }]);

      // reset the input values
      setInput({ title: '', content: '' });
    }
    // reset the button color
    setTimeout(() => setAddButtonColor(''), 150);
  }

  // handle on click on delete icon
  function deleteNote(i) {
    // filter the notes and remove the note whos id is the same as the parameter
    setTimeout(() => setNotes(notes.filter((n) => n.id !== i)), 150);
  }

  // handle on edit button on note (pen and pad icon)
  function showEditArea(i) {
    // change the add note form to an edit note one
    setEditArea({ show: true, note: notes.find((n) => n.id === i) });
  }

  // on submit (pen button icon) in edit area
  function editNote(i) {
    const foundNote = notes.find((n) => n.id === i);
    console.log(foundNote);

    // check if the fiels were both empty, if so just delete the note
    if (editArea.note.title === '' && editArea.note.content === '') {
      setAddButtonColor(styles.addButtonValid);
      deleteNote(i);
      setEditArea({ show: false });
    }
    // check if theres a change or not
    else if (editArea.note.title === foundNote.title && editArea.note.content === foundNote.content) {
    }
    // there were changes, so change the note
    else {
      setAddButtonColor(styles.addButtonValid);
      setNotes(
        notes.map((n) =>
          n.id === i ? { ...n, title: editArea.note.title, content: editArea.note.content } : n
        )
      );
      setEditArea({ show: false });
    }

    // reset the button color
    setTimeout(() => setAddButtonColor(''), 150);
  }

  return (
    <div>
      {editArea.show ? (
        <Edit
          editArea={editArea}
          editNote={editNote}
          setEditArea={setEditArea}
          addButtonColor={addButtonColor}
        />
      ) : (
        <Create input={input} setInput={setInput} addNote={addNote} addButtonColor={addButtonColor} />
      )}

      {notes.map((n) => (
        <Card
          id={n.id}
          key={n.id}
          title={n.title}
          content={n.content}
          deleteNote={deleteNote}
          showEditArea={showEditArea}
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
