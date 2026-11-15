import { useState } from "react";
import BrandIcon from "./BrandIcon";
import ContactForm from "./ContactForm";

const contactProfiles = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prasetyo-putra-423608b8/",
    value: "in/prasetyo-putra",
  },
  {
    label: "GitHub",
    href: "https://github.com/prasetyo531",
    value: "github.com/prasetyo531",
    icon: "github",
  },
  {
    label: "GitLab",
    href: "https://gitlab.com/prasetyo531",
    value: "gitlab.com/prasetyo531",
    icon: "gitlab",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("prasetyo531@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="content-section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">CONTACT</p>
          <h2 id="contact-title">Let&apos;s connect</h2>
          <p className="section-intro">
            Always glad to talk testing, tech, or a good idea, whether it turns into a role,
            a collaboration, or simply a good conversation. Let&apos;s build something that holds up together.
          </p>
          <p className="contact-reply">I usually reply within a day.</p>

          <dl className="contact-details">
            <div className="contact-detail">
              <dt>Email</dt>
              <dd>
                <a href="mailto:prasetyo531@gmail.com">prasetyo531@gmail.com</a>
                <button
                  className="copy-email"
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? "Email copied" : "Copy email address"}
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </dd>
            </div>
            {contactProfiles.map((profile) => (
              <div className="contact-detail" key={profile.label}>
                <dt>{profile.label}</dt>
                <dd>
                  <a href={profile.href} target="_blank" rel="noreferrer">
                    {profile.icon && <BrandIcon name={profile.icon} />}
                    {profile.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
