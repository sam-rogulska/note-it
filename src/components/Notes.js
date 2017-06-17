import React from 'react';

export default ({notes}) => (
  <div className="notes_list">{notes.map(note =>
    <div key={note.id}>
      <h2>{note.title}</h2>
      <p>{note.text}</p>
      <p>{note.createdDate}</p>
      </div>
  )}</div>
)