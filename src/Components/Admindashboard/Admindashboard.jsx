import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admindashboard.css";
import logo from "../../assets/stacklyimg1.webp";

const usersData = [
  { id: 1, name: "Aiko Reddy",    email: "a.reddy@ecowaste.in",   role: "Operations Head",      status: "Active",   lastLogin: "Today, 9:14 AM",  zones: 4, avatar: "AR" },
  { id: 2, name: "Marcus Patel",  email: "m.patel@ecowaste.in",   role: "Fleet Manager",         status: "Active",   lastLogin: "Today, 8:02 AM",  zones: 3, avatar: "MP" },
  { id: 3, name: "Sofia Okafor",  email: "s.okafor@ecowaste.in",  role: "Compliance Lead",       status: "Away",     lastLogin: "Yesterday",       zones: 5, avatar: "SO" },
  { id: 4, name: "Luis Torres",   email: "l.torres@ecowaste.in",  role: "Recycling Specialist",  status: "Active",   lastLogin: "Today, 11:30 AM", zones: 2, avatar: "LT" },
  { id: 5, name: "Priya Nair",    email: "p.nair@ecowaste.in",    role: "Field Supervisor",      status: "Inactive", lastLogin: "3 days ago",      zones: 1, avatar: "PN" },
];

const auditLog = [
  { icon: "🔐", text: "Role changed — Marcus Patel promoted to Fleet Manager", time: "1h ago",   type: "role" },
  { icon: "👤", text: "New user invited — Priya Nair (Field Supervisor)",       time: "3h ago",   type: "user" },
  { icon: "🗑️", text: "Zone removed — Old Secunderabad route archived by Admin", time: "5h ago",  type: "delete" },
  { icon: "⚠️", text: "Failed login attempt — unknown IP 203.0.113.45",         time: "Yesterday", type: "alert" },
  { icon: "♻",  text: "Storage limit increased to 2TB by Super Admin",          time: "2d ago",    type: "system" },
];

const systemHealth = [
  { label: "API Uptime",       value: "99.97%",    status: "healthy" },
  { label: "Fleet Online",     value: "112 / 120",  status: "warning" },
  { label: "DB Response",      value: "38 ms",      status: "healthy" },
  { label: "Active Sessions",  value: "24",         status: "healthy" },
];

const navItems = [
  { icon: "▦",  label: "Overview",    id: "overview" },
  { icon: "👥", label: "Users",       id: "users" },
  { icon: "🔐", label: "Permissions", id: "permissions" },
  { icon: "📋", label: "Audit Log",   id: "audit" },
  { icon: "📊", label: "Analytics",   id: "analytics" },
  { icon: "🗓", label: "Activity",    id: "activity" },
  { icon: "💳", label: "Billing",     id: "billing" },
  { icon: "📁", label: "Storage",     id: "storage" },
  { icon: "⚙️", label: "Settings",   id: "settings" },
];

const roleColors = {
  "Operations Head":     "role-head",
  "Fleet Manager":       "role-fleet",
  "Compliance Lead":     "role-compliance",
  "Recycling Specialist":"role-recycle",
  "Field Supervisor":    "role-field",
};

