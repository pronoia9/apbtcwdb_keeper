import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function Create(props) {
  return (
    <form className='form-container' onSubmit={(e) => e.preventDefault()}>
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

      <Zoom in={true}>
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
