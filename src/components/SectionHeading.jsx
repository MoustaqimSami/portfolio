export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="sectionHeading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="sectionText">{text}</p> : null}
    </div>
  );
}
