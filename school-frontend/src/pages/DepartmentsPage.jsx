import { Link } from 'react-router-dom'
import departmentsData from '../data/departmentsData'

function DepartmentsPage() {
  return (
    <section className="detail-page">
      <div className="detail-hero">
        <h1>Our Departments</h1>
        <p>Specialized teams dedicated to every area of learning.</p>
      </div>

      <div className="departments" style={{ marginTop: 60 }}>
        <div className="academics-header">
          <span className="section-label">Our Departments</span>
          <h2>Areas of Learning</h2>
        </div>

        <div className="departments-grid">
          {departmentsData.map((dept) => (
            <Link key={dept.slug} to={`/departments/${dept.slug}`} className="department-card">
              <div className="department-icon">{dept.icon}</div>
              <h3>{dept.name}</h3>
              <p>{dept.classes}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DepartmentsPage