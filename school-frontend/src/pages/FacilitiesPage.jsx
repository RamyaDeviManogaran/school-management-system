function FacilitiesPage() {
    const facilities = [
      { image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80', title: 'Smart Classrooms', desc: 'Digital classrooms equipped with smart boards and audio-visual aids for interactive, engaging lessons.' },
      { image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80', title: 'Science Laboratories', desc: 'Well-equipped Physics, Chemistry and Biology labs that encourage hands-on experimentation.' },
      { image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80', title: 'Library', desc: 'A rich collection of books and resources to nurture reading, research and independent learning.' },
      { image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80', title: 'Transport', desc: 'Safe, reliable and GPS-enabled buses covering routes across the city.' },
      { image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80', title: 'Sports Grounds', desc: 'Spacious playgrounds and courts supporting athletics, football, basketball and more.' },
      { image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=600&q=80', title: 'Computer Lab', desc: 'Modern systems with high-speed internet supporting coding and digital literacy classes.' },
    ]
  
    return (
      <section className="detail-page">
        <div className="detail-hero">
          <h1>Our Facilities</h1>
          <p>World-class infrastructure built to support every kind of learner.</p>
        </div>
  
        <div className="detail-content">
          <h2>Campus Infrastructure</h2>
          <p>
            Every space at Our School is designed with learning in mind —
            from technology-enabled classrooms to safe transport, we invest
            in infrastructure that supports academic and personal growth.
          </p>
  
          <div className="facility-detail-grid">
            {facilities.map((item) => (
              <div key={item.title} className="facility-detail-card">
                <img src={item.image} alt={item.title} />
                <div className="facility-detail-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default FacilitiesPage