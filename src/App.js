import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skill from './components/Skill/Skill';
import WorkExp from './components/WorkExp/WorkExp';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />     
        <Skill />   
        <WorkExp />
      </div>
    </>
  )
}

export default App;
