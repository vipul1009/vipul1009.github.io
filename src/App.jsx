import { useState } from 'react'
import Portfolio  from './portfolio.jsx'
import AboutMe from './about-me.jsx'
import Experience from './Experience.jsx'
import MyPortfolio from './MyPortfolio.jsx'
import MyServices from './MyServices.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import './App.css'

function App() {
  return (
   <>
    <Portfolio />
    <AboutMe />
    <Experience />
    <MyPortfolio />
    <MyServices />
    <Contact />
    <Footer />
   </>
  )
}

export default App
