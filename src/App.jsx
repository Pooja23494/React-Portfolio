import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import SkillsResume from './components/SkillsResume'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <SkillsResume />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>

    </>
  )
}

export default App
