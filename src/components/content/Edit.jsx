import React from 'react';

function Edit(props) {
  return (
    <div className='edit-container'>
      <input
        className='edit-title'
        value={props.editArea.note.title}
        onChange={(e) =>
          props.setEditArea({ ...props.editArea, note: { ...props.editArea.note, title: e.target.value } })
        }
      />
      <textarea
        className='edit-content'
        value={props.editArea.note.content}
        rows='3'
        onChange={(e) =>
          props.setEditArea({
            ...props.editArea,
            note: { ...props.editArea.note, content: e.target.value },
          })
        }
      />
      <button
        style={{ backgroundColor: props.addButtonColor }}
        className='edit-btn'
        onClick={() => props.editNote(props.editArea.note.id)}
      >
        <i className='fas fa-pen'></i>
      </button>
    </div>
  );
}

export default Edit;