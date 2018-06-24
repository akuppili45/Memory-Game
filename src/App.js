import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import CardList from './CardList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <CardList/>
      </div>
    );
  }
}

export default App;
