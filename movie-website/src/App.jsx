import React, { useState } from 'react'
import Search from './components/Search'

const App = () => {
  const [searchItem, setSearchItem] = useState('');

  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="/logo.png" alt="logo" />
          <img src="/hero.png" alt="hero" />
          <h1>
            Find <span className='text-gradient'>Movies</span> You Enjoy Without the Hassle
          </h1>
        </header>
        <Search searchItem={searchItem} setSearchItem={setSearchItem} />
      </div>
  </main>
  )
}

export default App
