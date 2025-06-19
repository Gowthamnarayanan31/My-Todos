import React from 'react';

import Navbar from './components/Navbar';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import All from './pages/All';
import FullStack from './pages/FullStack';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';


function App() {
  return (
    <>
    <Router>
      <Navbar />
    
    <div className='content' style={{color:"blue",textAlign:"center"}}>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/full-stack" element={<FullStack />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
    
    
    
    
    </Router>
      
    </>
  )
}

export default App;
