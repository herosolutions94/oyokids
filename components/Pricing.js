import React from 'react';
import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      title: "Free Forever",
      price: "0",
      desc: "Perfect for trying Oyo Kids",
      features: [
        "2 complete lessons",
        "All activity types",
        "Native speaker audio",
        "No credit card needed"
      ],
      cta: "Start Free",
      featured: false
    },
    {
      title: "Most Popular",
      price: "9",
      desc: "For individual teachers",
      features: [
        "Full lesson library",
        "New lessons monthly",
        "Student progress tracking",
        "Class roster management",
        "Printable worksheets"
      ],
      cta: "Get Started",
      featured: true
    },
    {
      title: "School",
      price: "99",
      desc: "For the whole school",
      features: [
        "All teachers included",
        "School admin dashboard",
        "Priority support",
        "Usage reporting"
      ],
      cta: "Contact Us",
      featured: false
    }
  ];

  return (
    <section className="section pricing" id="pricing">
      <div className="contain-sm">
        <p className="sec-label">Simple Pricing</p>
        <h2 className="sec-title">Start Free. Grow at Your Own Pace</h2>
        <div className="plans">
          {plans.map((plan, index) => (
            <div className={`plan ${plan.featured ? 'featured' : ''}`} key={index}>
              <span className="plan-tag">{plan.title}</span>
              <div className="plan-price">
                €{plan.price}
                <sub>/mo</sub>
              </div>
              <div className="plan-desc">{plan.desc}</div>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link href="#cta" className="plan-cta">
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}