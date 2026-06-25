import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import Hero from './components/Hero.jsx';
import Nav from './components/Nav.jsx';
import Projects from './components/Projects.jsx';
import Stack from './components/Stack.jsx';

export default function App() {
  return (
    <>
      <div className="backgroundNoise" aria-hidden="true" />
      <div className="orb orbOne" aria-hidden="true" />
      <div className="orb orbTwo" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <footer className="footer">
        <span>Mohammad Moustaqim</span>
        <span>Built with React + Vite</span>
      </footer>
    </>
  );
}
