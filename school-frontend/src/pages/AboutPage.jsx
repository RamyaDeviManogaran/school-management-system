function AboutPage() {
    const values = [
      { icon: '🤝', title: 'Integrity', desc: 'Doing the right thing, even when no one is watching.' },
      { icon: '💙', title: 'Respect', desc: 'Valuing every individual and their unique journey.' },
      { icon: '🔍', title: 'Curiosity', desc: 'Encouraging questions and a genuine love of learning.' },
      { icon: '🌟', title: 'Excellence', desc: 'Striving for our best in everything we pursue.' },
      { icon: '🤲', title: 'Community', desc: 'Growing together through collaboration and care.' },
    ]
  
    return (
      <section className="detail-page">
        <div className="detail-hero">
          <h1>About Our School</h1>
          <p>Building character, curiosity and excellence since day one.</p>
        </div>
  
        {/* Split Screen Layout: image + intro text */}
        <div className="split-layout">
          <div className="split-image">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
              alt="Our School Campus"
            />
          </div>
          <div className="split-text">
            <h2>Our Story</h2>
            <p>
              Founded over two decades ago, Our School began with a handful
              of classrooms and a clear purpose. Since then, we've grown
              into a trusted institution known for academic rigor paired
              with genuine care for every child's growth.
            </p>
            <p>
              We blend academic excellence with character building,
              preparing confident, compassionate students ready for
              whatever comes next.
            </p>
          </div>
        </div>
  
        <div className="detail-content">
          {/* Card/Block Layout: Vision + Mission side by side */}
          <div className="block-grid-2">
            <div className="block-card">
              <h3>Our Vision</h3>
              <p>
                To be a leading institution recognized not just for
                academics, but for shaping thoughtful, responsible global
                citizens equipped for the future.
              </p>
            </div>
            <div className="block-card">
              <h3>Our Mission</h3>
              <p>
                To create a learning environment where curiosity is
                encouraged, diversity is celebrated, and every child feels
                supported to do their best.
              </p>
            </div>
          </div>
  
          {/* Card/Block Layout: Our Values */}
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
  
          {/* Featured Layout: Principal's Message */}
          <div className="featured-block">
            <h2>Principal's Message</h2>
            <p>
              "Every child who walks through our doors carries unique
              potential. Our role is to nurture that potential with
              patience, purpose and genuine care — helping each student
              discover not just what they can achieve, but who they can
              become."
            </p>
          </div>
  
          <h2>Achievements & Awards</h2>
          <p>
            Our students have consistently excelled in academics, sports
            and cultural competitions at district, state and national
            levels. We've also been recognized for excellence in
            education and infrastructure by multiple education bodies.
          </p>
  
          <div className="detail-stats">
            <div className="stat"><h3>CBSE</h3><p>Affiliation</p></div>
            <div className="stat"><h3>1:20</h3><p>Teacher Ratio</p></div>
            <div className="stat"><h3>20+</h3><p>Years of Excellence</p></div>
            <div className="stat"><h3>100%</h3><p>Commitment</p></div>
          </div>
        </div>
      </section>
    )
  }
  
  export default AboutPage