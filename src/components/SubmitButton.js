import React, { Component } from 'react';

class SubmitButton extends Component {
  constructor(props){
    super(props)
    
  }
  render() {
 
      return (
          <button className="submitButton" onClick={this.addNote}>Add Note</button>
        );
    }
};

export default SubmitButton;
