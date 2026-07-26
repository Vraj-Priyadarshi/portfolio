import React, { useState } from "react";
import "./Contactme.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Vraj: Replace "YOUR_FORMSPREE_ID" with your actual Formspree form ID (e.g. "xpznwgpj")
    // to enable background submissions. Otherwise, it opens the mail client.
    const formspreeId = "mlgqokkb";

    if (formspreeId === "YOUR_FORMSPREE_ID") {
      const mailtoUrl = `mailto:vrajpriyadarshi2004@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
        formData.name
      )}&body=Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(
        formData.email
      )}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoUrl;
      setStatus("success-mailto");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">

      <div className="section-header">
        <h2 className="glow-text">Contact Me</h2>
      </div>
      <p className="contact-text">Have a question, project idea, or just want to say hi? Feel free to transmit a signal!</p>
      
      <div className="contact-container">
        {/* Quick Social Buttons */}
        <div className="contact-cards">
          <a href="mailto:vrajpriyadarshi2004@gmail.com" className="contact-card hud-panel" target="_blank" rel="noopener noreferrer">
            <span className="hud-bracket tl"></span>
            <span className="hud-bracket tr"></span>
            <span className="hud-bracket bl"></span>
            <span className="hud-bracket br"></span>
            <FaEnvelope />
            <span className="mono-readout">[ EMAIL ]</span>
          </a>
          <a href="https://linkedin.com/in/vraj-priyadarshi-4a428b284" className="contact-card hud-panel" target="_blank" rel="noopener noreferrer">
            <span className="hud-bracket tl"></span>
            <span className="hud-bracket tr"></span>
            <span className="hud-bracket bl"></span>
            <span className="hud-bracket br"></span>
            <FaLinkedin />
            <span className="mono-readout">[ LINKEDIN ]</span>
          </a>
          <a href="https://github.com/Vraj-Priyadarshi" className="contact-card hud-panel" target="_blank" rel="noopener noreferrer">
            <span className="hud-bracket tl"></span>
            <span className="hud-bracket tr"></span>
            <span className="hud-bracket bl"></span>
            <span className="hud-bracket br"></span>
            <FaGithub />
            <span className="mono-readout">[ GITHUB ]</span>
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form hud-panel">
          <span className="hud-bracket tl"></span>
          <span className="hud-bracket tr"></span>
          <span className="hud-bracket bl"></span>
          <span className="hud-bracket br"></span>

          <div className="form-group">
            <label htmlFor="name" className="mono-readout">NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="[ INPUT_NAME ]"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="mono-readout">EMAIL_ADDRESS</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="[ name@example.com ]"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="mono-readout">MESSAGE_PAYLOAD</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="[ ENTER_MESSAGE_PAYLOAD... ]"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn mono-readout" disabled={status === "sending"}>
            <FaPaperPlane /> {status === "sending" ? "[ SENDING... ]" : "[ TRANSMIT ▸ SIGNAL ]"}
          </button>

          {status === "success" && (
            <p className="status-msg success mono-readout">✓ [ SIGNAL_TRANSMITTED_SUCCESSFULLY ]</p>
          )}
          {status === "success-mailto" && (
            <p className="status-msg info mono-readout">✓ [ REDIRECTING_TO_OUTBOUND_MAIL_CLIENT ]</p>
          )}
          {status === "error" && (
            <p className="status-msg error mono-readout">✗ [ ERROR: SIGNAL_TRANSMISSION_FAILED ]</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
