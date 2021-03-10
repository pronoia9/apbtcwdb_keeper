import React from 'react';
//import colors from '../colors.js';

function Card(props) {
  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        // style={{ textShadow: props.remove && colors.deleteButtonHover }}
        className='btn-delete'
        onClick={(e) => props.deleteNote(props.id)}
      >
        <i class='fas fa-trash-alt'></i>
      </button>
      <button className='btn-edit'>
        <i class='fas fa-edit'></i>
      </button>
    </div>
  );
}

export default Card;
