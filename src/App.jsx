import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'


function App() {
  return (
    <div className='bg-white dark:bg-slate-900'>
      <Header />
      <Home />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
