export default function Section({ id, title, children }) {
  return (
    <section className="resume-section" id={id}>
      <h2>{title}</h2>
      <div className="resume-section__content">{children}</div>
    </section>
  );
}
