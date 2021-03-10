import React from 'react';
import colors from '../colors.js';

function Card(props) {
  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button style={{ textShadow: false && colors.deleteButtonHover }}>DELETE</button>
    </div>
  );
}

export default Card;
