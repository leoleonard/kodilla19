import React, { Component } from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';

const App = () => {
  return (
    <div className="App">
      <p>Lista komentarzy</p>
      <CommentsListContainer />
    </div>
  );
};

export default App;
