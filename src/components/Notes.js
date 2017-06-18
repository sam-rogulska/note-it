import React, { Component } from 'react';

class Notes extends Component {
  constructor(props){
    super(props)
     this.state = {
      notes: JSON.parse(localStorage.getItem("notes")),
      inputValue: '', 
      textValue: '',
      noteToEdit: [
        {
          id: '',
          title: '',
          text: '',
          createdDate: ''
        }
      ]
    }
    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }
  deleteNote(event){
    const key = 'notes';
    const noteKey = event.target.dataset.key;
    const notesArray = this.state.notes;
    const updatedNotes = notesArray.filter(x => x.id !== noteKey);
    this.setState({ notes: updatedNotes });
    localStorage.setItem(key, JSON.stringify(updatedNotes));
  }
  editNote(event){
    event.preventDefault();
    // console.log('editNote');
    const noteKey = event.target.dataset.key;
    const notesArray = this.state.notes;
    console.log(notesArray);
    const noteToEdit = this.state.noteToEdit;
    console.log(noteToEdit);
    const noteEdit = notesArray.filter(x => x.id === noteKey);
    console.log(noteEdit);
    noteToEdit.push({noteEdit});
    noteToEdit.shift();
    localStorage.setItem('editNote', JSON.stringify(noteEdit));
    // console.log(this.state.noteToEdit);
    //write code to show edit note & hide note
  }
  updateNote(event){
    event.preventDefault();
    console.log('updateNote');
    const key = 'notes';
    const noteKey = event.target.dataset.key;
    const notesArray = this.state.notes;
    // const noteToEdit = this.state.noteToEdit;
    const noteToUpdate = notesArray.filter(x => x.id === noteKey);
    console.log(noteToUpdate);
    // noteToEdit.push({noteEdit});
    // noteToEdit.shift();
    // console.log(this.state.noteToEdit);
    

  }
  handleChangeText(event) {
    //this.setState({textValue: event.target.value});
  }
  handleChangeInput(event) {
    //this.setState({inputValue: event.target.value});
  }
  //todo: fix when empty
  render() {
    const {notes} = this.state;
      return (
          <div className="notesList">{notes.map(note =>
           <div key={note.id} className="noteList-note">
            <button className="deleteNote" data-key={note.id} onClick={this.deleteNote}>X</button>
            <h2>{note.title}</h2>
            <p>{note.text}</p>
            <p className="noteDate">{note.createdDate}</p>
            <button data-key={note.id} onClick={this.editNote}>Edit</button>
            </div>
          )}</div>
        );
    }
};

export default Notes;