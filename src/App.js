import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Itachi', age: 28 },
      { id: 'qwer1', name: 'Kisame', age: 29 },
      { id: 'zxcv1', name: 'Might Guy', age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false,
    userInput: ''
  };

  inputChangeHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
                character={ch} 
                key={index} 
                clicked={() => this.deleteCharHandler(index)}
              />;
    });

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
                        change={(event) => this.nameChangeHandler(event, person.id)}
                      />
            }) 
          }
        </div>
      );
      style.backgroundColor = 'blue';
      style[':hover'] = {
        backgroundColor: 'lightblue',
        color: 'black',
      }
    };

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    // JSX
    return (
        <div className="App">
          <h1>Hi, I'm a React App!</h1>
          <p className={classes.join(' ')}>I'm awesome!</p>
          <button 
            style={ style }
            onClick={ this.togglePersonHandler }
          >
            Toggle Ninjas
          </button>
          <br/>
          <br/>
          { persons }
          <br/>
          <hr/>
          <input 
            type="text" 
            onChange={this.inputChangeHandler}
            value={this.state.userInput}  
          />
          <p>{this.state.userInput}</p>
          <Validation 
            inputLength={this.state.userInput.length}
          />
          {charList}
        </div>
    );
  }
}

export default App;   // higher order cmpnt
