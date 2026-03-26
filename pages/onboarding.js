import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const languages = [
  { name: 'English',    flag: '🇬🇧', code: 'en' },
  { name: 'Arabic',     flag: '🇸🇦', code: 'ar' },
  { name: 'French',     flag: '🇫🇷', code: 'fr' },
  { name: 'German',     flag: '🇩🇪', code: 'de' },
  { name: 'Spanish',    flag: '🇪🇸', code: 'es' },
  { name: 'Italian',    flag: '🇮🇹', code: 'it' },
  { name: 'Portuguese', flag: '🇧🇷', code: 'pt' },
  { name: 'Japanese',   flag: '🇯🇵', code: 'ja' },
  { name: 'Chinese',    flag: '🇨🇳', code: 'zh' },
  { name: 'Korean',     flag: '🇰🇷', code: 'ko' },
  { name: 'Turkish',    flag: '🇹🇷', code: 'tr' },
  { name: 'Russian',    flag: '🇷🇺', code: 'ru' },
  { name: 'Hindi',      flag: '🇮🇳', code: 'hi' },
  { name: 'Dutch',      flag: '🇳🇱', code: 'nl' },
  { name: 'Swedish',    flag: '🇸🇪', code: 'sv' },
];

const levels = [
  { id: 1, badge: 'L1', title: 'Beginner',     sub: 'Complete beginner'},
  { id: 2, badge: 'L2', title: 'Elementary',   sub: 'Some Experience'},
  { id: 3, badge: 'L3', title: 'Intermediate', sub: 'Intermediate'},
];

export default function Onboarding() {
  const [step, setStep]     = useState(1);
  const [lang, setLang]     = useState(null);
  const [level, setLevel]   = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropRef             = useRef(null);

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setIsOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
    <div className="oyo-onboarding-wrapper">
      
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />

      
      <div className='logo_top'>
        <Link href="/">
            <img src="/images/logo.png" alt="Oyo Kids" className="left-logo" />
        </Link>
      </div>

      <div className="outer-ring">
        <div className="inner-circle">
          <div className="onboarding-card">

            {/* step dots */}
            <div className="step-dots">
              <div className={`dot ${step === 1 ? 'active' : ''}`} />
              <div className={`dot ${step === 2 ? 'active' : ''}`} />
            </div>

            {step === 1 ? (
              <div className="step-content">
                <h1>Choose Your Language</h1>

                <div className="field-group">
                  <span className="label-text">Select a language</span>

                  <div className="custom-select" ref={dropRef}>
                    <button className="select-trigger" onClick={() => setIsOpen(o => !o)}>
                      <span className="trigger-left">
                        {lang ? (
                          <>
                            <span className="flag-icon">{lang.flag}</span>
                            <span>{lang.name}</span>
                          </>
                        ) : (
                          <span className="_placeholder">Select language…</span>
                        )}
                      </span>
                      <span className={`chevron ${isOpen ? 'open' : ''}`}>▼</span>
                    </button>

                    {isOpen && (
                      <div className="options-menu">
                        {languages.map(item => (
                          <div
                            key={item.code}
                            className={`option-item ${lang?.code === item.code ? 'active' : ''}`}
                            onClick={() => { setLang(item); setIsOpen(false); }}
                          >
                            <span className="option-flag">{item.flag}</span>
                            <span className="option-name">{item.name}</span>
                            {lang?.code === item.code && <span className="check-mark">✓</span>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <button className="btn-next" disabled={!lang} onClick={() => setStep(2)}>
                  Continue →
                </button>
              </div>

            ) : (
              <div className="step-content">
                <h1>Choose Your Level</h1>

                <div className="level-list">
                  {levels.map(item => (
                    <button
                      key={item.id}
                      className={`level-button ${level === item.id ? 'selected' : ''}`}
                      onClick={() => setLevel(item.id)}
                    >
                      <div className="badge">{item.badge}</div>
                      <div className="text-box">
                        <b>{item.title}</b>
                        <small>{item.sub}</small>
                      </div>
                    </button>
                  ))}
                </div>

                <button className="btn-next" disabled={!level}>
                  Let's Start! 🎉
                </button>

                <button className="back-btn" onClick={() => setStep(1)}>
                  ← Back to Languages
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      <div class="hero-chips">
            <span class="chip">
              {step === 1 ? "Step 1 of 2 - Select Your Language" : "Step 2 of 2 - Select Your Level" }
            </span>
      </div>

    </div>
    </>
  );
}