import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import Notes from './components/Notes';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          title: 'note title',
          text: 'note',
          createdDate: '17/06/2017'
        },
        {
          id: uuid.v4(),
          title: 'note title 2',
          text: 'note 2',
          createdDate: '17/06/2017'
        }
      ]
    }
  }
  render() {
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
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        title: 'new note title',
        text: 'new note',
        createdDate: '17/06/2017'
      }])
    })
  }
}

export default App;
