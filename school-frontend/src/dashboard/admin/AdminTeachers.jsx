import { useState, useEffect } from 'react'

const API = 'http://localhost:8080/api/teachers'
const EMPTY = { employeeId: '', fullName: '', qualification: '', department: '', phone: '' }

function AdminTeachers() {
  const [teachers, setTeachers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState(EMPTY)

  const fetchTeachers = () => {
    setLoading(true)
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data)
        setError('')
        setLoading(false)
      })
      .catch(() => {
        setError('Could not load teachers. Is the backend running?')
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchTeachers()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setFormData(EMPTY)
        setShowForm(false)
        fetchTeachers()
      } else {
        alert('Failed to add teacher. The Employee ID may already exist.')
      }
    } catch (err) {
      alert('Could not connect to the server.')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this teacher?')) return
    try {
      await fetch(`${API}/${id}`, { method: 'DELETE' })
      fetchTeachers()
    } catch (err) {
      alert('Could not delete teacher.')
    }
  }

  return (
    <div>
      <div className="dash-page-header-row">
        <h1 className="dash-page-title">Teachers</h1>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Teacher'}
        </button>
      </div>

      {showForm && (
        <div className="dash-panel">
          <form onSubmit={handleSubmit} className="dash-inline-form">
            <input name="employeeId" placeholder="Employee ID" value={formData.employeeId} onChange={handleChange} required />
            <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
            <input name="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleChange} />
            <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} />
            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            <button type="submit" className="btn-primary">Save Teacher</button>
          </form>
        </div>
      )}

      <div className="dash-panel">
        {error && <p style={{ color: '#C94040', fontSize: 13 }}>{error}</p>}
        {loading ? (
          <p className="dash-panel-placeholder">Loading teachers...</p>
        ) : teachers.length === 0 ? (
          <p className="dash-panel-placeholder">No teachers added yet.</p>
        ) : (
          <table className="dash-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Qualification</th>
                <th>Department</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((t) => (
                <tr key={t.teacherId}>
                  <td>{t.employeeId}</td>
                  <td>{t.fullName}</td>
                  <td>{t.qualification}</td>
                  <td>{t.department}</td>
                  <td>{t.phone}</td>
                  <td>
                    <button className="dash-delete-btn" onClick={() => handleDelete(t.teacherId)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default AdminTeachers