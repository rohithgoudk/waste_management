import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Process.css";

const slides = [
  {
    id: 1,
    tab: "Collection",
    icon: "🚛",
    step: "01",
    eyebrow: "Step One",
    headline: "We come to you — every pickup scheduled around your life, not ours.",
    body: "Our GPS-tracked fleet of 120+ vehicles covers residential neighbourhoods, commercial districts, and industrial zones. Smart route algorithms cut travel time by 38%, so collections are punctual, fuel-efficient, and emission-reduced. Residents get an SMS 30 minutes before arrival.",
    points: [
      "GPS-tracked fleet of 120+ vehicles",
      "SMS alert 30 min before pickup",
      "Residential, commercial & industrial",
      "Dynamic route optimisation",
    ],
    stat: { value: "120+", label: "Vehicles on the road daily" },
    accent: "#2d6a4f",
    bg: "proc-bg-collection",
  },
  {
    id: 2,
    tab: "Sorting",
    icon: "🔬",
    step: "02",
    eyebrow: "Step Two",
    headline: "AI-assisted sorting lines that hit 94% material purity — every batch.",
    body: "Collected waste enters our 3-stage sorting facility: manual pre-sort removes oversized items, an optical scanner identifies material types at 1,200 items per minute, and a final quality-check line ensures purity before materials move downstream. Nothing goes to landfill that can be recovered.",
    points: [
      "Optical scanner: 1,200 items/min",
      "3-stage sorting workflow",
      "94% material purity achieved",
      "Zero-landfill policy for sortables",
    ],
    stat: { value: "94%", label: "Material purity rate" },
    accent: "#1b4332",
    bg: "proc-bg-sorting",
  },
  {
    id: 3,
    tab: "Recycling",
    icon: "♻",
    step: "03",
    eyebrow: "Step Three",
    headline: "Sorted materials are processed and returned to the supply chain as new raw material.",
    body: "Paper, plastic, glass, and metal each follow a dedicated processing line. We partner with 40+ manufacturers who use our recovered materials as primary feedstock, eliminating virgin resource extraction. Every tonne processed here saves an average of 1.5 tonnes of CO₂.",
    points: [
      "Dedicated lines per material type",
      "40+ manufacturer partnerships",
      "1.5 t CO₂ saved per tonne processed",
      "Monthly material-flow reports",
    ],
    stat: { value: "1.5t", label: "CO₂ saved per tonne processed" },
    accent: "#40916c",
    bg: "proc-bg-recycling",
  },
  {
    id: 4,
    tab: "Recovery",
    icon: "🌱",
    step: "04",
    eyebrow: "Step Four",
    headline: "What cannot be recycled is recovered as energy or certified compost — nothing wasted.",
    body: "Residual organics go through our in-vessel composting units and emerge as FSSAI-certified compost in 21 days. Non-recyclable combustibles feed our waste-to-energy partner plants. At the end of every cycle, you receive a digital impact certificate showing exactly what became of your waste.",
    points: [
      "21-day in-vessel composting",
      "FSSAI-certified compost output",
      "Waste-to-energy for residuals",
      "Digital impact certificate issued",
    ],
    stat: { value: "21", label: "Days from waste to certified compost" },
    accent: "#52b788",
    bg: "proc-bg-recovery",
  },
];

