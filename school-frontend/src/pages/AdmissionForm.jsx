import { useState } from 'react'

function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: '', dob: '', gender: '', classApplying: '',
    parentName: '', relation: '', phone: '', email: '', address: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:8080/api/admissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentName: formData.studentName,
          dateOfBirth: formData.dob,
          gender: formData.gender,
          classApplyingFor: formData.classApplying,
          parentName: formData.parentName,
          relation: formData.relation,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
        }),
      })

      if (response.ok) {
        alert('Enquiry submitted successfully! Our admissions team will contact you soon.')
        setFormData({
          studentName: '', dob: '', gender: '', classApplying: '',
          parentName: '', relation: '', phone: '', email: '', address: '',
        })
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error)
      alert('Could not connect to the server. Please try again later.')
    }
  }

  return (
    <section className="admission-form-page">
      <div className="form-header">
        <h1>Admission Enquiry Form</h1>
        <p>Fill in the details below and our admissions team will contact you.</p>
      </div>

      <form onSubmit={handleSubmit} className="admission-form">
        <h3 className="form-section-title">Student Details</h3>
        <div className="form-grid">
          <label>Student Name
            <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required />
          </label>
          <label>Date of Birth
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </label>
          <label>Gender
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>Class Applying For
            <input type="text" name="classApplying" value={formData.classApplying} onChange={handleChange} required />
          </label>
        </div>

        <h3 className="form-section-title">Parent / Guardian Details</h3>
        <div className="form-grid">
          <label>Parent/Guardian Name
            <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required />
          </label>
          <label>Relation to Student
            <select name="relation" value={formData.relation} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="guardian">Guardian</option>
            </select>
          </label>
          <label>Phone Number
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <label>Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
        </div>

        <h3 className="form-section-title">Address</h3>
        <div className="form-grid">
          <label className="full-width">Address
            <textarea name="address" value={formData.address} onChange={handleChange} rows="3" />
          </label>
        </div>

        <button type="submit" className="btn-primary">Submit Enquiry</button>
      </form>
    </section>
  )
}

export default AdmissionForm