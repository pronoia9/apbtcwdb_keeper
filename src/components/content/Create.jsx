import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function Create(props) {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <form className='form-container' onSubmit={(e) => e.preventDefault()}>
      {/* shows only after the user clicks on the textarea */}
      {isExpanded && (
        <input
          name='title'
          placeholder='Title'
          value={props.input.title}
          onChange={(e) => props.setInput({ ...props.input, title: e.target.value })}
        />
      )}
      {/* expands after the user clicks */}
      <textarea
        name='content'
        placeholder='Take a note...'
        rows={isExpanded ? '3' : '1'}
        value={props.input.content}
        onChange={(e) => props.setInput({ ...props.input, content: e.target.value })}
        onClick={() => setExpanded(true)}
      />
      {/* only show the add button if theres an input from the user */}
      <Zoom in={props.input.title || props.input.content}>
        <Fab
          className='btn btn-add'
          style={{ backgroundColor: props.addButtonColor }}
          type='submit'
          onClick={props.addNote}
          aria-label='add'
        >
          <i className='fas fa-plus'></i>
        </Fab>
      </Zoom>
    </form>
  );
}

export default Create;
