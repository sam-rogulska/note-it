import React, { Component } from 'react';

class EditNote extends Component {
  constructor(props){
    super(props)
    var today = new Date(),
        date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    this.state = {
        noteToEdit: JSON.parse(localStorage.getItem("noteToEdit")) || [
        {
          id: '',
          title: '',
          text: '',
          createdDate: ''
        }
      ]
    }
    console.log(this.state.noteToEdit);
    // this.state = {inputValue: '', textValue: '', date: date, notes: JSON.parse(localStorage.getItem("notes"))};
    // this.handleChangeInput = this.handleChangeInput.bind(this);
    // this.handleChangeText = this.handleChangeText.bind(this);
  }
  render() {
      const {noteToEdit} = this.state;
      return (
            <div className="editNote">{noteToEdit.map(noteE =>
            <div key={noteE.id}><div className="editNote-header">
                    <h2>Edit Note</h2>
                </div>
            <form className="editNote-form">
                <input placeholder="note title" type="text" className="titleInput" value={noteE.title} onChange={this.handleChangeInput}></input>
                <textarea placeholder="note text" className="textArea" value={noteE.text} onChange={this.handleChangeText}></textarea>
                <button className="submitButton" onClick={this.updateNote}>Update Note</button>
            </form></div>
            )}</div>
    );
  }
}

export default EditNote;