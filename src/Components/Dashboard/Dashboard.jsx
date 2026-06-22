import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import logo from "../../assets/stacklyimg1.webp";

const projectsData = [
  { id: 1, name: "Kukatpally Zone A", client: "GHMC", type: "Municipal", status: "In Progress", progress: 72, deadline: "Aug 2025", budget: "₹42L", lead: "A. Reddy" },
  { id: 2, name: "Gachibowli IT Park", client: "TechHub Infra", type: "Commercial", status: "Scheduled", progress: 38, deadline: "Jan 2026", budget: "₹18L", lead: "M. Patel" },
  { id: 3, name: "Miyapur Composting", client: "City Council", type: "Composting", status: "Completed", progress: 100, deadline: "Mar 2025", budget: "₹65L", lead: "S. Okafor" },
  { id: 4, name: "Hitech E-Waste Drive", client: "Meridian Corp", type: "E-Waste", status: "In Progress", progress: 55, deadline: "Nov 2025", budget: "₹29L", lead: "L. Torres" },
  { id: 5, name: "Jubilee Hills Recycle", client: "RWA Jubilee", type: "Recycling", status: "Review", progress: 89, deadline: "Jun 2025", budget: "₹31L", lead: "A. Reddy" },
];

const teamMembers = [
  { name: "Aiko Reddy", role: "Operations Head", projects: 4, avatar: "AR", status: "active" },
  { name: "Marcus Patel", role: "Fleet Manager", projects: 3, avatar: "MP", status: "active" },
  { name: "Sofia Okafor", role: "Compliance Lead", projects: 5, avatar: "SO", status: "away" },
  { name: "Luis Torres", role: "Recycling Specialist", projects: 2, avatar: "LT", status: "active" },
];

const recentActivity = [
  { icon: "🚛", text: "Kukatpally Zone A — Morning route completed on time", time: "2h ago", type: "complete" },
  { icon: "♻", text: "Jubilee Hills Recycle — 4.2t material sorted today", time: "4h ago", type: "upload" },
  { icon: "✅", text: "Miyapur Composting — FSSAI certificate renewed", time: "Yesterday", type: "complete" },
  { icon: "⚠️", text: "Hitech E-Waste — Vehicle #7 maintenance due", time: "Yesterday", type: "alert" },
  { icon: "📋", text: "Gachibowli IT Park — Waste audit report filed", time: "2d ago", type: "report" },
];

const navItems = [
  { icon: "▦",  label: "Dashboard",   id: "dashboard" },
  { icon: "🚛", label: "Collections", id: "collections" },
  { icon: "♻",  label: "Recycling",   id: "recycling" },
  { icon: "🌱", label: "Composting",  id: "composting" },
  { icon: "📊", label: "Analytics",   id: "analytics" },
  { icon: "🗓", label: "Schedule",    id: "schedule" },
  { icon: "🏭", label: "Industrial",  id: "industrial" },
  { icon: "📁", label: "Reports",     id: "reports" },
  { icon: "⚙️", label: "Settings",   id: "settings" },
];

