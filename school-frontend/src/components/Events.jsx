import { Link } from 'react-router-dom'

function Events() {
  const events = [
    { date: '15 Oct 2026', title: 'Annual Sports Day', desc: 'A day of athletics and inter-house competitions.' },
    { date: '02 Nov 2026', title: 'Science Exhibition', desc: 'Students showcase innovative projects.' },
    { date: '20 Dec 2026', title: 'Annual Day Celebration', desc: 'Cultural performances and prize distribution.' },
  ]

  return (
    <section className="events" id="events">
      <div className="academics-header">
        <span className="section-label">What's Happening</span>
        <h2>Upcoming Events</h2>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.title} className="event-card">
            <div className="event-date">{event.date}</div>
            <h3>{event.title}</h3>
            <p>{event.desc}</p>
          </div>
        ))}
      </div>

      <div className="view-all-wrap">
        <Link to="/events" className="btn-secondary-teal">View All Upcoming Events</Link>
      </div>
    </section>
  )
}

export default Events