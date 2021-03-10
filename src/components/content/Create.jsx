import React from 'react';

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
          className='btn btn-add'
          style={{ backgroundColor: props.addButtonColor }}
          type='submit'
          onClick={props.addNote}
        >
          <i className='fas fa-plus'></i>
        </button>
      </form>
    </div>
  );
}

export default Create;
