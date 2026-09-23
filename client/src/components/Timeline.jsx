const milestones = [
  {
    year: 'NOW',
    role: 'Building NEXUS',
    tag: 'Self-Directed',
    desc: 'Developing a platform that analyzes software repositories for engineering risk — code hotspots, dependency impact, and maintainability problems.',
  },
  {
    year: 'Earlier',
    role: 'MERN Stack Projects',
    tag: 'Self-Taught',
    desc: 'Built QuickChat, a real-time chat application, and Nivaran, a doctor appointment booking system, both on the MERN stack.',
  },
  {
    year: 'Earlier',
    role: 'Cloud & AI Foundations',
    tag: 'Simulations',
    desc: 'Completed job simulations with Oracle (OCI AI Foundations), JPMorgan Chase, and AWS via Forage.',
  },
  {
    year: 'Ongoing',
    role: 'B.Tech in ECE',
    tag: 'Asansol Engineering College',
    desc: 'Studying Electronics & Communication Engineering, expected to graduate in 2027.',
  },
]

export default function Timeline() {
  return (
    <section>
      <div className="container">
        <h2 className="timeline-heading">
          My journey &amp; <span className="accent">experience</span>
        </h2>
        {milestones.map((m, i) => (
          <div className="timeline-row" key={m.role}>
            <div>
              <div className="role">{m.role}</div>
              <span className="role-tag">{m.tag}</span>
            </div>
            <div className="timeline-marker">
              <span className="timeline-year">{m.year}</span>
              {i < milestones.length - 1 && (
                <>
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                </>
              )}
            </div>
            <p className="timeline-desc">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
