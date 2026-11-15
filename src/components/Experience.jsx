const roles = [
  {
    company: "Astra International, via PT amIT Global",
    role: "Senior QA",
    dates: "September 2025 – Present",
    summary: "Quality engineering across multiple projects, from automation frameworks to test objectives and metrics.",
    highlights: [
      "Designed and implemented an end-to-end UI automation framework for multiple projects.",
      "Designed a k6 framework aligned with project test objectives.",
      "Planned, managed, and verified test objectives across multiple projects.",
      "Monitored automation metrics, identified risks early, and verified test objectives to maintain high-quality deliverables.",
    ],
    tags: ["Playwright", "k6", "Test strategy", "Automation metrics"],
  },
  {
    company: "PT. Fliptech Lentera Inspirasi Pertiwi",
    role: "Test Engineer",
    dates: "December 2021 – February 2025",
    summary: "Test planning and automation across B2B products and delivery pipelines.",
    highlights: [
      "Analyzed B2B product requirements to plan manual and automated testing strategies.",
      "Tracked project progress and dependencies to keep product schedules on course.",
      "Maintained B2B API automation with Mocha and Chai and frontend automation with Cypress.",
      "Migrated the B2B API automation framework to Playwright, cutting test suite execution time by 10%.",
      "Maintained automated tests in GitLab CI/CD pipelines to improve deployment consistency.",
    ],
    tags: ["Mocha", "Chai", "Cypress", "Playwright", "GitLab CI"],
  },
  {
    company: "PT. Daily Dinamika Kreasi (Female Daily)",
    role: "QA Engineer Lead",
    dates: "May 2018 – December 2021",
    summary: "Led quality strategy and automation for e-commerce and beauty community products.",
    highlights: [
      "Introduced an automation-first strategy that increased coverage and reduced regression time by 15%.",
      "Monitored test coverage, automation ROI, and execution time to guide process improvements.",
      "Developed test architecture and Jenkins pipelines on AWS EC2.",
      "Led API automation with Rest Assured and Android and iOS automation with Appium.",
      "Developed and optimized test scripts and scenarios for e-commerce and community platforms.",
    ],
    tags: ["Test strategy", "Jenkins", "AWS EC2", "Rest Assured", "Appium"],
  },
  {
    company: "PT. Kayu Raya Indonesia (Fabelio)",
    role: "QA Engineer",
    dates: "August 2017 – May 2018",
    summary: "Tested e-commerce journeys and improved reliability of mobile automation.",
    highlights: [
      "Analyzed e-commerce business flows and created detailed, verified test scenarios.",
      "Built scalable mobile QA frameworks and improved test reliability with Selenium.",
    ],
    tags: ["E-commerce", "Test design", "Selenium", "Mobile QA"],
  },
  {
    company: "PT. Digital Alpha Indonesia (UangTeman)",
    role: "QA Engineer",
    dates: "September 2016 – August 2017",
    summary: "Built web and mobile UI automation for digital lending products.",
    highlights: [
      "Created Selenium automation tests based on business flows.",
      "Automated Android app journeys with Appium and Java.",
      "Created iOS UI automation with XCUITest.",
    ],
    tags: ["Selenium", "Appium", "Java", "XCUITest"],
  },
  {
    company: "PT. Pactera Jatis Indonesia",
    role: "QA Tester",
    dates: "June 2015 – September 2016",
    summary: "Performed manual and automated testing across key product quality areas.",
    highlights: [
      "Conducted UI, functionality, performance, and integration testing.",
      "Created and executed automation tests using UFT/QTP.",
    ],
    tags: ["Manual testing", "Performance", "Integration", "UFT/QTP"],
  },
];

export default function Experience() {
  return (
    <div className="timeline">
      {roles.map((role, index) => (
        <details className="timeline-card" key={role.company} open={index === 0}>
          <summary className="timeline-summary">
            <span className="timeline-marker" aria-hidden="true">0{index + 1}</span>
            <span className="timeline-title-group">
              <span className="timeline-company">{role.company}</span>
              <span className="timeline-role">{role.role}</span>
            </span>
            <span className="timeline-dates">{role.dates}</span>
            <span className="timeline-expand" aria-hidden="true">+</span>
          </summary>
          <div className="timeline-body">
            <p className="timeline-summary-text">{role.summary}</p>
            <ul className="timeline-highlights">
              {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <ul className="tag-list" aria-label={`${role.company} technologies`}>
              {role.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}
