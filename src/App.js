import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom'
import Routes from './Routes';
import Home from './components/Home'
import NavBar from './components/NavBar'

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar/>
          {/* <Home/>     */}
            <Routes/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
