import { profile } from '../data/portfolio.js';
import { Icon } from './Icon.jsx';

export default function Contact() {
  return (
    <section className="contactSection" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Want to talk software, co-ops, or why the first solution is usually suspicious?</h2>
        <p>
          I’m looking for software developer co-op opportunities where I can learn from strong engineers,
          take ownership, and build product work that affects real users.
        </p>
      </div>

      <div className="contactActions">
        <a className="btn btnPrimary" href={`mailto:${profile.email}`}>
          <Icon name="mail" /> Email me
        </a>
        <a className="btn btnGhost" href={profile.github} target="_blank" rel="noreferrer">
          <Icon name="github" /> GitHub
        </a>
        <a className="btn btnGhost" href={profile.linkedin} target="_blank" rel="noreferrer">
          <Icon name="linkedin" /> LinkedIn
        </a>
      </div>
    </section>
  );
}
