import Header from "./components/Header";
import Section from "./components/Section";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar no-print">
        <div className="topbar__inner">
          <div className="topbar__brand">Prasetyo Putra</div>
          <nav className="topbar__nav" aria-label="Primary">
            <a href="#top">Home</a>
            <a href="#resume" className="is-active">
              Resume
            </a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="resume-page print-container" id="top">
        <Header />

        <Section title="Links">
          <p className="links-row">
            <a href="https://github.com/prasetyo531">
              https://github.com/prasetyo531
            </a>
            <span>, </span>
            <a href="https://www.linkedin.com/in/prasetyo-putra-423608b8/">
              Linkedin
            </a>
          </p>
        </Section>

        <Section title="Profile">
          <p>
            I am a Test Engineering professional with a decade of experience
            across fintech, e-commerce, and payment platforms. As a QA Lead, I
            bridge the gap between technical execution and project management.
            My core focus lies in analyzing complex requirements, crafting
            realistic test plans, and actively monitoring project health to
            ensure smooth releases. While I have a deep technical background in
            building automation frameworks (Playwright, Cypress, Appium) and
            CI/CD pipelines.
          </p>
        </Section>

        <Section id="resume" title="Professional Experience">
          <Experience />
        </Section>

        <Section title="Education">
          <article className="resume-entry">
            <div className="resume-entry__header">
              <h3>Bachelor&apos;s Degree, Universitas Gunadarma</h3>
              <span>Jun 2010 — Jan 2015</span>
            </div>
            <p className="resume-entry__subheading">
              Computer Science / Information Technology | Depok
            </p>
            <p>GPA: 3.23</p>
          </article>
        </Section>

        <Section id="skills" title="Skills & Certifications">
          <div className="skill-list">
            <p>
              <span>Strategy & Delivery:</span> Requirement Analysis, Test
              Planning, Resource Estimation, QA Monitoring &amp; Control, Risk
              Management.
            </p>
            <p>
              <span>Automation:</span> Playwright, Cypress, Appium, Selenium,
              Rest Assured.
            </p>
            <p>
              <span>Tooling:</span> Jenkins, GitLab CI, k6, XCUITest, UFT/QTP.
            </p>
          </div>
        </Section>

      </main>

      <footer className="footer no-print" id="contact">
        <div className="footer__inner">
          <p>© 2026 Prasetyo Putra. Built for ATS readability.</p>
          <div className="footer__links">
            <a href="https://www.linkedin.com/in/prasetyo-putra-423608b8/">
              LinkedIn
            </a>
            <a href="mailto:prasetyo531@gmail.com">Email</a>
            <a href="https://github.com/prasetyo531">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
