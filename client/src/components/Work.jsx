
const projects = [
  {
    num: '01',
    name: 'NEXUS',
    tag: 'AI / Engineering Tools',
    tools: 'React, Node.js, Express, Python, FastAPI, MongoDB',
    repo: 'https://github.com/Zeenatara/NEXUS',
    banner: {
      bg: 'linear-gradient(135deg, #1b1030, #3a2570)',
      title: 'NEXUS',
      sub: 'Engineering Risk Intelligence Platform',
      chips: [
        'Hotspots',
        'Dependency Graph',
        'Risk Scoring',
        'AI Explanations',
      ],
    },
  },
  {
    num: '02',
    name: 'QuickChat',
    tag: 'Real-Time / MERN',
    tools: 'MongoDB, Express, React, Node.js, Socket-based messaging',
    repo: 'https://github.com/Zeenatara/Realtime-Chat-app',
    banner: {
      bg: 'linear-gradient(135deg, #0f2a2e, #1c5b63)',
      title: 'QuickChat',
      sub: 'Real-Time Chat Application',
      chips: ['Live Messaging', 'Rooms', 'Online Status'],
    },
  },
  {
    num: '03',
    name: 'Nivaran',
    tag: 'Healthcare / MERN',
    tools: 'MongoDB, Express, React, Node.js',
    repo: 'https://github.com/Zeenatara/nivaran-doctor-appointment-system-Nivaran',
    banner: {
      bg: 'linear-gradient(135deg, #1a2036, #35407a)',
      title: 'Nivaran',
      sub: 'Doctor Appointment Booking System',
      chips: ['Scheduling', 'Patient Records', 'Availability'],
    },
  },
  {
    num: '04',
    name: 'StudySync',
    tag: 'EdTech / MERN',
    tools: 'MongoDB, Express, React, Node.js, Socket.IO, WebRTC',
    repo: 'https://github.com/Zeenatara/studysync',
    banner: {
      bg: 'linear-gradient(135deg, #14182b, #4b3a8f)',
      title: 'StudySync',
      sub: 'Student Video Collaboration & Study Platform',
      chips: ['Study Rooms', 'AI Session Recaps', 'Focus Analytics'],
    },
  },
];

function Banner({ banner }) {
  return (
    <div className="work-banner" style={{ background: banner.bg }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 250"
        style={{ position: 'absolute' }}
      >

      </svg>
      <div
        style={{ position: 'relative', textAlign: 'center', padding: '0 20px' }}
      >
        <div
          style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 700,
            fontSize: '2rem',
            color: '#f2f1f7',
          }}
        >
          {banner.title}
        </div>

        <div style={{ fontSize: '1.25rem', color: '#c9bdf0', marginTop: 6 }}>
          {banner.sub}
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            justifyContent: 'center',
            marginTop: 16,
          }}
        >
          {banner.chips.map((chip) => (
            <span
              key={chip}
              style={{
                fontSize: '0.875rem',
                border: '1px solid rgba(217,201,255,0.4)',
                borderRadius: 999,
                padding: '4px 10px',
                color: '#e8e2fb',
              }}
            >
              {chip}
            </span>

          ))}

        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <h2 className="work-heading">
          My <span className="accent">Work</span>
        </h2>
      </div>

      <div className="work-scroll">
        {projects.map((p) => (
          <div className="work-card" key={p.num}>
            <div className="work-info">
              <div className="work-num">{p.num}</div>
              <div className="work-title-row">
                <h3>{p.name}</h3>
                <span className="work-tag">{p.tag}</span>
              </div>
              <div className="work-label">Tools and features</div>
              <div className="work-tools">{p.tools}</div>
            </div>
            <Banner banner={p.banner} />

              <a
                className="work-repo-link"
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>

        ))}

        <div className="work-cta">
          <h3>Want to see more?</h3>
          <p>Explore the rest of my projects and code directly on GitHub.</p>
          <a
            className="btn btn-primary"
            href="https://github.com/Zeenatara"
            target="_blank"
            rel="noopener noreferrer"
          >
            See all work
          </a>
        </div>
      </div>
    </section>
  );
}
