import React from 'react';

import Movies from './pages/Movies/Movies';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  render() {

    return (
      <div className="App">
          <Movies className="Max-width"/>
      </div>
    );
  }
}

export default App;
