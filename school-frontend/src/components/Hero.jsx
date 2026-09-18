import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Inspiring Excellence, Building Futures</h1>
        <p>
          At Our School, we nurture young minds with strong values,
          modern learning, and boundless opportunities.
        </p>
        <div className="hero-buttons">
          <Link to="/admission-form" className="btn-primary">Admissions Open</Link>
          <a href="#facilities" className="btn-secondary">Explore Campus</a>
        </div>
      </div>
    </section>
  )
}

export default Hero