import { useParams, Link } from 'react-router-dom'
import departmentsData from '../data/departmentsData'

function DepartmentDetail() {
  const { slug } = useParams()
  const dept = departmentsData.find((d) => d.slug === slug)

  if (!dept) {
    return (
      <section className="detail-page">
        <div className="detail-content" style={{ marginTop: 60 }}>
          <h2>Department not found</h2>
          <Link to="/departments" className="btn-primary">Back to Departments</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="detail-page">
      <div className="detail-hero">
        <span className="dept-hero-icon">{dept.icon}</span>
        <h1>{dept.name}</h1>
        <p>{dept.classes}</p>
      </div>

      <div className="detail-content">
        <div className="dept-info-grid">
          <div className="dept-info-card">
            <h3>Classes Covered</h3>
            <p>{dept.classes}</p>
          </div>
          <div className="dept-info-card">
            <h3>Head of Department</h3>
            <p>{dept.teacher}</p>
          </div>
        </div>

        <h2>Subjects Taught</h2>
        <div className="subject-tags">
          {dept.subjects.map((s) => (
            <span key={s} className="subject-tag">{s}</span>
          ))}
        </div>

        <h2>Requirements</h2>
        <p>{dept.requirements}</p>

        <Link to="/departments" className="btn-secondary-teal" style={{ display: 'inline-block', marginTop: 20 }}>
          ← Back to All Departments
        </Link>
      </div>
    </section>
  )
}

export default DepartmentDetail