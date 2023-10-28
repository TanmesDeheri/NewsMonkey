
import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import News from './Components/News';
export default class App extends Component {
  pageSize=5
  render() {
    return (
      <Router>
        <div className='Container'>
          <NavBar></NavBar>
          <Routes>
          <Route exact path='/' element={<News key='general' country='in' pageSize={this.pageSize} category='general'></News>}></Route>
            <Route exact path='/general' element={<News key='general' country='in' pageSize={this.pageSize} category='general'></News>}></Route>
            <Route exact path='/business' element={<News key='business' country='in' pageSize={this.pageSize} category='business'></News>}></Route>
            <Route exact path='/entertainment' element={<News key='entertaiment' country='in' pageSize={this.pageSize} category='entertainment'></News>}></Route>
            <Route exact path='/health' element={<News key='health' country='in' pageSize={this.pageSize} category='health'></News>}></Route>
            <Route exact path='/science' element={<News key='science' country='in' pageSize={this.pageSize} category='science'></News>}></Route>
            <Route exact path='/sports' element={<News key='sports' country='in' pageSize={this.pageSize} category='sports'></News>}></Route>
            <Route exact path='/technology' element={<News key='technology' country='in' pageSize={this.pageSize} category='technology'></News>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}
