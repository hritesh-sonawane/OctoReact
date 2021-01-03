import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Itachi', age: 28 },
      { id: 'qwer1', name: 'Kisame', age: 29 },
      { id: 'zxcv1', name: 'Might Guy', age: 25 }
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
    // const persons = this.state.persons.slice();   // slice() makes a copy of persons
    const persons = [...this.state.persons]   // es6 version
    persons.splice(personIndex, 1);   // splice() adds/deletes item in the array
    this.setState({persons: persons})
  };

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { 
            this.state.persons.map((person, index) => {
              return <Person 
                        name={person.name} 
                        age={person.age} 
                        key={person.id}
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
