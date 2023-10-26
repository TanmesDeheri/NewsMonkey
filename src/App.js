
import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div className='Container'>
        <NavBar></NavBar>
        <News pageSize='6'></News>
      </div>
    )
  }
}
