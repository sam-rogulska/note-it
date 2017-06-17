import React, { Component } from 'react';

class CreateNote extends Component {
  constructor(props){
    super(props)
    
  }
  render() {
 
      return (
          <div className="createNote">
            <div className="createNote-header">
              <h2>Create a new Note</h2>
            </div>
            <div className="createNote-form">
            </div>
          </div>
        );
    }
};

export default CreateNote;
