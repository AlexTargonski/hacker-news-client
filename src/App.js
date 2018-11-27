import React, { Component } from 'react';
import { LIST }             from './list';
import './App.css';

class App extends Component {

  render() {
    var helloWorld = 'Добро пожаловать в Путь к изучению React';

    return (
      <div className="App">
        <h2>{helloWorld}</h2>
      </div>
    );
  }
}

export default App;
