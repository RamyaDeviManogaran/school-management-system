function GalleryPage() {
    const spreads = [
      {
        title: 'Our Campus',
        subtitle: 'Where every day begins',
        image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=80',
        desc: 'Spread across a green, spacious campus, our school is designed to feel open and welcoming. From the main building to the quiet corners between classes, every space is built with students in mind.',
      },
      {
        title: 'Inside the Classroom',
        subtitle: 'Learning, up close',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80',
        desc: 'Smart boards, natural light and flexible seating make our classrooms places where curiosity can lead. Teachers design lessons that invite questions, not just answers.',
      },
      {
        title: 'Sports Day',
        subtitle: 'Where teams are built',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=80',
        desc: 'Once a year, the whole school comes together on the field — competing, cheering and celebrating effort as much as victory. It is one of the most anticipated days of our calendar.',
      },
      {
        title: 'Annual Day',
        subtitle: 'A night to remember',
        image: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?auto=format&fit=crop&w=700&q=80',
        desc: 'Music, dance and drama take over the auditorium as students showcase a year of preparation. Parents and teachers fill the seats for one of the school\'s proudest nights.',
      },
    ]
  
    return (
      <section className="detail-page">
        <div className="detail-hero">
          <h1>Gallery</h1>
          <p>Moments from campus life, classrooms and celebrations.</p>
        </div>
  
        <div className="gallery-magazine">
          {spreads.map((spread, i) => (
            <div
              key={spread.title}
              className={i % 2 === 0 ? 'gallery-spread' : 'gallery-spread reverse'}
            >
              <div className="gallery-spread-image">
                <img src={spread.image} alt={spread.title} />
              </div>
              <div className="gallery-spread-text">
                <span className="gallery-spread-subtitle">{spread.subtitle}</span>
                <h2>{spread.title}</h2>
                <p>{spread.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default GalleryPage