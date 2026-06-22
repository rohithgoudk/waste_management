import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const slides = [
  {
    id: 1,
    tab: "Recycling",
    icon: "♻",
    eyebrow: "Resource Recovery",
    headline: "Turning yesterday's waste into tomorrow's raw material.",
    body: "Our advanced recycling facilities process paper, plastic, glass, and metals using AI-powered sorting lines that achieve 94% material purity — far above the industry average of 70%. Every tonne we recycle saves 1.5 tonnes of CO₂.",
    features: ["AI-assisted sorting", "94% material purity", "Door-to-door collection", "Real-time tracking app"],
    stat: { value: "94%", label: "Material Purity Rate" },
    accent: "#2d6a4f",
    bg: "slide-recycling",
  },
  {
    id: 2,
    tab: "Waste Collection",
    icon: "🚛",
    eyebrow: "Smart Logistics",
    headline: "On-time pickup, every time — optimised by route intelligence.",
    body: "We operate a fleet of 120+ GPS-tracked vehicles running dynamic routes that cut fuel use by 38%. Whether you are a household, a hospital, or a manufacturing plant, we build a schedule around your output — not the other way around.",
    features: ["120+ GPS-tracked vehicles", "Dynamic route optimisation", "Residential & industrial", "SMS / app notifications"],
    stat: { value: "38%", label: "Fuel Reduction vs Industry" },
    accent: "#1b4332",
    bg: "slide-collection",
  },
  {
    id: 3,
    tab: "Composting",
    icon: "🌱",
    eyebrow: "Organic Waste",
    headline: "Food and garden waste composted into certified organic fertilizer.",
    body: "Our in-vessel composting units process wet organic waste at scale, producing FSSAI-certified compost in 21 days. Partner farms across Telangana use our output to reduce chemical fertilizer dependence by up to 60%.",
    features: ["21-day processing cycle", "FSSAI-certified compost", "Zero odour technology", "Farm-direct supply chain"],
    stat: { value: "21", label: "Days from Waste to Compost" },
    accent: "#40916c",
    bg: "slide-composting",
  },
  {
    id: 4,
    tab: "Industrial Waste",
    icon: "🏭",
    eyebrow: "Compliance & Safety",
    headline: "Hazardous and industrial waste handled with full regulatory compliance.",
    body: "We are licensed under the Hazardous Waste Management Rules and the E-Waste Management Rules. Our industrial clients receive end-to-end documentation, manifest tracking, and an annual compliance audit — eliminating regulatory risk entirely.",
    features: ["Hazardous waste licensed", "E-waste certified", "Manifest & audit trail", "Annual compliance report"],
    stat: { value: "100%", label: "Regulatory Compliance Rate" },
    accent: "#52b788",
    bg: "slide-industrial",
  },
];