export default function Process() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const goTo = (idx) => {
    if (idx === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 380);
  };


  const s = slides[active];

  return (
    <main className="process-page">

      {/* HERO HEADER */}
      <section className="proc-header">
        <p className="proc-eyebrow-top">How It Works</p>
        <h1>Four steps. Nothing wasted.<br />Everything recovered.</h1>
        <p className="proc-subhead">
          A transparent, end-to-end recycling process — from your doorstep
          to verified material recovery, tracked at every stage.
        </p>
        <div className="proc-header-pills">
          <span>🚛 Collect</span>
          <span className="pill-arrow">→</span>
          <span>🔬 Sort</span>
          <span className="pill-arrow">→</span>
          <span>♻ Recycle</span>
          <span className="pill-arrow">→</span>
          <span>🌱 Recover</span>
        </div>
      </section>

      {/* SLIDE SECTION */}
      <section className="proc-slides">

        {/* Vertical step sidebar */}
        <aside className="proc-sidebar">
          {slides.map((sl, i) => (
            <button
              key={sl.id}
              className={`proc-step-btn${i === active ? " proc-step-active" : ""}`}
              onClick={() => goTo(i)}
              style={{ "--accent": sl.accent }}
            >
              <span className="psb-num">{sl.step}</span>
              <span className="psb-label">{sl.tab}</span>

            </button>
          ))}
          <div className="proc-sidebar-line" />
        </aside>

        {/* Slide stage */}
        <div className={`proc-stage ${s.bg}${animating ? " p-exit" : " p-enter"}`}>

          {/* Text block */}
          <div className="proc-text">
            <p className="proc-slide-eyebrow" style={{ color: s.accent }}>
              {s.eyebrow} — {s.tab}
            </p>
            <h2>{s.headline}</h2>
            <p className="proc-body">{s.body}</p>

            <ul className="proc-points">
              {s.points.map((pt) => (
                <li key={pt} style={{ "--dot": s.accent }}>{pt}</li>
              ))}
            </ul>
          </div>

          {/* Visual panel */}
          <div className="proc-visual">
            <div className="proc-big-icon">{s.icon}</div>

            <div className="proc-stat-box" style={{ borderColor: s.accent }}>
              <span className="proc-stat-val" style={{ color: s.accent }}>
                {s.stat.value}
              </span>
              <span className="proc-stat-lbl">{s.stat.label}</span>
            </div>

            <div
              className="proc-step-badge"
              style={{ background: s.accent }}
            >
              {s.step}
            </div>

            <div className="proc-ring" style={{ borderColor: s.accent }} />
            <div className="proc-ring proc-ring-lg" style={{ borderColor: s.accent }} />
          </div>

        </div>

      </section>

      {/* CONNECTOR — visual flow between steps */}
      <section className="proc-flow">
        <h2>The full cycle at a glance</h2>
        <div className="flow-track">
          {slides.map((sl, i) => (
            <div className="flow-node" key={sl.id}>
              <div
                className="flow-circle"
                style={{ background: sl.accent }}
                onClick={() => goTo(i)}
              >
                {sl.icon}
              </div>
              <p className="flow-label">{sl.tab}</p>
              {i < slides.length - 1 && (
                <div className="flow-arrow" style={{ background: sl.accent }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="proc-stats">
        {[
          { val: "120+", label: "Vehicles deployed" },
          { val: "94%", label: "Material purity" },
          { val: "120K+", label: "Tons recovered yearly" },
          { val: "21 days", label: "Waste to compost" },
        ].map((st) => (
          <div className="proc-stat-card" key={st.label}>
            <h3>{st.val}</h3>
            <p>{st.label}</p>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="proc-faq">
        <h2>Common questions</h2>
        <div className="faq-grid">
          {[
            { q: "How do I schedule my first pickup?", a: "Book online or via our app in under 2 minutes. We confirm within the hour and send a vehicle ETA the night before." },
            { q: "What happens to materials that can't be recycled?", a: "Non-recyclable combustibles go to certified waste-to-energy plants. Organics are composted. Landfill is our last resort, used for under 2% of intake." },
            { q: "Do I receive proof of recycling?", a: "Yes — every client receives a digital impact certificate after each collection, showing material breakdown and CO₂ offset equivalent." },
            { q: "Can industries with hazardous waste use your process?", a: "Absolutely. We hold licences under the Hazardous Waste Management Rules and assign a dedicated compliance officer to each industrial client." },
          ].map((item) => (
            <div className="faq-card" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="proc-cta">
        <h2>See the process work for your organisation.</h2>
        <p>Book a free site assessment and we'll map a custom collection and recovery plan within 48 hours.</p>
        <div className="proc-cta-btns">
          <button className="btn-primary" onClick={() => navigate("/404")}>Schedule Pickup</button>
          <button className="btn-outline" onClick={() => navigate("/404")}>Request Site Audit</button>
        </div>
      </section>

    </main>
  );
}