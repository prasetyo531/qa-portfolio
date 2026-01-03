import Header from "./components/Header";
import Section from "./components/Section";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="container">
      <Header />

      <Section title="Profile">
        QA Engineer with 10 years of experience in fintech, e-commerce, and
        payment platforms. Strong in test strategy, automation framework design,
        and CI/CD.
      </Section>

      <Section title="Skills">
        <ul>
          <li>Automation: Playwright, Cypress, Selenium, Appium</li>
          <li>API: Rest Assured, Mocha, Chai</li>
          <li>Performance: k6, JMeter</li>
          <li>CI/CD: GitHub Actions, GitLab CI, Jenkins</li>
          <li>Tools: Docker, SQL, Grafana</li>
        </ul>
      </Section>

      <Section title="Experience">
        <Experience />
      </Section>

      <Section title="Education">
        Bachelor of Computer Science – Universitas Gunadarma (GPA 3.23)
      </Section>

      <footer className="footer">
        © 2026 Prasetyo Putra — Senior QA Engineer
      </footer>
    </div>
  );
}
