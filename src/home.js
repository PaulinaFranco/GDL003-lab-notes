import React, { Component } from 'react';
import firebaseInit from './firebase.js';
import 'firebase/database';
import './App.css';
import NoteForm from './noteForm';
import Note from './asideBar.js';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
      //  { noteId: "1", noteContent: 'note 1' },
      //  { noteId: "2", noteContent: 'note 2' }
            ]
    };

    //this.db = this.home.database().ref().child('')
    this.addNote = this.addNote.bind(this);
    this.logout = this.logout.bind(this);
  }



  addNote(note) {
    let { notes } = this.state;
    notes.push({
      noteId: notes.length +1,
      noteContent: note
    });

    this.setState({ notes });

  }

  logout() {
    firebaseInit.auth().signOut();
  }

  render() {
    return (
      <div className="notesContainer">


        <div className="split left splitQuarter">
          <h1 className="logo">Oh my notes!!</h1>
          <div className="form">
            <NoteForm addNote={this.addNote} />
          </div>
          <div>
            <button type="submit" onClick={this.logout} className="btn ">Log out</button>
          </div>
        </div>

        <div>
          <div className="split right">
            <h1> split</h1>

            <div className="notesBody">
              <ul>
            {
              this.state.notes.map(note => {
                return (

                <Note
                  noteContent = {note.noteContent}
                  noteId = {note.noteId}
                  key = {note.Id}
                 />

                )
              })
            }
              </ul>
            </div>
          </div>


        </div>

      </div>


    )
  }
};







export default Home;