const statusMap = {
  "Active":   "ustatus-active",
  "Away":     "ustatus-away",
  "Inactive": "ustatus-inactive",
};

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav]     = useState("overview");
  const navigate = useNavigate();

  const handleLogout = () => navigate("/signup");

  return (
    <div className="admin-root">
      {sidebarOpen && (
        <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Sidebar ── */}
      <aside className={`admin-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>

        <div className="admin-sidebar-header">
          <div className="admin-brand">
            <div className="admin-logo-wrap">
              <div className="admin-logo-glow" />
              <img
                src={logo}
                alt="Stackly EcoClean"
                className="admin-brand-logo"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="admin-logo-fallback">♻</div>
            </div>
          </div>
          <button className="admin-close-btn" onClick={() => setSidebarOpen(false)}>✕</button>
        </div>

        {/* Admin badge */}
        <div className="admin-role-banner">
          <span className="role-dot" />
          <span>Super Admin Console</span>
        </div>

        <div className="admin-section-label">CONSOLE</div>
        <nav className="admin-nav">
          {navItems.slice(0, 6).map((item) => (
            <button
              key={item.id}
              className={`admin-nav-item ${activeNav === item.id ? "admin-nav-active" : ""}`}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              <span className="admin-nav-label">{item.label}</span>
              {item.id === "users" && <span className="admin-nav-badge">24</span>}
              {item.id === "audit" && <span className="admin-nav-badge alert-badge">3</span>}
            </button>
          ))}
        </nav>

        <div className="admin-section-label">SYSTEM</div>
        <nav className="admin-nav">
          {navItems.slice(6).map((item) => (
            <button
              key={item.id}
              className={`admin-nav-item ${activeNav === item.id ? "admin-nav-active" : ""}`}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              <span className="admin-nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* System Health Panel */}
        <div className="admin-health-panel">
          <div className="health-panel-title">⚡ System Health</div>
          {systemHealth.map((h, i) => (
            <div key={i} className="health-row">
              <span className="health-label">{h.label}</span>
              <span className={`health-value hv-${h.status}`}>{h.value}</span>
            </div>
          ))}
        </div>

        <button className="admin-logout-btn" onClick={handleLogout}>
          <span className="admin-logout-icon">↪</span>
          Logout
        </button>

      </aside>

      {/* ── Main ── */}
      <main className="admin-main">

        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <button className="admin-hamburger" onClick={() => setSidebarOpen(true)}>
              <span /><span /><span />
            </button>
            <div className="admin-page-title">
              <h1>Admin Overview</h1>
              <p>Platform control — full eco-ops visibility.</p>
            </div>
          </div>
          <div className="admin-topbar-right">
            <div className="admin-search-box">
              <span className="admin-search-icon">🔍</span>
              <input placeholder="Search users, zones, logs…" />
            </div>
            <button className="admin-icon-btn">
              🔔
              <span className="admin-notif-dot" />
            </button>
            <div className="admin-role-chip">Super Admin</div>
            <div className="admin-topbar-avatar">JD</div>
          </div>
        </header>

        <div className="admin-content">

          {/* ── Stats ── */}
          <section className="admin-stats-grid">
            {[
              { icon: "👥", label: "Total Staff",        value: "24",    delta: "+3 this month", bar: 68, accent: true, down: false },
              { icon: "✅", label: "Active Accounts",    value: "21",    delta: "18 online now",  bar: 87, accent: false, down: false },
              { icon: "🌿", label: "CO₂ Saved (Month)",  value: "98 t",  delta: "On target",      bar: 75, accent: false, down: false },
              { icon: "⚠️", label: "Open Alerts",        value: "3",     delta: "Needs review",   bar: 20, accent: false, down: true },
            ].map((s, i) => (
              <div className={`admin-stat-card${s.accent ? " admin-stat-accent" : ""}`} key={i}>
                <div className="admin-stat-top">
                  <span className="admin-stat-icon">{s.icon}</span>
                  <span className={`admin-stat-delta${s.down ? " down" : ""}`}>{s.delta}</span>
                </div>
                <div className="admin-stat-value">{s.value}</div>
                <div className="admin-stat-label">{s.label}</div>
                <div className="admin-stat-bar">
                  <div className={`admin-stat-fill${s.down ? " alert-fill" : ""}`} style={{ width: `${s.bar}%` }} />
                </div>
              </div>
            ))}
          </section>

          {/* ── Users Table + Audit ── */}
          <section className="admin-mid-grid">

            <div className="admin-card admin-users-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Staff Management</h2>
                  <p className="admin-card-sub">All platform accounts</p>
                </div>
                <button className="admin-btn-outline">+ Invite Staff</button>
              </div>
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Last Login</th>
                      <th>Zones</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersData.map((u) => (
                      <tr key={u.id}>
                        <td>
                          <div className="admin-user-row">
                            <div className="admin-table-avatar">{u.avatar}</div>
                            <div>
                              <div className="admin-uname">{u.name}</div>
                              <div className="admin-uemail">{u.email}</div>
                            </div>
                          </div>
                        </td>
                        <td><span className={`admin-role-badge ${roleColors[u.role]}`}>{u.role}</span></td>
                        <td><span className={`admin-ustatus ${statusMap[u.status]}`}>{u.status}</span></td>
                        <td className="admin-login-col">{u.lastLogin}</td>
                        <td className="admin-proj-col">{u.zones}</td>
                        <td>
                          <div className="admin-actions">
                            <button className="admin-action-btn" title="Edit">✏️</button>
                            <button className="admin-action-btn danger" title="Remove">🗑️</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="admin-card admin-audit-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Audit Log</h2>
                  <p className="admin-card-sub">Recent admin actions</p>
                </div>
              </div>
              <ul className="admin-audit-list">
                {auditLog.map((a, i) => (
                  <li key={i} className={`admin-audit-item audit-${a.type}`}>
                    <span className="admin-audit-icon">{a.icon}</span>
                    <div className="admin-audit-body">
                      <p className="admin-audit-text">{a.text}</p>
                      <span className="admin-audit-time">{a.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </section>

          {/* ── Bottom ── */}
          <section className="admin-bottom-grid">

            <div className="admin-card admin-perms-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Role Permissions</h2>
                  <p className="admin-card-sub">Access matrix</p>
                </div>
                <button className="admin-btn-outline">Edit Roles</button>
              </div>
              <div className="admin-perms-body">
                {[
                  { role: "Super Admin",         create: true,  edit: true,  delete: true,  billing: true },
                  { role: "Operations Head",      create: true,  edit: true,  delete: false, billing: false },
                  { role: "Compliance Lead",      create: true,  edit: true,  delete: false, billing: false },
                  { role: "Fleet Manager",        create: true,  edit: false, delete: false, billing: false },
                  { role: "Field Supervisor",     create: false, edit: false, delete: false, billing: false },
                ].map((r, i) => (
                  <div key={i} className="admin-perm-row">
                    <span className="admin-perm-role">{r.role}</span>
                    <div className="admin-perm-dots">
                      <span className={`perm-dot ${r.create  ? "perm-on" : "perm-off"}`} title="Create">C</span>
                      <span className={`perm-dot ${r.edit    ? "perm-on" : "perm-off"}`} title="Edit">E</span>
                      <span className={`perm-dot ${r.delete  ? "perm-on" : "perm-off"}`} title="Delete">D</span>
                      <span className={`perm-dot ${r.billing ? "perm-on" : "perm-off"}`} title="Billing">$</span>
                    </div>
                  </div>
                ))}
                <div className="admin-perm-legend">
                  <span className="perm-dot perm-on" /> Allowed &nbsp;
                  <span className="perm-dot perm-off" /> Restricted
                </div>
              </div>
            </div>

            <div className="admin-card admin-billing-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Billing Summary</h2>
                  <p className="admin-card-sub">Current cycle</p>
                </div>
              </div>
              <div className="admin-billing-body">
                {[
                  { label: "Plan",          value: "Enterprise" },
                  { label: "Seats Used",    value: "21 / 30" },
                  { label: "Next Renewal",  value: "Jul 1, 2026" },
                  { label: "Monthly Total", value: "₹6.2L" },
                  { label: "Storage",       value: "1.4 / 2 TB" },
                  { label: "Overage",       value: "None" },
                ].map((b, i) => (
                  <div key={i} className="admin-billing-row">
                    <span className="admin-billing-label">{b.label}</span>
                    <span className="admin-billing-value">{b.value}</span>
                  </div>
                ))}
                <button className="admin-billing-cta">Manage Subscription</button>
              </div>
            </div>

            <div className="admin-card admin-mix-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Staff Roles</h2>
                  <p className="admin-card-sub">By permission level</p>
                </div>
              </div>
              <div className="admin-donut-chart">
                <svg viewBox="0 0 120 120" className="admin-donut-svg">
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#1b4332" strokeWidth="16"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#52b788" strokeWidth="16"
                    strokeDasharray="70 212" strokeDashoffset="0" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#2d6a4f" strokeWidth="16"
                    strokeDasharray="50 212" strokeDashoffset="-70" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#74c69d" strokeWidth="16"
                    strokeDasharray="45 212" strokeDashoffset="-120" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#b7e4c7" strokeWidth="16"
                    strokeDasharray="30 212" strokeDashoffset="-165" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#d8f3dc" strokeWidth="16"
                    strokeDasharray="17 212" strokeDashoffset="-195" strokeLinecap="round"/>
                  <text x="60" y="56" textAnchor="middle" className="admin-donut-num">24</text>
                  <text x="60" y="68" textAnchor="middle" className="admin-donut-label">Staff</text>
                </svg>
              </div>
              <ul className="admin-legend-list">
                {[
                  { color: "#52b788", label: "Fleet Manager",      count: 7 },
                  { color: "#2d6a4f", label: "Ops Head",           count: 6 },
                  { color: "#74c69d", label: "Compliance Lead",    count: 5 },
                  { color: "#b7e4c7", label: "Recycling Spec.",    count: 4 },
                  { color: "#d8f3dc", label: "Field Supervisor",   count: 2 },
                ].map((l, i) => (
                  <li key={i} className="admin-legend-item">
                    <span className="admin-legend-dot" style={{ background: l.color }} />
                    <span className="admin-legend-label">{l.label}</span>
                    <span className="admin-legend-count">{l.count}</span>
                  </li>
                ))}
              </ul>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}