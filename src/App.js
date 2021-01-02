import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Itachi', age: 28 },
      { name: 'Kisame', age: 29 },
      { name: 'Might Guy', age: 25 }
    ]
  }

  render() {
    // JSX
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name = { this.state.persons[0].name } age = { this.state.persons[0].age }/>
        <Person name = { this.state.persons[1].name } age = { this.state.persons[1].age }>Skill: Ninjutsu</Person>
        <Person name = { this.state.persons[2].name } age = { this.state.persons[2].age }>Skill: Taijutsu</Person>
      </div>
    );
  }
}

export default App;
