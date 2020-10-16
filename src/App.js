import React from 'react';
import './App.css';
import Login from './loginForm/Login'
import Register from './registerForm/Register'
import './Form.css'
import NavigationBar from './navigation/NavigationBar.js';
import Footer from './navigation/Footer.js';


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Footer></Footer>
    </div>
  );
}

export default App;
