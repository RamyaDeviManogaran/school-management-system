import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [mode, setMode] = useState('login')
  const [role, setRole] = useState('student')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Dummy login — routes straight to the matching dashboard.
    // Will be replaced with a real auth check once the backend is connected.
    if (role === 'student') navigate('/student')
    if (role === 'teacher') navigate('/teacher')
    if (role === 'admin') navigate('/admin')
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

        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === 'register' && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          {mode === 'register' && <input type="password" placeholder="Confirm Password" required />}

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