import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Experience from "./components/Experience";
import BrandIcon from "./components/BrandIcon";
import Contact from "./components/Contact";

const skillGroups = [
  {
    title: "Strategy and delivery",
    description: "Structured planning that keeps product goals, risks, and quality visible.",
    skills: ["Requirement analysis", "Test planning", "Resource estimation", "QA monitoring & control", "Risk management"],
  },
  {
    title: "UI and mobile automation",
    description: "Automation coverage across web and mobile products.",
    skills: ["Playwright", "Cypress", "Appium", "Selenium", "XCUITest", "UFT/QTP"],
  },
  {
    title: "API quality",
    description: "Service-level checks that support dependable product releases.",
    skills: ["REST Assured", "Mocha", "Chai"],
  },
  {
    title: "Performance and CI/CD",
    description: "Performance coverage and automated checks inside delivery pipelines.",
    skills: ["k6", "Jenkins", "GitLab CI"],
  },
];

const highlights = [
  {
    number: "01",
    title: "End-to-end automation",
    text: "Designed and implemented a UI automation framework for multiple projects.",
    tags: ["Playwright", "Web", "Test framework"],
  },
  {
    number: "02",
    title: "Performance testing",
    text: "Designed a k6 framework aligned with project objectives, and planned, managed, and verified test goals across multiple projects.",
    tags: ["k6", "Test planning", "Risk management"],
  },
  {
    number: "03",
    title: "B2B API automation",
    text: "Migrated the B2B API test framework to Playwright, cutting each suite's execution time by 10%.",
    tags: ["Playwright", "Mocha", "GitLab CI"],
  },
  {
    number: "04",
    title: "Automation-first strategy",
    text: "Increased test coverage and reduced regression time by 15% through an automation-first approach.",
    tags: ["Test strategy", "Appium", "Jenkins"],
  },
];

const profileLinks = [
  { label: "GitHub", href: "https://github.com/prasetyo531", icon: "github" },
  { label: "GitLab", href: "https://gitlab.com/prasetyo531", icon: "gitlab" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prasetyo-putra-423608b8/", symbol: "in" },
  { label: "Medium", href: "https://medium.com/@prasetyoputra", symbol: "M" },
  { label: "Email", href: "mailto:prasetyo531@gmail.com", symbol: "@" },
  { label: "Grafana", href: "https://przgrafana.duckdns.org/login-", symbol: "↗" },
];

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="site-shell" data-theme={theme}>
      <Header theme={theme} onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")} />

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-glow hero-glow-blue" />
          <div className="hero-glow hero-glow-gold" />
          <div className="hero-inner">
            <div className="portrait-mark" aria-label="Prasetyo Putra initials">
              <span className="portrait-orbit portrait-orbit-one" />
              <span className="portrait-orbit portrait-orbit-two" />
              <span className="portrait-dot portrait-dot-one" />
              <span className="portrait-dot portrait-dot-two" />
              <span className="portrait-initials">PP</span>
            </div>

            <p className="hero-greeting">Hello, I&apos;m Prasetyo. I care about quality.</p>
            <h1 id="hero-title">
              Prasetyo <span>Putra</span>
            </h1>
            <p className="hero-role">Senior QA Engineer</p>
            <p className="hero-focus">
              <span>Test automation</span>
              <i />
              <span>Quality strategy</span>
              <i />
              <span>CI/CD</span>
            </p>
            <p className="hero-summary">
              I build dependable testing for products where quality matters.
            </p>

            <div className="hero-links" aria-label="Profile links">
              {profileLinks.map((link) => (
                <a
                  className={`icon-link${link.icon ? ` icon-link--${link.icon}` : ""}`}
                  href={link.href}
                  key={link.label}
                  aria-label={link.label}
                  title={link.label}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  {link.icon ? <BrandIcon name={link.icon} /> : <span aria-hidden="true">{link.symbol}</span>}
                </a>
              ))}
            </div>

            <a className="scroll-cue" href="#about">
              More about me <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-index" aria-hidden="true">01 / 07</div>
        </section>

        <div className="page-content">
          <Section
            id="about"
            kicker="A LITTLE ABOUT ME"
            title="Making quality part of how teams build"
            intro="A decade in quality engineering across fintech, e-commerce, and payment platforms."
            className="about-section"
          >
            <div className="about-grid">
              <div className="about-copy">
                <p>
                  I&apos;m a Test Engineering professional with a decade of experience across fintech,
                  e-commerce, and payment platforms. As a QA Lead, I bridge technical execution
                  with project management and release planning.
                </p>
                <p>
                  I focus on analyzing complex requirements, writing realistic test plans, and
                  monitoring project health. I also bring hands-on experience building automation
                  frameworks and CI/CD pipelines, from Playwright and Cypress to Appium.
                </p>
              </div>
              <aside className="fact-card" aria-label="At a glance">
                <div className="fact-row">
                  <span className="fact-number">10</span>
                  <span className="fact-label">years in QA engineering</span>
                </div>
                <div className="fact-divider" />
                <div className="fact-row">
                  <span className="fact-pin" aria-hidden="true">⌖</span>
                  <span className="fact-label">Based in Jakarta, Indonesia</span>
                </div>
                <div className="fact-divider" />
                <div className="fact-row">
                  <span className="fact-spark" aria-hidden="true">✳</span>
                  <span className="fact-label">Fintech · e-commerce · payments</span>
                </div>
              </aside>
            </div>
          </Section>

          <Section
            id="journey"
            kicker="WHERE I'VE BEEN"
            title="From hands-on testing to quality leadership"
            intro="Experience across product testing, automation, project planning, and quality leadership. Open any role for details."
            className="journey-section"
          >
            <Experience />
          </Section>

          <Section
            id="skills"
            kicker="WHAT I WORK WITH"
            title="Skills and expertise"
            intro="A practical toolkit across test planning, automation, API quality, performance, and delivery."
            className="skills-section"
          >
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article className="skill-card" key={group.title}>
                  <span className="card-index">0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul className="tag-list" aria-label={`${group.title} skills`}>
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </Section>

          <Section
            id="highlights"
            kicker="SELECTED WORK"
            title="Quality engineering in practice"
            intro="A few examples of the problems I like solving."
            className="highlights-section"
          >
            <div className="highlight-grid">
              {highlights.map((item) => (
                <article className="highlight-card" key={item.number}>
                  <div className="highlight-topline">
                    <span className="card-index">{item.number}</span>
                    <span className="highlight-arrow" aria-hidden="true">↗</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul className="tag-list" aria-label={`${item.title} topics`}>
                    {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </Section>

          <Section
            id="education"
            kicker="FOUNDATION"
            title="Learning by building"
            intro="A computer science foundation, strengthened through years of hands-on product work."
            className="education-section"
          >
            <article className="education-card">
              <div className="education-mark" aria-hidden="true">UG</div>
              <div>
                <p className="education-label">Bachelor&apos;s degree</p>
                <h3>Computer Science</h3>
                <p>Computer Science / Information Technology <span>·</span> Depok</p>
                <p>Universitas Gunadarma <span>·</span> GPA 3.23</p>
              </div>
              <span className="education-date">Jun 2010 – Jan 2015</span>
            </article>
          </Section>

          <Contact />
        </div>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home" aria-label="Back to top">PP</a>
        <span>© 2026 Prasetyo Putra <span className="footer-version">Senior QA Engineer</span></span>
        <div className="footer-links">
          {profileLinks.filter((link) => link.label !== "Grafana").map((link) => (
            <a
              href={link.href}
              key={link.label}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
