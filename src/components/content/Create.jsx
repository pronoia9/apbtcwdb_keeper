import React from 'react';
import colors from '../colors.js';

function Create(props) {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          name='title'
          placeholder='Title'
          value={props.input.title}
          onChange={(e) => props.setInput({ ...props.input, title: e.target.value })}
        />
        <textarea
          name='content'
          placeholder='Take a note...'
          rows='3'
          value={props.input.content}
          onChange={(e) => props.setInput({ ...props.input, content: e.target.value })}
        />
        <button
          style={{ backgroundColor: props.addButtonColor }}
          onMouseOver={() => props.setAddButtonColor(colors.addButtonHover)}
          onMouseOut={() => props.setAddButtonColor('')}
          type='submit'
          onClick={() => props.addNote()}
        >
          +
        </button>
      </form>
    </div>
  );
}

export default Create;
