import { projects } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects with an actual reason to exist."
        text="A mix of professional work, startup product development, machine learning, full-stack systems, and embedded software."
      />

      <div className="projectGrid">
        {projects.map((project) => (
          <article className="projectCard" key={project.title}>
            <div className="projectNumber">{project.accent}</div>
            <div className="projectTop">
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <span>{project.subtitle}</span>
            </div>

            <div className="projectStory">
              <div>
                <strong>Problem</strong>
                <p>{project.problem}</p>
              </div>
              <div>
                <strong>Solution</strong>
                <p>{project.solution}</p>
              </div>
              <div className="impactBlock">
                <strong>Impact</strong>
                <p>{project.impact}</p>
              </div>
            </div>

            <div className="tagRow projectTags">
              {project.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
