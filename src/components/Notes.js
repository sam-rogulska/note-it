import React from 'react';

const notes = [
  {
    id: 'n0t31',
    title: 'note title',
    text: 'note',
    createdDate: '17/06/2017'
  },
  {
    id: 'n0t32',
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