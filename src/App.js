import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Schrute'
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    // JSX
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <UserInput changed={ this.usernameChangeHandler } currentName={ this.state.username } />
        <UserOutput userName="Dwight" />
        <UserOutput userName="K" />
        <UserOutput userName={ this.state.username } />
      </div>
    );
  }
}

export default App;
