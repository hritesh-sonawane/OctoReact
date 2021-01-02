import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    // JSX
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <Person name="Sasuke" age="20" />
        <Person name="Naruto" age="20">Skill: Ninjutsu</Person>
        <Person name="Neji" age="21" />
      </div>
    );
  }
}

export default App;
