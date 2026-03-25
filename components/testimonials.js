import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "My students ask me every day if we can do Oyo Kids. The audio is perfect — no more worrying about my own pronunciation.",
      name: "Sophie L.",
      role: "CE2 Teacher — Corsica, France",
      initials: "SL",
      color: "#e17ca8"
    },
    {
      quote: "I used to spend three hours preparing each lesson. Now I open Oyo Kids and everything is ready. It changed my teaching completely.",
      name: "Marie K.",
      role: "CM1 Teacher — Lyon, France",
      initials: "MK",
      color: "#9f7eb2"
    },
    {
      quote: "The random name selection for the game is genius. Every student is paying attention because they know they could be next!",
      name: "Ahmed B.",
      role: "English Teacher — Cairo, Egypt",
      initials: "AB",
      color: "#96b9b3"
    }
  ];

  return (
    <section className="section testimonials">
      <div className="contain-sm">
        <p className="sec-label">Teacher Stories</p>
        <h2 className="sec-title">What Teachers Are Saying</h2>
        <div className="tgrid">
          {reviews.map((item, index) => (
            <div className="tcard" key={index}>
              <div className="tstars">★★★★★</div>
              <blockquote>"{item.quote}"</blockquote>
              <div className="tauthor">
                <div 
                  className="tavatar" 
                  style={{ background: item.color }}
                >
                  {item.initials}
                </div>
                <div>
                  <div className="tname">{item.name}</div>
                  <div className="trole">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}