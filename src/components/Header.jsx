const sections = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Journey", id: "journey" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "highlights" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" aria-label="Prasetyo Putra, home">PP</a>

      <nav className="main-nav" aria-label="Main navigation">
        {sections.map((section) => (
          <a href={`#${section.id}`} key={section.id}>{section.label}</a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme === "light" ? (
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M20.2 15.5A8.4 8.4 0 0 1 8.5 3.8 8.5 8.5 0 1 0 20.2 15.5Z" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </svg>
          )}
        </button>
        <a className="header-cta" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
