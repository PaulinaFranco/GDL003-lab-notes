import React, { Component } from 'react';
import './App.css';


class Note extends Component {
  constructor(props) {
    super(props);
    this.noteId = props.noteId;
    this.noteContent = props.noteContent
  }

handleRemove(id) {

  console.log(id);
  alert('remove: ', id)
}

  render() {
    return(
    <div className="Note">
      <span
        onClick={() => this.handleRemove(this.noteId)}
       >&times; </span>
      <p>{this.noteId}</p>
      <p>{this.noteContent}</p>

    </div>
  )
  }
}

export default Note;
