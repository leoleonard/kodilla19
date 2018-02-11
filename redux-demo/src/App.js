// główny kontener
import React, { Component } from 'react';
import './App.css';
import AddComment from './AddComment.js';
import CommentsListContainer from './CommentsListContainer';

const App = () => {
  return (
    <div className="App">
      <p>Lista komentarzy</p>
      <AddComment />
      <CommentsListContainer />
    </div>
  );
};

export default App;
