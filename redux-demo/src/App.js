// główny kontener
import React, { Component } from 'react';
import './App.css';
import AddComment from './AddComment.js';
import CommentsListContainer from './CommentsListContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
      <p>Lista komentarzy</p>
      <AddComment />
      <CommentsListContainer />
      <DevTools />
    </div>
  );
};

export default App;
