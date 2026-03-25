import React from 'react';

export default function VocabPreview() {
  const vocabList = [
    { id: 1, word: "Talk", img: "/images/icon1.png" },
    { id: 2, word: "Be Quiet", img: "/images/icon2.png" },
    { id: 3, word: "Write", img: "/images/icon3.png" },
    { id: 4, word: "Listen", img: "/images/icon4.png" },
    { id: 5, word: "Put Up Your Hand", img: "/images/icon5.png" },
    { id: 6, word: "Repeat", img: "/images/icon6.png" },
  ];

  return (
    <section className="section vocab-preview" id="vocab">
      <div className="contain-sm">
        <p className="sec-label">Real Lesson Preview</p>
        <h2 className="sec-title">Classroom Commands — At School</h2>
        <div className="vgrid">
          {vocabList.map((item) => (
            <div className="vcard" key={item.id}>
              <img src={item.img} alt={`Oyo Kids - ${item.word}`} />
              <div className="vcard-word">{item.word}</div>
              <button className="vplay" aria-label={`Listen to ${item.word}`}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#a8d045">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}