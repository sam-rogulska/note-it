import React, { Component } from 'react';
import './Notes.css';

class Notes extends Component {
  constructor(props){
    super(props)
     const setNotes = JSON.parse(localStorage.getItem("notes")) || [];
     this.state = {
      notes: setNotes,
    }
    this.deleteNote = this.deleteNote.bind(this);
  }
  deleteNote(event){
    const key = 'notes';
    const noteKey = event.target.dataset.key;
    const notesArray = this.state.notes;
    const updatedNotes = notesArray.filter(x => x.id !== noteKey);
    this.setState({ notes: updatedNotes });
    localStorage.setItem(key, JSON.stringify(updatedNotes));
  }
  render() {
    const {notes} = this.state;
      return (
          <div className="notesList">{notes.map(note =>
           <div key={note.id} className="noteList-note">
            <button className="deleteNote" data-key={note.id} onClick={this.deleteNote}>X</button>
            <h2 className="noteList-title">{note.title}</h2>
            <p>{note.text}</p>
            <p className="noteDate">{note.createdDate}</p>
            </div>
          )}</div>
        );
    }
};

export default Notes;