import React from 'react';

export default function CtaSection() {
  return (
    <section className="cta-wrap" id="cta">
      <div className="contain-sm">
        <h2>Ready to Transform Your English Lessons?</h2>
        <p>
          Join teachers in France and beyond. Start with 2 free lessons — no
          credit card, no commitment.
        </p>
        <div className="cta-form">
          <input
            type="email"
            className="cta-input"
            placeholder="Enter your school email"
          />
          <button className="btn-cta" type="button">
            Get My Free Lessons
          </button>
        </div>
        <div className="cta-note">
          Free forever. No credit card required. Cancel anytime.
        </div>
      </div>
    </section>
  );
}