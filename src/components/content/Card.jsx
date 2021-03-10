import React from 'react';

function Card(props) {
  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className='btn btn-edit' onClick={() => props.showEditArea(props.id)}>
        <i className='fas fa-edit'></i>
      </button>
      <button className='btn btn-delete' onClick={() => props.deleteNote(props.id)}>
        <i className='fas fa-trash-alt'></i>
      </button>
    </div>
  );
}

export default Card;
