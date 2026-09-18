import { Link } from 'react-router-dom'

function AdmissionsCTA() {
  return (
    <section className="admissions-cta" id="admissions">
      <div className="admissions-text">
        <span className="cta-icon">🎓</span>
        <div>
          <h3>Admissions Open for Academic Year 2026–27</h3>
          <p>Give your child the best start for a bright tomorrow.</p>
        </div>
      </div>
      <Link to="/admission-form" className="btn-enquire">Enquire Now</Link>
    </section>
  )
}

export default AdmissionsCTA