function Facilities() {
  const facilities = [
    { image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=300&q=80', title: 'Smart Classrooms', desc: 'Digital boards & AV aids.' },
    { image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=300&q=80', title: 'Science Labs', desc: 'Hands-on experimentation.' },
    { image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=300&q=80', title: 'Library', desc: 'A space to read and research.' },
    { image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=300&q=80', title: 'Transport', desc: 'Safe, GPS-enabled buses.' },
  ]

  return (
    <section className="facilities" id="facilities">
      <div className="academics-header">
        <span className="section-label">Facilities</span>
        <h2>World-Class Infrastructure</h2>
      </div>

      <div className="facilities-grid-small">
        {facilities.map((item) => (
          <div key={item.title} className="facility-mini-card">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-wrap">
        <a href="/facilities" className="btn-secondary-teal">View All Facilities</a>
      </div>
    </section>
  )
}

export default Facilities