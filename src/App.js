import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: JSON.parse(localStorage.getItem("notes"))
    }
  }
  render() {
    //TODO: tidy this into components
    if (this.state.notes !== null) {
      const {notes} = this.state;
      return (
          <div className="noteIt">
            <div className="noteIt-header">
              <h2>Welcome to Note-it</h2>
            </div>
            <p className="noteIt-intro">
              Write some stuff about how it works.
            </p>
            <CreateNote />
            <Notes notes={notes}/>
          
          </div>
        );
    }
    else {
      return (
        <div className="noteIt">
          <div className="noteIt-header">
            <h2>Welcome to Note-it</h2>
          </div>
          <p className="noteIt-intro">
            Write some stuff about how it works.
          </p>
          <CreateNote />
          <button className="noteIt-createButton" onClick={this.addNote}>Add Note</button>
        </div>
      );
    }
  }
  addNote = () => {
    const key = 'notes';
    let notes;
    if (this.state.notes !== null) {
      notes = this.state.notes
      notes.push({
          id: uuid.v4(),
          title: 'new note title',
          text: 'new note',
          createdDate: '17/06/2017'
        });
      
    }
    else {
      notes = [{
          id: uuid.v4(),
          title: 'new note title',
          text: 'new note',
          createdDate: '17/06/2017' 
      }];
    }
    this.setState({ notes: notes });
    localStorage.setItem(key, JSON.stringify(notes));
  }
}

export default App;
