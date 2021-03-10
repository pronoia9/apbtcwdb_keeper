import React from 'react';

function Edit(props) {
  return (
    <div className='edit-container'>
      <input
        className='edit-title'
        placeholder='Title'
        value={props.editArea.note.title}
        onChange={(e) =>
          props.setEditArea({ ...props.editArea, note: { ...props.editArea.note, title: e.target.value } })
        }
      />
      <textarea
        className='edit-content'
        placeholder='Add a note...'
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
        className='btn btn-save'
        onClick={() => props.editNote(props.editArea.note.id)}
      >
        <i class='fas fa-save'></i>
      </button>
      <button
        style={{ backgroundColor: props.addButtonColor }}
        className='btn btn-cancel'
        onClick={() => props.setEditArea({ show: false })}
      >
        <i className='fas fa-times'></i>
      </button>
    </div>
  );
}

export default Edit;
