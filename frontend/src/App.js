import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Smartspend from './Smartspend';
import Auth from './Auth/auth';

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/app" element={<Smartspend />} />
        <Route path="/" element={<Auth/>} />
      </Routes>
    </Router>
   </>
  )
}

export default App