import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// with hooks
const App = props => {
    const [personState, setPersonState] = useState({
      persons: [
        { name: 'Itachi', age: 28 },
        { name: 'Kisame', age: 29 },
        { name: 'Might Guy', age: 25 }
      ]
    });

    const [otherState, setOtherState] = useState('some other value');
    console.log(personState, otherState);

    const switchNameHandler = () => {
      setPersonState({ 
        persons: [
          { name: 'Sasuke', age: 23 },
          { name: 'Kisame', age: 29 },
          { name: 'Might Guy', age: 25 }
        ]
      });
    }

    // JSX
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button onClick={ switchNameHandler }>Switch Name</button>
        <Person name = { personState.persons[0].name } age = { personState.persons[0].age }/>
        <Person name = { personState.persons[1].name } age = { personState.persons[1].age }>Skill: Ninjutsu</Person>
        <Person name = { personState.persons[2].name } age = { personState.persons[2].age }>Skill: Taijutsu</Person>
      </div>
    );
}

export default App;

// state = {
//   persons: [
//     { name: 'Itachi', age: 28 },
//     { name: 'Kisame', age: 29 },
//     { name: 'Might Guy', age: 25 }
//   ],
//   otherState: 'some other value'
// };

// switchNameHandler = () => {
//   // console.log('was clicked!');
//   // DON'T DO THIS!
//   // personState.state.persons[0].name = 'Sasuke'
  // this.setState(
  //   { persons: [
  //       { name: 'Sasuke', age: 23 },
  //       { name: 'Kisame', age: 29 },
  //       { name: 'Might Guy', age: 25 }
  //     ]
  //   }
  // )
// };
