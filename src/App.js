import React, { Component } from 'react';
import './App.css';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';

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
            <CreateNote />
            <EditNote />
            <Notes/>
          </div>
        );
  }
}

export default App;
