import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    state: "idle",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus({
      state: "sending",
      message: "",
    });

    try {
     const response = await fetch(
       `${import.meta.env.VITE_API_URL || ''}/api/contact`,
       {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(form),
       }
     );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({
        state: "success",
        message: "Message sent — I'll reply by email soon.",
      });

      setForm(initialForm);
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error.message ||
          "Could not send message. Try emailing me directly.",
      });
    }
  }

  return (
    <section id="contact">
      <div className="container">

        <div className="contact-actions">
          <a
            className="btn btn-ghost"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          <a
            className="btn btn-ghost"
            href="https://github.com/Zeenatara"
            target="_blank"
            rel="noopener noreferrer"
          >
            See my code
          </a>

          <a
            className="btn btn-primary"
            href="mailto:arazeenat747@gmail.com"
          >
            Hire me
          </a>
        </div>

        <h2 className="contact-name">ZEENAT ARA</h2>

        <div className="contact-grid">

          <div className="contact-block">
            <div className="label">Email</div>
            <div className="value">
              arazeenat747@gmail.com
            </div>

            <div className="label">Based in</div>
            <div className="value">
              Jharkhand, India
            </div>
          </div>

          <div className="contact-block contact-social">
            <div
              className="label"
              style={{ marginBottom: 14 }}
            >
              Social
            </div>

            <a
              href="https://github.com/Zeenatara"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/zeenat-ara-a1a192381"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="contact-block">
            <p className="contact-credit">
              Designed and developed by{" "}
              <span className="accent">Zeenat Ara</span>
            </p>

            <div className="contact-year">
              © 2026
            </div>
          </div>

        </div>

        <div className="contact-form-wrap">

          <h3>Send a message</h3>



          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div>
              <label
                className="field-label"
                htmlFor="name"
              >
                Name
              </label>

              <input
                className="field-input"
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                className="field-label"
                htmlFor="email"
              >
                Email
              </label>

              <input
                className="field-input"
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                className="field-label"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                className="field-textarea"
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={status.state === "sending"}
              >
                {status.state === "sending"
                  ? "Sending..."
                  : "Send message"}
              </button>
            </div>

            {status.message && (
              <p
                className={`form-status ${
                  status.state === "success"
                    ? "success"
                    : status.state === "error"
                    ? "error"
                    : ""
                }`}
              >
                {status.message}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

