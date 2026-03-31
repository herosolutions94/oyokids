import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AdventureNav from '@/components/adventure-nav';
import VocabularyPage from '@/components/vocabulary-page';
import GameTimePage from '@/components/game-time-page';

const lessons = [
  { id: 1, label: 'Lesson 1', title: 'The Classroom', locked: false },
  { id: 2, label: 'Lesson 2', title: 'School Objects', locked: false },
  { id: 3, label: 'Lesson 3', title: 'Colors',         locked: false },
  { id: 4, label: 'Lesson 4', title: 'The Alphabet',   locked: true  },
];

const culturalLesson = { label: 'Cultural Lesson', title: 'Halloween' };

// screen: 'adventure' | 'vocabulary' | 'game'

export default function Adventure() {
  const router = useRouter();
  const [progress] = useState(20);
  const [screen, setScreen] = useState('adventure');
  const [activeLesson, setActiveLesson] = useState(null);

  const handleLessonClick = (lesson) => {
    setActiveLesson(lesson);
    setScreen('vocabulary');
  };

  // breadcrumb changes per screen
  const breadcrumbMap = {
    adventure:  'AT SCHOOL',
    vocabulary: `At School › ${activeLesson?.label} › Activities › Vocabulary`,
    game:       'At School › Activities › Dialogue › Review Game',
  };

  return (
    <main className="advanture_wrapper">
      <div className="adventure-page">

        {/* ── Blobs ── */}
        <div className="bg-blob blob-tl" />
        <div className="bg-blob blob-br" />
        <div className="bg-blob blob-mid" />
        <div className="bg-blob blob-sm" />

        {/* ── Nav — rendered once, breadcrumb updates per screen ── */}
        <AdventureNav
          breadcrumb={breadcrumbMap[screen]}
          onHome={
            screen === 'game'       ? () => setScreen('vocabulary') :
            screen === 'vocabulary' ? () => setScreen('adventure')  :
            () => router.push('/')
          }
        />

        {/* ── Adventure screen ── */}
        {screen === 'adventure' && (
          <div className="center-content">
            <div className="adventure-card">
              <div className="card-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="adventure-label">Adventure 1</span>
              <h1 className="adventure-title">At School</h1>
              <div className="progress-wrap">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${progress}%` }} />
                </div>
                <span className="progress-text">{progress}%</span>
              </div>
            </div>

            <div className="lesson-grid">
              {lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  className={`lesson-btn ${lesson.locked ? 'lesson-locked' : ''}`}
                  onClick={() => !lesson.locked && handleLessonClick(lesson)}
                  disabled={lesson.locked}
                >
                  <span className="lesson-num">{lesson.label}</span>
                  <span className="lesson-title">{lesson.title}</span>
                  {lesson.locked && (
                    <span className="lock-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="11" width="18" height="11" rx="2"/>
                        <path d="M7 11V7a5 5 0 0110 0v4"/>
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </div>

            <button className="cultural-btn" onClick={() => router.push('/cultural/halloween')}>
              <span className="cultural-label">{culturalLesson.label}</span>
              <span className="cultural-title">{culturalLesson.title}</span>
            </button>
          </div>
        )}

        {/* ── Vocabulary screen ── */}
        {screen === 'vocabulary' && (
          <VocabularyPage onPlayCard={() => setScreen('game')} />
        )}

        {/* ── Game Time screen ── */}
        {screen === 'game' && (
          <GameTimePage onBack={() => setScreen('vocabulary')} />
        )}

        {/* ── Notebook button — always visible ── */}
        <button className="notebook-btn" title="Notes">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </button>

      </div>
    </main>
  );
}