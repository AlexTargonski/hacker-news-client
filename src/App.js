import React, { Component } from 'react';
import { LIST }             from './list';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        {
          LIST.map( function (item) {
            return (
              <div key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
