import { useState, useEffect } from 'react'

function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/api/admissions')
      .then((res) => res.json())
      .then((data) => {
        setEnquiries(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching admissions:', error)
        setLoading(false)
      })
  }, [])

  const stats = [
    { label: 'Students', value: '1,240', icon: '🎓', color: 'stat-blue' },
    { label: 'Teachers', value: '86', icon: '👩‍🏫', color: 'stat-green' },
    { label: 'Admissions', value: enquiries.length, icon: '📥', color: 'stat-orange' },
    { label: 'This Year Fees', value: '₹42.6L', icon: '💰', color: 'stat-purple' },
  ]

  const students = [
    { name: 'Evelyn Harper', id: 'PRE43178', marks: 1185, percent: '98%' },
    { name: 'Diana Plenty', id: 'PRE43174', marks: 1165, percent: '91%' },
    { name: 'John Millar', id: 'PRE43187', marks: 1175, percent: '92%' },
    { name: 'Miles Esther', id: 'PRE45731', marks: 1180, percent: '93%' },
  ]

  return (
    <div>
      <h1 className="dash-page-title">Admin Dashboard</h1>

      <div className="stat-cards-row">
        {stats.map((s) => (
          <div key={s.label} className={`stat-mini-card ${s.color}`}>
            <div className="stat-mini-icon">{s.icon}</div>
            <div>
              <div className="stat-mini-value">{s.value}</div>
              <div className="stat-mini-label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="dash-panel-grid">
        <div className="dash-panel">
          <div className="dash-panel-header">
            <h3>Recent Admissions</h3>
          </div>

          {loading ? (
            <p className="dash-panel-placeholder">Loading enquiries...</p>
          ) : enquiries.length === 0 ? (
            <p className="dash-panel-placeholder">No admission enquiries yet.</p>
          ) : (
            <table className="dash-table">
              <thead>
                <tr><th>Student</th><th>Class</th><th>Parent</th><th>Phone</th><th>Status</th></tr>
              </thead>
              <tbody>
                {enquiries.slice(0, 5).map((e) => (
                  <tr key={e.enquiryId}>
                    <td>{e.studentName}</td>
                    <td>{e.classApplyingFor}</td>
                    <td>{e.parentName}</td>
                    <td>{e.phone}</td>
                    <td>{e.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="dash-panel">
          <div className="dash-panel-header">
            <h3>Announcements</h3>
          </div>
          <ul className="dash-notice-list">
            <li><strong>New Teacher</strong><span>Joined Science department — Just now</span></li>
            <li><strong>Fee Structure</strong><span>Updated for 2026–27 — Today</span></li>
            <li><strong>New Course</strong><span>Robotics club launching — 24 Sep</span></li>
          </ul>
        </div>
      </div>

      <div className="dash-panel">
        <div className="dash-panel-header">
          <h3>Star Students</h3>
        </div>
        <table className="dash-table">
          <thead>
            <tr><th>Name</th><th>ID</th><th>Marks</th><th>Percent</th></tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.id}</td>
                <td>{s.marks}</td>
                <td>{s.percent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminDashboard