import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Highlights from './Components/Highlight'
import Model from './Components/Model'

const App = () => {
  return (
    <main className='bg-black'>
        <Navbar />
        <Hero /> 
        <Highlights />
        {/* Model */}
        <Model />
    </main>
  )
}

export default App
