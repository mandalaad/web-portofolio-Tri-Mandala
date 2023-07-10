import React from 'react';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/project' Component={Project}/>
      <Route path='/contact' Component={Contact}/>
    </Routes>
    </>
  );
}

export default App;
