function StudentDashboard() {
    const stats = [
      { label: 'Attendance', value: '92%', icon: '📅', color: 'stat-blue' },
      { label: 'Overall Grade', value: 'A', icon: '🏆', color: 'stat-green' },
      { label: 'Exams Completed', value: '5', icon: '📝', color: 'stat-orange' },
      { label: 'Class Rank', value: '4th', icon: '⭐', color: 'stat-purple' },
    ]
  
    const results = [
      { subject: 'English', type: 'Mid Term', grade: 'A', score: '88/100', date: '12 May 2026' },
      { subject: 'Mathematics', type: 'Mid Term', grade: 'A+', score: '95/100', date: '10 May 2026' },
      { subject: 'Science', type: 'Mid Term', grade: 'B+', score: '80/100', date: '08 May 2026' },
      { subject: 'Computer Science', type: 'Mid Term', grade: 'A', score: '90/100', date: '06 May 2026' },
    ]
  
    return (
      <div>
        <div className="student-greeting">
          <div>
            <p className="greeting-hello">Good Morning, 👋</p>
            <h1 className="dash-page-title">Welcome Back!</h1>
            <p className="dash-subtext">Stay updated with your academic journey.</p>
          </div>
        </div>
  
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
              <h3>Recent Results</h3>
            </div>
            <table className="dash-table">
              <thead>
                <tr><th>Subject</th><th>Exam</th><th>Grade</th><th>Score</th><th>Date</th></tr>
              </thead>
              <tbody>
                {results.map((r) => (
                  <tr key={r.subject}>
                    <td>{r.subject}</td>
                    <td>{r.type}</td>
                    <td>{r.grade}</td>
                    <td>{r.score}</td>
                    <td>{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          <div className="dash-panel">
            <div className="dash-panel-header">
              <h3>Notice Board</h3>
            </div>
            <ul className="dash-notice-list">
              <li><strong>End Semester Exams</strong><span>Begins 25th May — 15 May</span></li>
              <li><strong>Result Declaration</strong><span>Mid-term results out — 12 May</span></li>
              <li><strong>Project Submission</strong><span>Due 30th May — 10 May</span></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  export default StudentDashboard