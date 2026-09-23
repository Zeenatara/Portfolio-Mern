const items = [
  {
    title: 'Frontend Development',
    desc: 'Building responsive interfaces with React — component-driven, state-aware, and built to scale.',
  },
  {
    title: 'Backend & APIs',
    desc: 'Designing REST APIs with Node.js, Express, and Python/FastAPI, backed by MongoDB.',
  },
  {
    title: 'Full-Stack Projects',
    desc: 'Shipping complete MERN applications end to end — from schema design to deployed UI.',
  },
  {
    title: 'Continuous Learning',
    desc: 'Working through cloud, AI, and systems-design fundamentals via hands-on simulations.',
  },
]

export default function WhatIDo() {
  return (
    <section>
      <div className="container what-grid">
        <h2 className="what-title">WHAT I DO</h2>
        <div className="what-cards">
          {items.map((item) => (
            <div className="what-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
