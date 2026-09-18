function EventsPage() {
    const events = [
      {
        date: '15 October 2026',
        title: 'Annual Sports Day',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80',
        desc: 'Students compete in track and field events, relay races and team games across all age groups. Houses compete for the annual sports trophy, with the day ending in a prize ceremony celebrating both effort and achievement.',
      },
      {
        date: '02 November 2026',
        title: 'Science Exhibition',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
        desc: 'Students from Class VI–XII present original science projects and working models to parents and judges. Categories include innovation, sustainability and applied technology, with awards for the top projects in each.',
      },
      {
        date: '20 December 2026',
        title: 'Annual Day Celebration',
        image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80',
        desc: 'Our biggest celebration of the year — featuring dance, music and drama performances from every grade, along with the annual prize distribution honoring academic and extracurricular achievements.',
      },
      {
        date: '26 January 2027',
        title: 'Republic Day Celebration',
        image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=600&q=80',
        desc: 'A patriotic assembly with flag hoisting, cultural performances and student speeches celebrating the nation, followed by classroom activities on civic values.',
      },
    ]
  
    return (
      <section className="detail-page">
        <div className="detail-hero">
          <h1>Upcoming Events</h1>
          <p>Celebrating learning, talent and togetherness all year round.</p>
        </div>
  
        <div className="detail-content">
          {events.map((event) => (
            <div key={event.title} className="event-detail-row">
              <img src={event.image} alt={event.title} />
              <div>
                <span className="event-date-badge">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default EventsPage