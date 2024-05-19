import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element=<Home/> />
          <Route path='/about' element=<About/> />
          <Route path='/services' element=<Services/> />
          <Route path='/contact' element=<Contact/> /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
