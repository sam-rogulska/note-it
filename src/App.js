import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import Notes from './components/Notes';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: JSON.parse(localStorage.getItem("notes"))
    }
  }
  render() {
    console.log(JSON.parse(localStorage.getItem("notes")))
    const {notes} = this.state
    return (
      <div className="noteIt">
        <div className="noteIt-header">
          <h2>Welcome to Note-it</h2>
        </div>
        <p className="noteIt-intro">
          Write some stuff about how it works.
        </p>
        <button className="noteIt-createButton" onClick={this.addNote}>Add Note</button>
        <Notes notes={notes} />
      </div>
    );
  }
  addNote = () => {
    const notes = this.state.notes
    const key = 'notes';
    notes.push({
        id: uuid.v4(),
        title: 'new note title',
        text: 'new note',
        createdDate: '17/06/2017'
      });
    this.setState({ notes: notes });
    localStorage.setItem(key, JSON.stringify(notes));
  }
}

export default App;
