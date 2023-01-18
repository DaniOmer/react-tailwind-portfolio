import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'


function App() {
  return (
    <div className='bg-white dark:bg-slate-900'>
      <Header />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
