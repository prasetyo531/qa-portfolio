import { useState } from "react";

const recipient = "prasetyo531@gmail.com";

export default function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const values = new FormData(event.currentTarget);
    const topic = values.get("topic");
    const subject = `${topic} — Portfolio contact`;
    const body = [
      `Name: ${values.get("name")}`,
      `Email: ${values.get("email")}`,
      `Topic: ${topic}`,
      "",
      values.get("message"),
    ].join("\n");

    setNotice("Your email app should open with the message ready to send.");
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-fields form-fields--split">
        <label className="form-field">
          <span>Your name</span>
          <input autoComplete="name" maxLength="100" name="name" required />
        </label>
        <label className="form-field">
          <span>Email</span>
          <input autoComplete="email" maxLength="254" name="email" required type="email" />
        </label>
      </div>

      <label className="form-field">
        <span>What is this about?</span>
        <select defaultValue="" name="topic" required>
          <option disabled value="">Choose a topic</option>
          <option>A role</option>
          <option>Collaboration</option>
          <option>Consultation</option>
          <option>Something else</option>
        </select>
      </label>

      <label className="form-field">
        <span>Message</span>
        <textarea
          maxLength="4000"
          minLength="10"
          name="message"
          placeholder="A couple of lines about the role or project."
          required
          rows="5"
        />
      </label>

      <div className="form-footer">
        <p className="form-note" aria-live="polite">
          {notice || "This opens your email app with a draft. Nothing is sent or stored by this site."}
        </p>
        <button className="contact-button" type="submit">
          Send message <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  );
}
