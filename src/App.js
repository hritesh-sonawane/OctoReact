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
    this.setState({showPersons: !doesShow})
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  };

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { 
            this.state.persons.map((person, index) => {   // JS list O/P
              return <Person 
                        name={person.name} 
                        age={person.age} 
                        click={() => this.deletePersonHandler(index)}
                      />
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
