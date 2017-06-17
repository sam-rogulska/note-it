import React from 'react';
import uuid from 'uuid';

const notes = [
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
];

export default () => (
  <div className="notes_list">{notes.map(note =>
    <div key={note.id}>
      <h2>{note.title}</h2>
      <p>{note.text}</p>
      <p>{note.createdDate}</p>
      </div>
  )}</div>
)