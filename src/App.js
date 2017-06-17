import React, { Component } from 'react';
import './App.css';
import Notes from './components/Notes';

class App extends Component {
  render() {
    return (
      <div className="noteIt">
        <div className="noteIt-header">
          <h2>Welcome to Note-it</h2>
        </div>
        <p className="noteIt-intro">
          Write some stuff about how it works.
        </p>
        <button className="noteIt-createButton">Add Note</button>
        <Notes />
      </div>
    );
  }
}

export default App;
