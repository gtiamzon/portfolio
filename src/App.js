import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/Nav/navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <NavBar />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  );
}

export default App;
