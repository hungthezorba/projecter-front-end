import React from 'react';
import './App.css';
import Login from './loginForm/Login'
import Register from './registerForm/Register'
import './Form.css'
import NavigationBar from './navigation/NavigationBar.js';
import FieldDiv from './interestingField/FieldDiv'
import Interesting from './interestingField/Interesting'

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Interesting/>

    </div>
  );
}

export default App;