const statusColors = {
  "In Progress": "status-progress",
  "Scheduled":   "status-design",
  "Completed":   "status-complete",
  "Review":      "status-review",
};

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav]     = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => navigate("/login");

  return (
    <div className="dashboard-root">

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Sidebar ── */}
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>

        <div className="sidebar-header">
          <div className="brand">
            <div className="logo-wrap">
              <div className="logo-glow" />
              <img
                src={logo}
                alt="Stackly EcoClean"
                className="brand-logo"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="logo-fallback">♻</div>
            </div>
          </div>
          <button className="close-btn" onClick={() => setSidebarOpen(false)} aria-label="Close">✕</button>
        </div>

        {/* Live eco ticker */}
        <div className="eco-ticker">
          <span>🌍</span>
          <span className="ticker-text">120K+ tons recycled this year</span>
        </div>

        <div className="sidebar-section-label">MAIN MENU</div>
        <nav className="sidebar-nav">
          {navItems.slice(0, 6).map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? "nav-active" : ""}`}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {item.id === "collections" && <span className="nav-badge">5</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-section-label">MANAGEMENT</div>
        <nav className="sidebar-nav">
          {navItems.slice(6).map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? "nav-active" : ""}`}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Carbon meter */}
        <div className="carbon-meter">
          <div className="carbon-header">
            <span>🌿 Carbon Saved Today</span>
            <span className="carbon-val">3.2 t</span>
          </div>
          <div className="carbon-bar">
            <div className="carbon-fill" style={{ width: "64%" }} />
          </div>
          <p className="carbon-sub">64% of daily target</p>
        </div>

        <button className="logout-full-btn" onClick={handleLogout}>
          <span className="logout-icon">↪</span>
          Logout
        </button>

      </aside>

      {/* ── Main ── */}
      <main className="main-content">

        {/* Topbar */}
        <header className="topbar">
          <div className="topbar-left">
            <button className="hamburger" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
            <div className="page-title">
              <h1>Dashboard</h1>
              <p>Welcome back, James — here's your eco operations overview.</p>
            </div>
          </div>
          <div className="topbar-right">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input placeholder="Search zones, vehicles, reports…" />
            </div>
            <button className="icon-btn notif-btn" aria-label="Notifications">
              🔔
              <span className="notif-dot" />
            </button>
            <div className="topbar-avatar">JD</div>
          </div>
        </header>

        <div className="content-area">

          {/* ── Stats Row ── */}
          <section className="stats-grid">
            {[
              { icon: "🚛", label: "Active Routes",       value: "18",    delta: "+2 today",    bar: 72,  accent: true },
              { icon: "♻",  label: "Tons Recycled Today", value: "4.8t",  delta: "↑ 12%",       bar: 55,  accent: false },
              { icon: "🌱", label: "CO₂ Saved (Month)",   value: "98t",   delta: "On track",    bar: 88,  accent: false },
              { icon: "✅", label: "Completed This Year",  value: "500+",  delta: "+3 this wk",  bar: 90,  accent: false },
            ].map((s, i) => (
              <div className={`stat-card${s.accent ? " stat-accent" : ""}`} key={i}>
                <div className="stat-top">
                  <span className="stat-icon">{s.icon}</span>
                  <span className="stat-delta up">{s.delta}</span>
                </div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: `${s.bar}%` }} />
                </div>
              </div>
            ))}
          </section>

          {/* ── Projects + Activity ── */}
          <section className="mid-grid">

            <div className="card projects-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Active Collections</h2>
                  <p className="card-sub">Current zone & project overview</p>
                </div>
                <button className="btn-outline">View All</button>
              </div>
              <div className="table-wrapper">
                <table className="projects-table">
                  <thead>
                    <tr>
                      <th>Project / Zone</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Progress</th>
                      <th>Deadline</th>
                      <th>Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectsData.map((p) => (
                      <tr key={p.id}>
                        <td>
                          <div className="proj-name">{p.name}</div>
                          <div className="proj-client">{p.client} · {p.lead}</div>
                        </td>
                        <td><span className="type-tag">{p.type}</span></td>
                        <td><span className={`status-badge ${statusColors[p.status]}`}>{p.status}</span></td>
                        <td>
                          <div className="progress-wrap">
                            <div className="progress-bar">
                              <div className="progress-fill" style={{ width: `${p.progress}%` }} />
                            </div>
                            <span className="progress-pct">{p.progress}%</span>
                          </div>
                        </td>
                        <td className="deadline-col">{p.deadline}</td>
                        <td className="budget-col">{p.budget}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card activity-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Recent Activity</h2>
                  <p className="card-sub">Live fleet & ops updates</p>
                </div>
              </div>
              <ul className="activity-list">
                {recentActivity.map((a, i) => (
                  <li key={i} className={`activity-item act-${a.type}`}>
                    <span className="act-icon">{a.icon}</span>
                    <div className="act-body">
                      <p className="act-text">{a.text}</p>
                      <span className="act-time">{a.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </section>

          {/* ── Team + Milestones + Donut ── */}
          <section className="bottom-grid">

            <div className="card team-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Team</h2>
                  <p className="card-sub">Field & operations crew</p>
                </div>
                <button className="btn-outline">Manage</button>
              </div>
              <ul className="team-list">
                {teamMembers.map((m, i) => (
                  <li key={i} className="team-item">
                    <div className="member-avatar">
                      {m.avatar}
                      <span className={`online-dot dot-${m.status}`} />
                    </div>
                    <div className="member-info">
                      <div className="member-name">{m.name}</div>
                      <div className="member-role">{m.role}</div>
                    </div>
                    <div className="member-projects">
                      <span className="proj-count">{m.projects}</span>
                      <span className="proj-label">zones</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card milestone-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Upcoming Milestones</h2>
                  <p className="card-sub">Next 60 days</p>
                </div>
              </div>
              <ul className="milestone-list">
                {[
                  { project: "Jubilee Hills Recycle", event: "Final Audit",           date: "Jun 28", done: false, urgent: true },
                  { project: "Kukatpally Zone A",     event: "Fleet Review",           date: "Jul 5",  done: false, urgent: false },
                  { project: "Gachibowli IT Park",    event: "Client Walkthrough",     date: "Jul 14", done: false, urgent: false },
                  { project: "Hitech E-Waste Drive",  event: "Permit Renewal",         date: "Jul 22", done: false, urgent: false },
                  { project: "Miyapur Composting",    event: "Handover to City Corp",  date: "Aug 1",  done: true,  urgent: false },
                ].map((m, i) => (
                  <li key={i} className={`milestone-item ${m.done ? "ms-done" : ""} ${m.urgent ? "ms-urgent" : ""}`}>
                    <div className="ms-date">
                      <span>{m.date.split(" ")[0]}</span>
                      <span>{m.date.split(" ")[1]}</span>
                    </div>
                    <div className="ms-line"><div className="ms-dot" /></div>
                    <div className="ms-body">
                      <div className="ms-event">{m.event}</div>
                      <div className="ms-project">{m.project}</div>
                    </div>
                    {m.urgent && <span className="ms-tag">Urgent</span>}
                    {m.done   && <span className="ms-tag ms-done-tag">Done</span>}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card insights-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Waste Mix</h2>
                  <p className="card-sub">By category this month</p>
                </div>
              </div>
              <div className="donut-chart">
                <svg viewBox="0 0 120 120" className="donut-svg">
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#1b4332" strokeWidth="16"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#52b788" strokeWidth="16"
                    strokeDasharray="90 212" strokeDashoffset="0" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#2d6a4f" strokeWidth="16"
                    strokeDasharray="60 212" strokeDashoffset="-90" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#74c69d" strokeWidth="16"
                    strokeDasharray="40 212" strokeDashoffset="-150" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#b7e4c7" strokeWidth="16"
                    strokeDasharray="22 212" strokeDashoffset="-190" strokeLinecap="round"/>
                  <text x="60" y="56" textAnchor="middle" className="donut-num">120K</text>
                  <text x="60" y="68" textAnchor="middle" className="donut-label">Tons / yr</text>
                </svg>
              </div>
              <ul className="legend-list">
                {[
                  { color: "#52b788", label: "Recyclables", count: "42K t" },
                  { color: "#2d6a4f", label: "Organic",     count: "28K t" },
                  { color: "#74c69d", label: "E-Waste",     count: "18K t" },
                  { color: "#b7e4c7", label: "Industrial",  count: "32K t" },
                ].map((l, i) => (
                  <li key={i} className="legend-item">
                    <span className="legend-dot" style={{ background: l.color }} />
                    <span className="legend-label">{l.label}</span>
                    <span className="legend-count">{l.count}</span>
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