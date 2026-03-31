import React from 'react';

const vocabularyItems = [
  { id: 1, word: 'Sit Down',         icon: '🪑', colorClass: 'color-green' },
  { id: 2, word: 'Stand Up',         icon: '🧍', colorClass: 'color-green' },
  { id: 3, word: 'Talk',             icon: '💬', colorClass: 'color-pink'  },
  { id: 4, word: 'Be Quiet',         icon: '🤫', colorClass: 'color-peach' },
  { id: 5, word: 'Write',            icon: '✏️', colorClass: 'color-mint'  },
  { id: 6, word: 'Open Your Book',   icon: '📖', colorClass: 'color-green' },
  { id: 7, word: 'Listen',           icon: '👂', colorClass: 'color-pink'  },
  { id: 8, word: 'Put Up Your Hand', icon: '✋', colorClass: 'color-rose'  },
  { id: 9, word: 'Repeat',           icon: '🔁', colorClass: 'color-lemon' },
];

const dots = Array.from({ length: 7 }, (_, i) => i);

export default function VocabularyPage({ onPlayCard }) {
  return (
    <div className="vocab-content">
      <div className="vocab-grid">
        {vocabularyItems.map((item) => (
          <div key={item.id} className="vocab-card">
            <div className={`vocab-image-area ${item.colorClass}`}>
              <span className="vocab-emoji">{item.icon}</span>
            </div>
            <p className="vocab-word">{item.word}</p>
            <button
              className="play-btn"
              onClick={() => onPlayCard(item)}
              title={`Play ${item.word}`}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* <div className="dots-row">
        {dots.map((d) => (
          <span key={d} className={d === 0 ? 'dot dot-active' : 'dot'} />
        ))}
      </div> */}
    </div>
  );
}
