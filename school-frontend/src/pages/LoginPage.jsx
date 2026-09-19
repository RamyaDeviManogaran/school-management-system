import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [mode, setMode] = useState('login')
  const [role, setRole] = useState('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (mode === 'login') {
      try {
        const response = await fetch('http://localhost:8080/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        })
        const data = await response.json()

        if (data.success) {
          // Route based on the REAL role returned from the database
          const userRole = data.role.toLowerCase()
          if (userRole === 'admin') navigate('/admin')
          if (userRole === 'teacher') navigate('/teacher')
          if (userRole === 'student') navigate('/student')
        } else {
          setError(data.message || 'Login failed')
        }
      } catch (err) {
        setError('Could not connect to the server')
      }
    } else {
      // Register mode
      try {
        const response = await fetch('http://localhost:8080/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, email, password, role: role.toUpperCase() }),
        })

        if (response.ok) {
          alert('Registration successful! Please log in.')
          setMode('login')
        } else {
          setError('Registration failed')
        }
      } catch (err) {
        setError('Could not connect to the server')
      }
    }
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>{mode === 'login' ? 'Welcome Back' : 'Create Your Account'}</h1>
        <p className="auth-subtext">
          {mode === 'login'
            ? 'Log in to access your dashboard, attendance and marks.'
            : 'Register as a student, teacher or admin to get started.'}
        </p>

        <div className="auth-tabs">
          <button className={mode === 'login' ? 'auth-tab active' : 'auth-tab'} onClick={() => setMode('login')}>Login</button>
          <button className={mode === 'register' ? 'auth-tab active' : 'auth-tab'} onClick={() => setMode('register')}>Register</button>
        </div>

        <div className="role-select">
          <button className={role === 'student' ? 'role-chip active' : 'role-chip'} onClick={() => setRole('student')}>🎓 Student</button>
          <button className={role === 'teacher' ? 'role-chip active' : 'role-chip'} onClick={() => setRole('teacher')}>👩‍🏫 Teacher</button>
          <button className={role === 'admin' ? 'role-chip active' : 'role-chip'} onClick={() => setRole('admin')}>🛡️ Admin</button>
        </div>

        {error && <p style={{ color: '#C94040', fontSize: '13px', marginBottom: '12px' }}>{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === 'register' && (
            <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          )}
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit" className="btn-primary auth-submit">
            {mode === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="auth-divider"><span>or continue with</span></div>

        <button className="google-btn">
          <span className="google-icon">G</span>
          Continue with Google
        </button>

        <p className="auth-switch">
          {mode === 'login' ? (
            <>Don't have an account? <button onClick={() => setMode('register')}>Register</button></>
          ) : (
            <>Already have an account? <button onClick={() => setMode('login')}>Login</button></>
          )}
        </p>
      </div>
    </section>
  )
}

export default LoginPage