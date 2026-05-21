const experiences = [
  {
    period: "Sept 2025 — Present",
    title: "Senior QA",
    company: "Astra International, via PT amIT Global",
    location: "Jakarta",
    achievements: [
      "Designed and implemented an end-to-end UI automation framework for multiple projects.",
      "Designed and implemented an existing k6 framework that follows test objective projects.",
      "Planned, managed, and verified test objectives in multiple projects.",
      "Monitor and control Automation Metrics, proactively identifying risks and verifying test objectives to maintain high-quality deliverables.",
    ],
  },
  {
    period: "Dec 2021 — Feb 2025",
    title: "Test Engineer",
    company: "PT. Fliptech Lentera Inspirasi Pertiwi",
    location: "Depok",
    achievements: [
      "Analyzed B2B product requirements to formulate effective testing strategies and execution plans for both manual and automated workflows.",
      "Monitored project progression and controlled product schedules by proactively identifying cross-functional dependencies and keeping teams on track.",
      "Maintained B2B API automation coverage using Mocha Chai and frontend automation coverage using Cypress, accelerating UI issue detection with each change.",
      "Revamped the B2B API automation framework to Playwright, successfully cutting each test suite execution time by 10%.",
      "Maintained tests in the GitLab CI/CD pipeline to ensure and improve deployment consistency.",
    ],
  },
  {
    period: "May 2018 — Dec 2021",
    title: "QA Engineer Lead",
    company: "PT. Daily Dinamika Kreasi (Female Daily)",
    location: "Jakarta",
    achievements: [
      "Planned and rolled out an automation-first testing strategy, successfully increasing test coverage and reducing regression time by 15%.",
      "Monitored and controlled key quality metrics, including test coverage, automation ROI, and test execution time, to ensure continuous process improvement.",
      "Developed test architecture to run testing pipelines in Jenkins on AWS EC2.",
      "Spearheaded API automation coverage and test reliability with Rest Assured.",
      "Spearheaded Android and iOS automation coverage and test reliability with Appium.",
      "Developed and continuously optimized test scripts and test cases for e-commerce products and beauty community platforms.",
    ],
  },
  {
    period: "Aug 2017 — May 2018",
    title: "QA Engineer",
    company: "PT. Kayu Raya Indonesia (Fabelio)",
    location: "Jakarta",
    achievements: [
      "Analyzed e-commerce business flows to build detailed and verified scenario tests.",
      "Built scalable mobile QA frameworks, improving test reliability with selenium.",
    ],
  },
  {
    period: "Sept 2016 — Aug 2017",
    title: "QA Engineer",
    company: "PT. Digital Alpha Indonesia (UangTeman)",
    location: "Jakarta",
    achievements: [
      "Created Automation Tests according to business flows using Selenium.",
      "Created Automation Tests for the Android app using Appium Java.",
      "Created UI automation for ios app using XCUITEST.",
    ],
  },
  {
    period: "Jun 2015 — Sept 2016",
    title: "QA Tester",
    company: "PT. Pactera Jatis Indonesia",
    location: "Jakarta",
    achievements: [
      "Execute Manual Test as reference conducting UI, functionality, performance, and integration testing,",
      "Execute Automation Test using UFT/QTP tools.",
    ],
  },
];

export default function Experience() {
  return (
    <>
      {experiences.map((job) => (
        <article className="resume-entry" key={`${job.title}-${job.period}`}>
          <div className="resume-entry__header">
            <h3>{job.title}</h3>
            <span>{job.period}</span>
          </div>
          <p className="resume-entry__subheading">
            {job.company} | {job.location}
          </p>
          <ul>
            {job.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}
