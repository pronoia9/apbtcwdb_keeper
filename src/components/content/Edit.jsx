import React from 'react';

function Edit(props) {
  return (
    <div>
      <input value={props.title}>{props.title}</input>
      <textarea value={props.content}>{props.content}</textarea>
      <button>
        <i class='fas fa-pen'></i>
      </button>
    </div>
  );
}

export default Edit;
