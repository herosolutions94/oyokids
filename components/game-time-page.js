import React, { useState } from 'react';

const initialCards = [
  { id: 1, word: 'Sit Down',   icon: '/images/sitdown.svg' },
  { id: 2, word: 'Stand Up',   icon: '/images/standup.svg' },
  { id: 3, word: 'Talk',       icon: '/images/icon1.png' },
  { id: 4, word: 'Be Quiet',   icon: '/images/icon2.png' },
  { id: 5, word: 'Write',      icon: '/images/icon3.png' },
  { id: 6, word: 'Listen',     icon: '/images/icon4.png' },
];

export default function GameTimePage({ onBack }) {
  const [cards, setCards] = useState(initialCards);
  const [flippedId, setFlippedId] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [played, setPlayed] = useState(0);
  const [toast, setToast] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setFlippedId(card.id);
  };

  const showToast = (type) => {
    setToast(type);
    setTimeout(() => setToast(null), 1200);
  };

  const handleCorrect = () => {
    if (!selectedCard) return;
    setCards((prev) => prev.filter((c) => c.id !== selectedCard.id));
    setCorrect((c) => c + 1);
    setPlayed((p) => p + 1);
    setFlippedId(null);
    setSelectedCard(null);
    showToast('correct');
  };

  const handleTryAgain = () => {
    if (!selectedCard) return;
    setPlayed((p) => p + 1);
    setFlippedId(null);
    setSelectedCard(null);
    showToast('wrong');
  };

  return (
    <>
      <span className="game-star star-1">⭐</span>
      <span className="game-star star-2">⭐</span>
      <span className="game-star star-3">⭐</span>
      <span className="game-star star-4">⭐</span>

      <div className="game-heading">
        <h1 className="game-title">GAME TIME!</h1>
        <p className="game-subtitle">SHOW WHAT YOU KNOW!</p>
      </div>

      <div className="game-layout">

        {/* Left: card stack */}
        <div className="cards-stack">
          <p className="cards-label">CARDS</p>
          <div className="stack-visual">
            <div className="stack-card stack-back-2" />
            <div className="stack-card stack-back-1" />
            <div className="stack-card stack-top">
              <span className="stack-icon"><img src="/images/logo.png" alt="Oyo Kids"/></span>
            </div>
          </div>
          <p className="cards-count">{cards.length} cards left</p>
        </div>

        {/* Center: card grid */}
        <div className="card-grid">
          {Array.from({ length: 6 }).map((_, i) => {
            const card = cards[i];
            const isFlipped = card && flippedId === card.id;
            const isSelected = selectedCard?.id === card?.id;

            let slotClass = 'grid-slot';
            if (card) slotClass += ' slot-filled';
            if (isSelected) slotClass += ' slot-selected';
            if (isFlipped) slotClass += ' slot-flipped';

            return (
              <div
                key={i}
                className={slotClass}
                onClick={() => card && handleCardClick(card)}
              >
                {isFlipped && card ? (
                  <div className="card-face">
                    <span className="card-face-icon"><img src={card.icon} alt={card.word} /></span>
                    <span className="card-face-word">{card.word}</span>
                  </div>
                ) : card ? (
                  <span className="card-placeholder">?</span>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Right: student panel */}
        <div className="student-panel">
          <p className="student-label">SELECTED STUDENT</p>
          <div className="student-card">
            <div className="student-avatar">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <p className="student-name">ENZO<br/>PIMENTEL</p>
          </div>
          <button className="refresh-btn" title="Pick new student">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M23 4v6h-6"/>
              <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
            </svg>
          </button>
          <p className="tap-label">Tap to pick new student</p>
          <div className="score-row">
            <div className="score-box">
              <span className="score-num">{correct}</span>
              <span className="score-lbl">Correct</span>
            </div>
            <div className="score-box">
              <span className="score-num">{played}</span>
              <span className="score-lbl">Played</span>
            </div>
          </div>
        </div>

      </div>

      {/* Action buttons */}
      <div className="game-actions">
        <button className="btn-correct" onClick={handleCorrect} disabled={!selectedCard}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Correct!
        </button>
        <button className="btn-try-again" onClick={handleTryAgain} disabled={!selectedCard}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M23 4v6h-6"/>
            <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
          </svg>
          Try Again
        </button>
      </div>

      {toast && (
        <div className={`result-toast toast-${toast}`}>
          {toast === 'correct' ? '✓ Correct!' : '✗ Try Again!'}
        </div>
      )}
    </>
  );
}
