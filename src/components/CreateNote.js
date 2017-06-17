import React, { Component } from 'react';
import TitleInput from './TitleInput';
import TextArea from './TextArea';
import SubmitButton from './SubmitButton';

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
                <TitleInput/>
                <TextArea/>
                <SubmitButton/>
            </div>
          </div>
        );
    }
};

export default CreateNote;
