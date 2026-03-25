import React from 'react';

export default function Features() {
  const featureData = [
    {
      id: 1,
      color: "pink",
      title: "Native Speaker Audio",
      desc: "Every vocabulary word and dialogue recorded by a native American English speaker. No more pronunciation anxiety — ever.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e17ca8" strokeWidth="2.5" strokeLinecap="round">
          <path d="M9 18V5l12-2v13M9 9l12-2" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
        </svg>
      )
    },
    {
      id: 2,
      color: "sky",
      title: "Works on Any Device",
      desc: "Open a browser and your lesson is ready. Works on classroom projectors, tablets, computers and phones — no installation needed.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#86a5d3" strokeWidth="2.5" strokeLinecap="round">
          <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
        </svg>
      )
    },
    {
      id: 3,
      color: "mint",
      title: "Student Name Integration",
      desc: "Enter your class roster once. The system randomly selects students during the review game — keeping everyone engaged and on their toes.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7ab830" strokeWidth="2.5" strokeLinecap="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      )
    },
    {
      id: 4,
      color: "purple",
      title: "Progress Tracking",
      desc: "See exactly which students completed each lesson and where they need extra support. Beautiful visual reports for teachers and schools.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#9f7eb2" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    },
    {
      id: 5,
      color: "peach",
      title: "Printable Worksheets",
      desc: "A ready-to-print PDF worksheet included with every single lesson. Zero extra prep. Print and hand out in seconds.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e69030" strokeWidth="2.5" strokeLinecap="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      id: 6,
      color: "sage",
      title: "Rewards & Celebrations",
      desc: "Every lesson ends with a fun celebration. Students earn points, badges and rewards — turning learning into something kids actually look forward to.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5a9e90" strokeWidth="2.5" strokeLinecap="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    }
  ];

  return (
    <section className="section features" id="features">
      <div className="contain-sm">
        <p className="sec-label">Everything You Need</p>
        <h2 className="sec-title">
          The Complete English Classroom
          <br />
          in One Platform
        </h2>
        <div className="features-grid">
          {featureData.map((item) => (
            <div className={`feat-card fc-${item.color}`} key={item.id}>
              <div className={`feat-icon fi-${item.color}`}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}