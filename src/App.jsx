import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Highlights from './Components/Highlight'

const App = () => {
  return (
    <main className='bg-black'>
        <Navbar />
        <Hero /> 
        <Highlights />
    </main>
  )
}

export default App
