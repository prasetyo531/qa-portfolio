export default function Section({ id, kicker, title, intro, className = "", children }) {
  return (
    <section
      className={`content-section ${className}`.trim()}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="section-heading">
        {kicker && <p className="eyebrow">{kicker}</p>}
        <h2 id={`${id}-title`}>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
