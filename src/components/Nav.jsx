import { profile } from '../data/portfolio.js';

export default function Nav() {
  return (
    <header className="navShell">
      <a className="brand" href="#top" aria-label="Go to top">
        <span className="brandMark">MM</span>
        <span className="brandText">Mohammad</span>
      </a>

      <nav className="navLinks" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#stack">Stack</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="navCta" href={profile.resume} target="_blank" rel="noreferrer">
        Resume
      </a>
    </header>
  );
}
