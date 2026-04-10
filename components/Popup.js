"use client";

import { useEffect, useState } from "react";

export default function Popup() {
  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const POPUP_KEY = "oyo_popup_last_shown";
  const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    const lastShown = localStorage.getItem(POPUP_KEY);
    const now = Date.now();
    if (!lastShown || now - parseInt(lastShown) > THIRTY_DAYS) {
      setShow(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(POPUP_KEY, Date.now().toString());
    setShow(false);
  };

  const submit = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail) {
      setNameError(!trimmedName);
      setEmailError(!trimmedEmail);
      return;
    }

    // Wire up your API call here:
    // fetch('/api/waitlist', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name: trimmedName, email: trimmedEmail })
    // });

    setShowSuccess(true);
    setTimeout(() => {
      localStorage.setItem(POPUP_KEY, Date.now().toString());
      setShow(false);
    }, 4000);
  };

  if (!show) return null;

  return (
    <>

      <div className="oyo-overlay">
        <div className="oyo-modal">
          <div className="oyo-rainbow-bar"></div>

          <button className="oyo-close" onClick={dismiss} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="#2F2A3A" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className="oyo-modal-body">
            {!showSuccess ? (
              <>
                {/* Scarcity bar */}
                <div className="oyo-spots-bar">
                  <div className="oyo-spots-pulse"></div>
                  <div className="oyo-spots-text">
                    Limited early access spots available{" "}
                    <span>— secured by sign-up order</span>
                  </div>
                </div>

                {/* Badge */}
                <div className="oyo-badge">
                  <div className="oyo-badge-dot"></div>
                  Pre-Launch
                </div>

                {/* Headline */}
                <div className="oyo-headline">
                  Be One of the First
                  Teachers to Discover<br />
                  <span>Oyo Kids</span>
                </div>

                {/* Subtext */}
                <div className="oyo-subtext">
                  We&apos;re opening early access to a select group of teachers before our public launch. Leave your details and we&apos;ll be in touch.
                </div>

                {/* Perks */}
                <div className="oyo-perks">
                  <div className="oyo-perk">
                    <div className="oyo-perk-icon" style={{ background: "rgba(225,124,168,0.14)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#E17CA8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    Access before anyone else in your school
                  </div>
                  <div className="oyo-perk">
                    <div className="oyo-perk-icon" style={{ background: "rgba(134,165,211,0.16)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#86A5D3" strokeWidth="2" fill="none" />
                        <path d="M12 6v6l4 2" stroke="#86A5D3" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    First look at every new lesson and adventure
                  </div>
                  <div className="oyo-perk">
                    <div className="oyo-perk-icon" style={{ background: "rgba(177,213,112,0.18)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#6a9a30" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="9" cy="7" r="4" stroke="#6a9a30" strokeWidth="2" fill="none" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="#6a9a30" strokeWidth="2" strokeLinecap="round" />
                        <path d="M16 3.13a4 4 0 010 7.75" stroke="#6a9a30" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    Join a community of forward-thinking teachers
                  </div>
                </div>

                {/* Inputs */}
                <input
                  className={`oyo-input${nameError ? " oyo-input-error" : ""}`}
                  type="text"
                  placeholder="Your first name"
                  autoComplete="given-name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError) setNameError(false);
                  }}
                />
                <input
                  className={`oyo-input${emailError ? " oyo-input-error" : ""}`}
                  type="email"
                  placeholder="Your school email address"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError(false);
                  }}
                />

                {/* CTA */}
                <button className="oyo-btn-submit" onClick={submit}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  Reserve My Spot
                </button>

                <div className="oyo-form-note">
                  No spam, ever. We&apos;ll only contact you about your early access.
                </div>

                <button className="oyo-dismiss" onClick={dismiss}>
                  I&apos;ll wait for the public launch
                </button>
              </>
            ) : (
              /* Success State */
              <div className="oyo-success-state">
                <div className="oyo-success-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="oyo-success-title">Your spot is reserved.</div>
                <div className="oyo-success-sub">
                  We&apos;ll reach out to you personally<br />
                  with your early access details.<br /><br />
                  <strong>Welcome to the Oyo Kids family.</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