export default function Services() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);

  const goTo = (idx) => {
    if (idx === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setProgress(0);
      setAnimating(false);
    }, 380);
  };

  useEffect(() => {
    setProgress(0);
    clearInterval(progressRef.current);
    clearTimeout(timerRef.current);

    progressRef.current = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 1));
    }, 62);

    timerRef.current = setTimeout(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 6400);

    return () => {
      clearInterval(progressRef.current);
      clearTimeout(timerRef.current);
    };
  }, [active]);

  const s = slides[active];

  return (
    <main className="services-page">

      {/* HERO HEADER */}
      <section className="srv-header">
        <p className="srv-eyebrow">What We Do</p>
        <h1>Services built for a<br />circular economy.</h1>
        <p className="srv-subhead">
          Four core services. One integrated system. Zero compromise on the environment.
        </p>
        <div className="srv-header-stats">
          <div><strong>500+</strong><span>Projects</span></div>
          <div><strong>120K+</strong><span>Tons Recycled</span></div>
          <div><strong>50+</strong><span>Cities</span></div>
          <div><strong>98%</strong><span>Satisfaction</span></div>
        </div>
      </section>

      {/* SLIDE NAVIGATOR */}
      <section className="srv-slides">

        <nav className="srv-nav">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`srv-tab${i === active ? " srv-tab-active" : ""}`}
              onClick={() => goTo(i)}
              style={{ "--accent": s.accent }}
            >
              <span className="tab-icon">{s.icon}</span>
              <span className="tab-label">{s.tab}</span>
              {i === active && (
                <span
                  className="tab-bar"
                  style={{ width: `${progress}%`, background: s.accent }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className={`srv-stage ${s.bg}${animating ? " s-exit" : " s-enter"}`}>

          {/* LEFT — text */}
          <div className="srv-text">
            <p className="srv-slide-eyebrow" style={{ color: s.accent }}>
              {s.eyebrow}
            </p>
            <h2>{s.headline}</h2>
            <p className="srv-body">{s.body}</p>

            <ul className="srv-features">
              {s.features.map((f) => (
                <li key={f} style={{ "--dot": s.accent }}>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className="srv-cta"
              style={{ background: s.accent }}
              onClick={() => navigate("/404")}
            >
              Learn More →
            </button>
          </div>

          {/* RIGHT — stat panel */}
          <div className="srv-panel">
            <div className="srv-stat-card" style={{ borderColor: s.accent }}>
              <span className="srv-stat-value" style={{ color: s.accent }}>
                {s.stat.value}
              </span>
              <span className="srv-stat-label">{s.stat.label}</span>
            </div>

            <div className="srv-id-badge">
              <span className="srv-id-num">0{s.id}</span>
              <span className="srv-id-icon">{s.icon}</span>
            </div>

            <div className="srv-ring" style={{ borderColor: s.accent }} />
            <div className="srv-ring srv-ring-lg" style={{ borderColor: s.accent }} />
          </div>

        </div>

        {/* DOTS */}
        <div className="srv-dots">
          {slides.map((sl, i) => (
            <button
              key={i}
              className={`srv-dot${i === active ? " srv-dot-active" : ""}`}
              onClick={() => goTo(i)}
              style={i === active ? { background: s.accent } : {}}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </section>

      {/* PROCESS STRIP */}
      <section className="srv-process">
        <h2>How It All Connects</h2>
        <div className="srv-process-grid">
          {[
            { step: "01", title: "Schedule", desc: "Book a pickup online or via app in under 2 minutes." },
            { step: "02", title: "Collect", desc: "Our GPS-tracked fleet arrives on time, every time." },
            { step: "03", title: "Sort & Process", desc: "AI-assisted lines separate and recover every material." },
            { step: "04", title: "Report", desc: "You receive a digital impact certificate for every batch." },
          ].map((p) => (
            <div className="process-item" key={p.step}>
              <span className="process-step">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="srv-testimonials">
        <h2>What our clients say</h2>
        <div className="testi-grid">
          {[
            { quote: "Our landfill output dropped by 70% in the first quarter. The reporting dashboard is exceptional.", name: "Suresh Babu", org: "Hyderabad Municipal Corporation" },
            { quote: "Industrial compliance used to keep me up at night. Not anymore — every manifest is tracked and archived.", name: "Meena Iyer", org: "GreenTech Manufacturing, Pune" },
            { quote: "The compost they produce is genuinely better than what we were buying. Our yield improved 18%.", name: "Ravi Kiran", org: "Organic Farms Co-op, Warangal" },
          ].map((t) => (
            <div className="testi-card" key={t.name}>
              <p className="testi-quote">"{t.quote}"</p>
              <p className="testi-name">{t.name}</p>
              <p className="testi-org">{t.org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="srv-cta-section">
        <h2>Ready to transform your waste strategy?</h2>
        <p>Talk to our team and get a custom plan within 48 hours.</p>
        <div className="srv-cta-btns">
          <button className="btn-primary" onClick={() => navigate("/404")}>Schedule Pickup</button>
          <button className="btn-secondary" onClick={() => navigate("/404")}>Get a Free Audit</button>
        </div>
      </section>

    </main>
  );
}