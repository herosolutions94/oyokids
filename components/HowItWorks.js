import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Vocabulary",
      desc: "Illustrated flashcards with native audio. Students click to hear perfect pronunciation every time."
    },
    {
      num: 2,
      title: "Dialogue",
      desc: "Animated classroom scenes bring vocabulary to life in real context with diverse characters."
    },
    {
      num: 3,
      title: "Review Game",
      desc: "Card flip game with random student name selection. Every student participates every lesson."
    },
    {
      num: 4,
      title: "Recap",
      desc: '"What did you learn today?" Structured consolidation of vocabulary before the lesson ends.'
    },
    {
      num: 5,
      title: "Celebration",
      desc: "Fun reward video to close every lesson on a high. Kids love it — they ask to do it again!"
    }
  ];

  return (
    <section className="section how" id="how">
      <div className="contain-sm">
        <p className="sec-label">Simple for Teachers</p>
        <h2 className="sec-title">A Complete Lesson in 5 Steps</h2>
        <div className="steps">
          {steps.map((step) => (
            <div className="step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}