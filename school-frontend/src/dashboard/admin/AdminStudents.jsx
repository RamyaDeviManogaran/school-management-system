import { useState, useEffect } from 'react'

function AdminStudents() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    admissionNumber: '', fullName: '', dateOfBirth: '', gender: '',
    classId: '', parentName: '', parentPhone: '', address: '',
  })

  const fetchStudents = () => {
    setLoading(true)
    fetch('http://localhost:8080/api/students')
      .then((res) => res.json())
      .then((data) => {
        setStudents(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching students:', error)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8080/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          classId: formData.classId ? parseInt(formData.classId) : null,
        }),
      })

      if (response.ok) {
        setFormData({
          admissionNumber: '', fullName: '', dateOfBirth: '', gender: '',
          classId: '', parentName: '', parentPhone: '', address: '',
        })
        setShowForm(false)
        fetchStudents()
      } else {
        alert('Failed to add student. Check that the Class ID exists.')
      }
    } catch (error) {
      alert('Could not connect to the server.')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this student?')) return
    try {
      await fetch(`http://localhost:8080/api/students/${id}`, { method: 'DELETE' })
      fetchStudents()
    } catch (error) {
      alert('Could not delete student.')
    }
  }

  return (
    <div>
      <div className="dash-page-header-row">
        <h1 className="dash-page-title">Students</h1>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Student'}
        </button>
      </div>

      {showForm && (
        <div className="dash-panel">
          <form onSubmit={handleSubmit} className="dash-inline-form">
            <input name="admissionNumber" placeholder="Admission Number" value={formData.admissionNumber} onChange={handleChange} required />
            <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
            <input name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} />
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input name="classId" type="number" placeholder="Class ID" value={formData.classId} onChange={handleChange} />
            <input name="parentName" placeholder="Parent Name" value={formData.parentName} onChange={handleChange} />
            <input name="parentPhone" placeholder="Parent Phone" value={formData.parentPhone} onChange={handleChange} />
            <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            <button type="submit" className="btn-primary">Save Student</button>
          </form>
        </div>
      )}

      <div className="dash-panel">
        {loading ? (
          <p className="dash-panel-placeholder">Loading students...</p>
        ) : students.length === 0 ? (
          <p className="dash-panel-placeholder">No students added yet.</p>
        ) : (
          <table className="dash-table">
            <thead>
              <tr>
                <th>Admission No.</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Class ID</th>
                <th>Parent</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.studentId}>
                  <td>{s.admissionNumber}</td>
                  <td>{s.fullName}</td>
                  <td>{s.gender}</td>
                  <td>{s.classId}</td>
                  <td>{s.parentName}</td>
                  <td>{s.parentPhone}</td>
                  <td>
                    <button className="dash-delete-btn" onClick={() => handleDelete(s.studentId)}>Delete</button>
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

export default AdminStudents