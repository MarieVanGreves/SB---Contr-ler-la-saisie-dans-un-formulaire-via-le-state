import React, { useState } from 'react';

function MyTitleForm() {
  const [title, setTitle] = useState('Awesome Title');

  return (
    <div>
      <h1>Bad Title</h1>
      <label htmlFor="title">Title :</label>
      <input id="title" type="text" />
    </div>
  );
}

export default MyTitleForm;
