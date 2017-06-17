import React, { Component } from 'react';

class Notes extends Component {
  constructor(props){
    super(props)
     this.state = {
      notes: JSON.parse(localStorage.getItem("notes"))
    }
    this.deleteNote = this.deleteNote.bind(this);
  }
  deleteNote(event){
    console.log(this.state.notes);
    const key = 'notes';
    const noteKey = event.target.dataset.key;
    const notesArray = this.state.notes;
    const updatedNotes = notesArray.filter(x => x.id !== noteKey)
    this.setState({ notes: updatedNotes });
    localStorage.setItem(key, JSON.stringify(updatedNotes));
  }
  //todo: fix when empty
  render() {
    const {notes} = this.state;
      return (
          <div className="notes_list">{notes.map(note =>
           <div key={note.id}>
             <h2>{note.title}</h2>
              <button data-key={note.id} onClick={this.deleteNote}>X</button>
              <p>{note.text}</p>
              <p>{note.createdDate}</p>
            </div>
          )}</div>
        );
    }
};

export default Notes;