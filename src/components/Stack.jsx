import { principles, skills } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Stack() {
  return (
    <section className="section stackSection" id="stack">
      <SectionHeading
        eyebrow="Stack + style"
        title="The technical stuff, without pretending tools are personality traits."
        text="I like tools that help ship reliable product work: clean interfaces, understandable APIs, sane data models, and features users can actually feel."
      />

      <div className="stackLayout">
        <div className="skillsWall">
          {skills.map((skillGroup) => (
            <div className="skillGroup" key={skillGroup.group}>
              <h3>{skillGroup.group}</h3>
              <div className="skillList">
                {skillGroup.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="principles">
          {principles.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
