import React, { useEffect } from 'react'
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
  useEffect(() => {
    const reveals = document.querySelectorAll('[data-reveal]');
    const navLinks = document.querySelectorAll('nav .nav-link');
    const sections = document.querySelectorAll('main section[id]');

    // Reveal animation observer
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => revealObserver.observe(el));

    // Active nav highlight observer
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === "#" + id
            );
          });
        }
      });
    }, { threshold: 0.6 });

    sections.forEach(section => navObserver.observe(section));

    // Cleanup
    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
    };

  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <SkillsResume />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
