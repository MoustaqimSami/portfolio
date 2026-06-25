import { focusAreas, metrics, profile } from '../data/portfolio.js';
import { Icon } from './Icon.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="heroCopy">
        <div className="kicker">
          <Icon name="spark" size={16} />
          <span>{profile.availability}</span>
        </div>

        <h1>
          Software for the parts of work people usually just <span>deal with.</span>
        </h1>

        <p className="lead">
          I’m Mohammad, a Computer Science student who likes turning messy workflows, vague statuses,
          manual follow-ups, and “we just do it this way” processes into products people can trust.
        </p>

        <div className="heroActions">
          <a className="btn btnPrimary" href="#projects">
            See selected work <Icon name="arrow" />
          </a>
          <a className="btn btnGhost" href={profile.resume} target="_blank" rel="noreferrer">
            <Icon name="file" /> Resume
          </a>
        </div>

        <div className="focusStrip" aria-label="Focus areas">
          {focusAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </div>

      <aside className="heroPanel" aria-label="Profile snapshot">
        <div className="panelHeader">
          <div>
            <p className="panelLabel">Currently</p>
            <h2>Building useful things, then making them less annoying.</h2>
          </div>
          <span className="pulse" />
        </div>

        <div className="terminalCard">
          <div className="terminalTop">
            <span /> <span /> <span />
          </div>
          <pre>{`> profile.current_focus\nfull-stack + AI + workflow automation\n\n> best_bug_fix_strategy\nunderstand the mess first\n\n> location\n${profile.location}`}</pre>
        </div>

        <div className="metricGrid">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
