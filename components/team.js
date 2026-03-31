
const teamMembers = [
  {
    id: 1,
    name: 'Dianne Russell',
    role: 'Front-end Developer',
    bio: 'Specializes in creating seamless user experiences with React and Next.js.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Guy Hawkins',
    role: 'UI/UX Designer',
    bio: 'Passionate about clean aesthetics and functional design systems.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Esther Howard',
    role: 'CTO',
    bio: 'Leading our technical strategy and architectural decisions.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Robert Fox',
    role: 'Backend Engineer',
    bio: 'Expert in Node.js, databases, and high-performance server logic.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
];

export default function Team() {
  return (
    <section className="team-section">
      <div className="contain-sm">
        <p className="sec-label">Our Creative Team</p>
        <h2 className="sec-title">The people behind the magic</h2>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  fill
                  className="team-image"
                />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <span className="member-role">{member.role}</span>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}