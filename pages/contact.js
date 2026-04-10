import { useState } from "react";

export default function ContactSection() {
  const [activeChip, setActiveChip] = useState("Technical Support");

  const chips = [
    "General Enquiry",
    "School Partnership",
    "Technical Support",
    "Pricing & Plans",
    "Press & Media",
    "Other",
  ];

  return (
    <main className="contact_page">
        <section className="contact">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>

            <div className="contain-sm">
                {/* HEADER */}
                <div className="contact-header">
                <div className="pill">Get in Touch</div>

                <h2 className="title">
                    We&apos;d Love to <span>Hear From You</span>
                </h2>

                <p className="subtitle">
                    Questions, feedback, or partnership enquiries — we&apos;re here.
                </p>
                </div>

                <div className="contact-layout">
                {/* LEFT */}
                <div className="left">
                    <div className="card info-card">
                    <div className="card-title">Contact Us</div>

                    <div className="info-row">
                        <div className="icon">✉️</div>
                        <div>
                        <span className="label">Email</span>
                        <span className="value">hello@oyokids.com</span>
                        </div>
                    </div>
                    </div>

                    <div className="card response-card">
                    <div className="icon">⏰</div>
                    <div>
                        <span className="label">Response Time</span>
                        <span className="value">Within 24 hours</span>
                    </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="right">
                    <div className="form-card">
                    <h3 className="form-title">Send Us a Message</h3>

                    <p className="form-sub">
                        Fill in the form and we&apos;ll get back to you as soon as possible.
                    </p>

                    {/* CHIPS */}
                    <div className="chips">
                        <p className="chips-label">What&apos;s your message about?</p>

                        <div className="chip-list">
                        {chips.map((chip) => (
                            <button
                            key={chip}
                            type="button"
                            onClick={() => setActiveChip(chip)}
                            className={
                                activeChip === chip
                                ? "chip active"
                                : "chip"
                            }
                            >
                            {chip}
                            </button>
                        ))}
                        </div>
                    </div>

                    <div className="divider"></div>

                    {/* FORM */}
                    <div className="row">
                        <input className="input" placeholder="First Name" />
                        <input className="input" placeholder="Last Name" />
                    </div>

                    <div className="row">
                        <input className="input" placeholder="Email Address" />

                        <select className="select">
                        <option>Select your role</option>
                        <option>Classroom Teacher</option>
                        <option>School Administrator</option>
                        <option>Education Authority</option>
                        <option>Other</option>
                        </select>
                    </div>

                    <input
                        className="input"
                        placeholder="School or Organisation (Optional)"
                    />

                    <textarea
                        className="textarea"
                        placeholder="Tell us how we can help..."
                    />

                    <button className="btn">Send Message</button>

                    <p className="note">
                        We read every message. Typically reply within one business day.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </main>
  );
}