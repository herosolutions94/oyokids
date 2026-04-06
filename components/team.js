const teamMembers = [
  {
    id: 1,
    name: 'Dianne Russell',
    initials: 'DR',
    role: 'Front-end Developer',
    label: 'FRONT-END',
    labelColor: '#f472b6',
    labelBg: 'rgba(244,114,182,0.15)',
    subtitle: 'React Specialist · 5 Years',
    bio: 'Specializes in creating seamless user experiences with React and Next.js. Every pixel she ships is intentional, accessible, and buttery-smooth.',
  },
  {
    id: 2,
    name: 'Guy Hawkins',
    initials: 'GH',
    role: 'UI/UX Designer',
    label: 'UI/UX DESIGNER',
    labelColor: '#60a5fa',
    labelBg: 'rgba(96,165,250,0.15)',
    subtitle: 'Lead Designer · Product Experience',
    bio: 'Passionate about clean aesthetics and functional design systems. His designs are not just beautiful — they guide users naturally from start to finish.',
  },
  {
    id: 3,
    name: 'Esther Howard',
    initials: 'EH',
    role: 'CTO',
    label: 'FOUNDER & CTO',
    labelColor: '#f472b6',
    labelBg: 'rgba(244,114,182,0.15)',
    subtitle: 'Engineering Lead · 10 Years',
    bio: 'Leading our technical strategy and architectural decisions. Esther defines the engineering culture — rigorous, collaborative, and always forward-thinking.',
  },
  {
    id: 4,
    name: 'Robert Fox',
    initials: 'RF',
    role: 'Backend Engineer',
    label: 'QA & TECHNICAL',
    labelColor: '#34d399',
    labelBg: 'rgba(52,211,153,0.15)',
    subtitle: 'Quality Assurance · Technical Operations',
    bio: 'Expert in Node.js, databases, and high-performance server logic. Robert is the meticulous guardian of reliability — if it ships, it works.',
  },
];

export default function Team() {
  return (
    <section className="team-section">
      {/* Animated background blobs */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />

      <div className="contain-sm">
        <p className="sec-label">THE PEOPLE BEHIND THE MAGIC</p>

        <h2 className="sec-title">
          Meet the <span className="highlight-oyo">Oyo Kids</span> Team
        </h2>

        <p className="sec-subtitle">
          A small but mighty team of educators, designers and creators united by
          one belief — that every child in every classroom deserves to fall in love
          with language and its culture.
        </p>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              {/* Role badge */}
              <span
                className="role-badge"
                style={{ color: member.labelColor, background: member.labelBg, borderColor: member.labelColor }}
              >
                {member.label}
              </span>

              {/* Name & subtitle */}
              <h3 className="member-name">{member.name}</h3>
              <p className="member-subtitle">{member.subtitle}</p>

              <div className="card-body">
                {/* Avatar */}
                <div
                  className="avatar"
                >
                  {member.initials}
                </div>

                {/* Bio */}
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
