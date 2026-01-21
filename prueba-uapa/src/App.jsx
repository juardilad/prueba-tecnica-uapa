import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import Features from './components/Features.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Features />
      <Contact />
      <Footer />
    </>
  )
}

export default App
