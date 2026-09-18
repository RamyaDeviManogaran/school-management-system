import { Link } from 'react-router-dom'

function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=400&q=80',
  ]

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <div className="academics-header">
          <span className="section-label">Student Life</span>
          <h2>Learning Beyond Classrooms</h2>
        </div>
        <Link to="/gallery" className="btn-secondary-teal">View Gallery</Link>
      </div>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Student life ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery