import { Link } from 'react-router-dom'

function Academics() {
  const items = [
    { icon: '📘', title: 'CBSE Curriculum', desc: 'Comprehensive curriculum from Nursery to Class XII designed for holistic growth.', target: '/academics#overview' },
    { icon: '🎓', title: 'Experienced Faculty', desc: 'Our educators inspire, mentor and bring out the best in every child.', target: '/academics#faculty' },
    { icon: '💡', title: 'Innovative Learning', desc: 'Activity-based, experiential and technology-integrated learning approach.', target: '/academics#methodology' },
    { icon: '🏆', title: 'Excellence Driven', desc: 'Focus on academics, sports, arts and life skills for all-round development.', target: '/academics#examination' },
  ]

  return (
    <section className="academics" id="academics">
      <div className="academics-header">
        <span className="section-label">Academics</span>
        <h2>Explore. Learn. Excel.</h2>
      </div>

      <div className="academics-grid">
        {items.map((item) => (
          <Link key={item.title} to={item.target} className="academic-card">
            <div className="academic-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Academics