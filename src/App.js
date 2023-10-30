
import './App.css';
import { React, useState } from 'react'
import NavBar from './Components/NavBar';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import News from './Components/News';
function App() {
  const apikey = process.env.REACT_APP_API_KEY
  const pageSize = 6
  var [progress, setprogress] = useState(100)
  setprogress = (progress) => {
    setprogress({ progress: progress })
  }
  return (
    <Router>
      <div className='Container'>
        <NavBar></NavBar>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News apikey={apikey} setprogress={setprogress} key='general' country='in' pageSize={pageSize} category='general'></News>}></Route>
          <Route exact path='/general' element={<News apikey={apikey} setprogress={setprogress} key='general' country='in' pageSize={pageSize} category='general'></News>}></Route>
          <Route exact path='/business' element={<News apikey={apikey} setprogress={setprogress} key='business' country='in' pageSize={pageSize} category='business'></News>}></Route>
          <Route exact path='/entertainment' element={<News apikey={apikey} setprogress={setprogress} key='entertaiment' country='in' pageSize={pageSize} category='entertainment'></News>}></Route>
          <Route exact path='/health' element={<News apikey={apikey} setprogress={setprogress} key='health' country='in' pageSize={pageSize} category='health'></News>}></Route>
          <Route exact path='/science' element={<News apikey={apikey} setprogress={setprogress} key='science' country='in' pageSize={pageSize} category='science'></News>}></Route>
          <Route exact path='/sports' element={<News apikey={apikey} setprogress={setprogress} key='sports' country='in' pageSize={pageSize} category='sports'></News>}></Route>
          <Route exact path='/technology' element={<News apikey={apikey} setprogress={setprogress} key='technology' country='in' pageSize={pageSize} category='technology'></News>}></Route>
        </Routes>
      </div>
    </Router>
  )
}
export default App