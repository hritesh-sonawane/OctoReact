import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Itachi', age: 28 },
      { name: 'Kisame', age: 29 },
      { name: 'Might Guy', age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // DON'T DO THIS!
    // this.state.persons[0].name = 'Sasuke'
    this.setState({ 
      persons: [
        { name: newName, age: 23 },
        { name: 'Kisame', age: 29 },
        { name: 'Might Guy', age: 25 }
      ]
    })
  };

  nameChangeHandler = (event) => {
    this.setState({ 
      persons: [
        { name: 'Itachi', age: 23 },
        { name: 'Kisame', age: 29 },
        { name: event.target.value, age: 25 }
      ]
    })
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  };

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { 
            this.state.persons.map(person => {
              return <Person name={person.name} age={person.age} /> // JS list O/P
            }) 
          }
        </div>
      );
    };

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // JSX
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button 
          style={ style }
          onClick={ this.togglePersonHandler }
        >
          Toggle Ninjas
        </button>
        <br/>
        <br/>
        { persons }
      </div>
    );
  }
}

export default App;
