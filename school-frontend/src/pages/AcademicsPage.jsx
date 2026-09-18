function AcademicsPage() {
    const stages = [
      { title: 'Pre-Primary', range: 'Nursery – UKG', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=300&q=80' },
      { title: 'Primary', range: 'Class I – V', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=300&q=80' },
      { title: 'Middle School', range: 'Class VI – VIII', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=300&q=80' },
      { title: 'High School', range: 'Class IX – X', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300&q=80' },
      { title: 'Higher Secondary', range: 'Class XI – XII', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=300&q=80' },
    ]
  
    const subjects = ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Second Language', 'Physical Education', 'Art & Craft']
  
    const collage = [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80',
    ]
  
    return (
      <section className="detail-page">
        <div className="detail-hero">
          <h1>Academics</h1>
          <p>A curriculum designed to challenge, inspire and prepare every learner.</p>
        </div>
  
        <div className="detail-content">
          <h2 id="overview">Academic Overview</h2>
          <p>
            Our academic program follows the CBSE curriculum from Nursery through
            Class XII, blending strong fundamentals with experiential,
            technology-integrated learning at every stage.
          </p>
  
          {/* Layout 1: three-column cards, circular photo top */}
          <h2>Stages of Learning</h2>
          <div className="stage-circle-grid">
            {stages.map((stage) => (
              <div key={stage.title} className="stage-circle-card">
                <div className="stage-circle-photo">
                  <img src={stage.image} alt={stage.title} />
                </div>
                <h3>{stage.title}</h3>
                <span className="stage-range">{stage.range}</span>
              </div>
            ))}
          </div>
  
          <h2>Subjects Offered</h2>
          <div className="subject-tags">
            {subjects.map((subject) => (
              <span key={subject} className="subject-tag">{subject}</span>
            ))}
          </div>
  
          {/* Layout 2: profile card — text left, photo right */}
          <h2 id="faculty">Experienced Faculty</h2>
          <div className="profile-card">
            <div className="profile-text">
              <h3>Guided by Educators Who Care</h3>
              <p>
                Our teachers are chosen for subject expertise and a genuine
                passion for mentoring. With ongoing training and low
                teacher-student ratios, every child gets the attention they
                need to thrive — academically and personally.
              </p>
            </div>
            <div className="profile-photo">
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80"
                alt="Teacher with students"
              />
            </div>
          </div>
  
          {/* Layout 3: offset photo collage */}
          <h2 id="methodology">Teaching Methodology</h2>
          <div className="collage-wrap">
            <div className="collage-images">
              <img src={collage[0]} alt="Classroom activity" className="collage-img collage-img-1" />
              <img src={collage[1]} alt="Group work" className="collage-img collage-img-2" />
              <img src={collage[2]} alt="Interactive learning" className="collage-img collage-img-3" />
            </div>
            <p>
              We combine traditional teaching with technology-integrated tools —
              smart boards, project work and collaborative learning — to keep
              students engaged, curious and actively involved in every lesson.
            </p>
          </div>
  
          {/* Layout 4: bold dark feature block with circular badges */}
          <h2 id="examination">Examination System</h2>
          <div className="feature-block-dark">
            <p>
              Assessments follow the CBSE pattern, tracking every student's
              progress holistically — not through a single exam, but across
              the full academic year.
            </p>
            <div className="feature-badges">
              <div className="feature-badge"><span>📝</span>Periodic Tests</div>
              <div className="feature-badge"><span>📊</span>Internal Evaluation</div>
              <div className="feature-badge"><span>🎓</span>Term-End Exams</div>
            </div>
          </div>
  
          <h2>Academic Calendar</h2>
          <p>
            The academic year runs April to March, with two main terms and a
            detailed calendar of exams, holidays and events shared each session.
          </p>
        </div>
      </section>
    )
  }
  
  export default AcademicsPage