import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import SubNavbar from './components/SubNavbar/SubNavbar';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true
const App = () => {
  return (
    <Router>
        <Navbar></Navbar>
        <SubNavbar></SubNavbar>
      <Routes>
        <Route path = "/" element={<Home></Home>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path ='/register' element ={<Register></Register>}/>
      </Routes>
    </Router>
  )
}

export default App