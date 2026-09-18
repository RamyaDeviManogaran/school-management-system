function Features() {
    const features = [
      {
        icon: '💻',
        title: 'Smart Classrooms',
        desc: 'Technology-enabled learning for all',
      },
      {
        icon: '👩‍🏫',
        title: 'Experienced Faculty',
        desc: 'Qualified mentors who inspire',
      },
      {
        icon: '🚌',
        title: 'Safe Transport',
        desc: 'GPS-enabled buses for secure travel',
      },
      {
        icon: '🌱',
        title: 'Holistic Development',
        desc: 'Mind, body and values in balance',
      },
      {
        icon: '🔬',
        title: 'Modern Labs',
        desc: 'Well-equipped labs for practical learning',
      },
    ]
  
    return (
      <section className="features">
        {features.map((item) => (
          <div key={item.title} className="feature-card">
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
    )
  }
  
  export default Features