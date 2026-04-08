
const teamData = [
  {
    name: "Tamika Quartey",
    role: "Founder & CEO",
    title: "ESL Educator · Pedagogical Lead · 12 Years",
    initials: "TQ",
    badge: "badge-pink",
    bio: `With 12 years in primary English education across multiple countries,
    Tamika is the pedagogical heart of Oyo Kids...`,
  },
  {
    name: "Magno Albuquerque",
    role: "Illustration & Animation",
    title: "Creative Director · Visual Storyteller",
    initials: "MA",
    badge: "badge-sky",
    bio: `Magno is the extraordinary creative force behind every illustration...`,
  },
  {
    name: "Raquel Pimentel",
    role: "UI/UX Designer",
    title: "Lead Designer · Product Experience",
    initials: "RP",
    badge: "badge-purple",
    bio: `Raquel is the creative mind behind the Oyo Kids visual identity...`,
  },
  {
    name: "Abdou Mouelhi",
    role: "QA & Technical",
    title: "Quality Assurance · Technical Operations",
    initials: "AM",
    badge: "badge-sage",
    bio: `Abdou is the meticulous guardian of the Oyo Kids experience...`,
  },
];

export default function Team() {
  return (
    <>
      <section className="team-section">
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
        <div className="contain-sm">
        <p className="sec-label">The People Behind the Magic</p>
        <h2 className="sec-title">
          Meet the <span>Oyo Kids</span> Team
        </h2>
        <p className="sec-sub">
          A small but mighty team of educators, designers and creators united by one belief —
          that every child in every classroom deserves to fall in love with language.
        </p>

        <div className="team-grid">
          {teamData.map((member, i) => (
            <div className="team-card" key={i}>
              <div className="card-top">
                <span className={`role-badge ${member.badge}`}>
                  {member.role}
                </span>

                <div className="member-name">{member.name}</div>
                <div className="member-title">{member.title}</div>
                <div className="member-divider"></div>
              </div>

              <div className="card-body">
                <div className="avatar-wrap">
                  <div className="avatar-inner">
                    <div className="avatar-initials">
                      {member.initials}
                    </div>
                  </div>
                </div>

                <div className="member-bio">{member.bio}</div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <div className="color-strip-bottom"></div>
    </>
  );
}