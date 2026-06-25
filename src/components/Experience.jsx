import { experiences } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Experience() {
  return (
    <section className="section" id="work">
      <SectionHeading
        eyebrow="Experience"
        title="Work where the product has to survive real people."
        text="Most of my recent work is around building systems that make unclear, manual, or repeated workflows easier to manage."
      />

      <div className="timeline">
        {experiences.map((item) => (
          <article className="experienceCard" key={item.company}>
            <div className="experienceMeta">
              <p>{item.period}</p>
              <span>{item.company}</span>
            </div>
            <div className="experienceBody">
              <h3>{item.role}</h3>
              <p>{item.summary}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="tagRow">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
