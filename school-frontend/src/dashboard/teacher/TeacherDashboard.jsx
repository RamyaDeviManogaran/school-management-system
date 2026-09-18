import { Link } from 'react-router-dom'

function TeacherDashboard() {
  const tiles = [
    { label: 'Attendance', icon: '📋', color: 'tile-red', path: '/teacher/attendance' },
    { label: 'My Classes', icon: '🏫', color: 'tile-green', path: '/teacher/classes' },
    { label: 'Timetable', icon: '🗓️', color: 'tile-pink', path: '/teacher/timetable' },
    { label: 'Marks', icon: '📝', color: 'tile-blue', path: '/teacher/marks' },
    { label: 'Assignments', icon: '📚', color: 'tile-orange', path: '/teacher/assignments' },
    { label: 'Announcements', icon: '📢', color: 'tile-teal', path: '/teacher/announcements' },
  ]

  return (
    <div>
      <h1 className="dash-page-title">Welcome, Teacher</h1>
      <p className="dash-subtext">Here's quick access to everything you need today.</p>

      <div className="tile-grid">
        {tiles.map((tile) => (
          <Link key={tile.label} to={tile.path} className={`quick-tile ${tile.color}`}>
            <span className="quick-tile-icon">{tile.icon}</span>
            <span>{tile.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TeacherDashboard