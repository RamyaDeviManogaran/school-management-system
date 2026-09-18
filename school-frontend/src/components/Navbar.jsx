import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Academics' },
    { id: 'departments', label: 'Departments' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'events', label: 'Events' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header>
      <nav>
        <div>
          <h2>Our School</h2>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {links.map((link) => (
            <Link
              key={link.id}
              to={`/#${link.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/admission-form" onClick={() => setMenuOpen(false)}>
            Admissions
          </Link>
          <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>
  Login
</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar