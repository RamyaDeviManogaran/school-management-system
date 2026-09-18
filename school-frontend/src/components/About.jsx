import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
          alt="Our School Campus"
        />
      </div>

      <div className="about-content">
        <span className="section-label">Welcome To</span>
        <h2>Our School</h2>
        <p>
          Our School is a premier co-educational institution dedicated to
          developing confident, compassionate and responsible global
          citizens. We blend academic excellence with character building
          to prepare students for a successful future.
        </p>

        <div className="about-stats">
          <div className="stat"><h3>CBSE</h3><p>Affiliation</p></div>
          <div className="stat"><h3>1:20</h3><p>Teacher Ratio</p></div>
          <div className="stat"><h3>20+</h3><p>Years of Excellence</p></div>
          <div className="stat"><h3>100%</h3><p>Commitment</p></div>
        </div>

        <Link to="/about" className="btn-primary">Read More About Us</Link>
      </div>
    </section>
  )
}

export default About