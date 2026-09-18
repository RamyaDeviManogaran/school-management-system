import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function DashboardLayout({ role, userName, menuItems }) {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  return (
    <div className="dash-shell">
      <aside className={collapsed ? 'dash-sidebar collapsed' : 'dash-sidebar'}>
        <div className="dash-logo">{collapsed ? 'OS' : '🎓 Our School'}</div>
        <nav className="dash-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'dash-link active' : 'dash-link'}
            >
              <span className="dash-icon">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="dash-main">
        <header className="dash-topbar">
          <button className="dash-collapse-btn" onClick={() => setCollapsed(!collapsed)}>☰</button>
          <input className="dash-search" type="text" placeholder="Search anything..." />
          <div className="dash-topbar-right">
            <span className="dash-role-badge">{role}</span>
            <div className="dash-avatar-wrap">
              <div className="dash-avatar">👤</div>
              <span className="dash-username">{userName}</span>
            </div>
          </div>
        </header>

        <main className="dash-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout