import React from 'react';
import colors from '../colors.js';

function Card(props) {
  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        style={{ textShadow: props.remove && colors.deleteButtonHover }}
        onClick={(e) => props.deleteNote(props.id)}
      >
        DELETE
      </button>
    </div>
  );
}

export default Card;
