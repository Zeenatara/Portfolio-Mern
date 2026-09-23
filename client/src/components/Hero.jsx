export default function Hero() {
  return (
    <header className="hero-section" id="about">
      <div className="container hero-grid">
        <div className="avatar-frame">
          <div className="avatar-glow"></div>
          <div className="avatar-photo">
            <img src="/zee_character.jpeg" alt="Zeenat Ara" />
          </div>
        </div>

        <div className="hero-copy">
          <div className="eyebrow">About Me</div>
          <p>
            I'm a{' '}
            <span className="muted-word">self-taught full-stack developer</span>{' '}
            and Electronics &amp; Communication Engineering undergraduate from
            India, focused on building strong software engineering fundamentals
            and practical development skills. My core stack includes{' '}
            <span className="muted-word">
              React, JavaScript, Node.js, Express, Python, FastAPI, and MongoDB
            </span>
            , with a strong interest in AI and backend systems.
            <br />
            <br />
            As a fresher, I bring consistent self-directed learning, hands-on
            problem solving, and a habit of taking ideas from learning to
            implementation. I'm currently focused on growing as a software
            engineer and preparing for real-world engineering opportunities.
          </p>
        </div>
      </div>
    </header>
  );
}
