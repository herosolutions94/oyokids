import React, { useState } from 'react';

export default function Faq() {
    // We store the index of the open FAQ. 
    // If it's 0, the first is open. If it's null, all are closed.
    const [openIndex, setOpenIndex] = useState(0);

    const faqData = [
        {
            q: "Is Oyo Kids really free to start?",
            a: "Yes — 2 complete lessons are free forever. No credit card required, no time limit. You get full access to both lessons including all activities, audio and games."
        },
        {
            q: "Do I need to install anything?",
            a: "Nothing at all. Oyo Kids runs entirely in your web browser — open the link and your lesson is ready. Works on classroom projectors, tablets, computers and smartphones."
        },
        {
            q: "What ages is Oyo Kids designed for?",
            a: "Oyo Kids is designed for primary school students aged 4 to 11, aligned to CE1, CE2, CM1 and CM2 levels in France."
        },
        {
            q: "Can I use Oyo Kids if I am not a native English speaker?",
            a: "Absolutely — that is exactly why we built it. Every word and dialogue is recorded by a native American English speaker."
        },
        {
            q: "How many lessons are available?",
            a: "We currently have 10+ complete lessons across 5 adventures: At School, About Me, My Activities, My Home and My City. New lessons are added every month."
        },
        {
            q: "Can my whole school use Oyo Kids?",
            a: "Yes — our School Plan at €99/month includes all teachers in your school plus an admin dashboard for your principal. Contact us for district pricing."
        }
    ];

    const handleToggle = (index) => {
        // If the one we clicked is already open, close it (set to null)
        // Otherwise, open the new one (this automatically closes the previous one)
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section faq" id="faq">
            <div className="contain-sm">
                <p className="sec-label">Got Questions?</p>
                <h2 className="sec-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div 
                            className={`faq-item ${openIndex === index ? 'open' : ''}`} 
                            key={index}
                        >
                            <div className="faq-q" onClick={() => handleToggle(index)}>
                                <span>{item.q}</span>
                                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                            </div>
                            
                            {/* In React, we conditionally render the answer */}
                            {openIndex === index && (
                                <div className="faq-a">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}