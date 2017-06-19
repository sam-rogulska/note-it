import React, { Component } from 'react';
import uuid from 'uuid';
import './CreateNote.css';

class CreateNote extends Component {
  constructor(props){
    super(props)
    var today = new Date(),
        date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    this.state = {inputValue: '', textValue: '', date: date, notes: JSON.parse(localStorage.getItem("notes"))};
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }
//TODO: take this down to one function
  handleChangeText(event) {
    this.setState({textValue: event.target.value});
  }
  handleChangeInput(event) {
    this.setState({inputValue: event.target.value});
  }
  addNote = () => {
    const key = 'notes';
    let notes;
    if (this.state.notes !== null) {
      notes = this.state.notes
      notes.push({
          id: uuid.v4(),
          title: this.state.inputValue,
          text: this.state.textValue,
          createdDate: this.state.date
        });
      
    }
    else {
      notes = [{
          id: uuid.v4(),
          title: this.state.inputValue,
          text: this.state.textValue,
          createdDate: this.state.date 
      }];
    }
    this.setState({ notes: notes });
    localStorage.setItem(key, JSON.stringify(notes));
  }
  render() {
 
      return (
          <div className="createNote">
            <div className="createNote-header">
              <h2>Create a new Note</h2>
            </div>
            <form className="createNote-form">
                <input placeholder="enter a title..." type="text" className="titleInput" value={this.state.inputValue} onChange={this.handleChangeInput}></input>
                <textarea placeholder="write your note..." className="textArea" value={this.state.textValue} onChange={this.handleChangeText}></textarea>
                <button className="submitButton" onClick={this.addNote}>Add Note</button>
            </form>
          </div>
        );
    }
};

export default CreateNote;
