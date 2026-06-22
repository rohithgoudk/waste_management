import { useState, useEffect, useRef } from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    label: "Our Story",
    eyebrow: "Since 2008",
    headline: "Born from a belief that waste is a resource waiting to be reclaimed.",
    body: "What started as a small composting initiative in Hyderabad grew into one of India's most trusted environmental services companies. Sixteen years, a dozen cities, and a single conviction — every kilogram of waste can become something valuable again.",
    stat: { value: "16", unit: "yrs", caption: "of sustainable impact" },
    accent: "#2d6a4f",
    bg: "slide-bg-story",
  },
  {
    id: 2,
    label: "Our Mission",
    eyebrow: "Why We Exist",
    headline: "Close the loop between waste and worth — for every community we serve.",
    body: "We measure success not in tonnage processed but in landfill diverted, carbon avoided, and livelihoods created. Our mission is circular by design: collect, recover, return. Nothing leaves our system without a second life.",
    stat: { value: "0", unit: "landfill", caption: "target by 2030" },
    accent: "#1b4332",
    bg: "slide-bg-mission",
  },
  {
    id: 3,
    label: "Our Expertise",
    eyebrow: "What We Do Best",
    headline: "End-to-end waste infrastructure — from your doorstep to the material exchange.",
    body: "We operate across the full value chain: smart route-optimised collection, AI-assisted sorting, composting at scale, and a materials exchange that connects recovered resources directly with manufacturers.",
    stat: { value: "120K+", unit: "tons", caption: "recovered annually" },
    accent: "#40916c",
    bg: "slide-bg-expertise",
  },
  {
    id: 4,
    label: "Our Impact",
    eyebrow: "The Numbers",
    headline: "Real metrics, publicly tracked, never greenwashed.",
    body: "We publish an annual impact report and let third parties audit every figure. 500+ projects, 50+ cities, 98% client retention, and a growing network of 3,200 waste-sector workers earning a living wage through our supply chain.",
    stat: { value: "3.2K", unit: "jobs", caption: "created in the waste sector" },
    accent: "#52b788",
    bg: "slide-bg-impact",
  },
];

export default function About() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);

  const navigate=useNavigate()
  const goTo = (idx) => {
    if (idx === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setProgress(0);
      setAnimating(false);
    }, 400);
  };

  useEffect(() => {
    setProgress(0);
    clearInterval(progressRef.current);
    clearTimeout(timerRef.current);

    progressRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressRef.current);
          return 100;
        }
        return p + 1;
      });
    }, 60);

    timerRef.current = setTimeout(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 6200);

    return () => {
      clearInterval(progressRef.current);
      clearTimeout(timerRef.current);
    };
  }, [active]);

  const slide = slides[active];

  return (
    <main className="about-page">

      {/* PAGE HEADER */}
      <section className="about-header">
        <p className="about-eyebrow">About EcoWaste</p>
        <h1>Waste is not the end.<br />It's the beginning.</h1>
        <p className="about-subhead">
          We are an environmental services company built on the idea that every city can be cleaner,
          every material can be recovered, and every community deserves a healthier tomorrow.
        </p>
      </section>

      {/* SLIDE TABS */}
      <section className="about-slides">

        <nav className="slide-nav" aria-label="About sections">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`slide-tab${i === active ? " active" : ""}`}
              onClick={() => goTo(i)}
              style={{ "--accent": s.accent }}
            >
              {s.label}
              {i === active && (
                <span
                  className="tab-progress"
                  style={{ width: `${progress}%`, background: s.accent }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className={`slide-stage ${slide.bg}${animating ? " slide-exit" : " slide-enter"}`}>

          <div className="slide-content">
            <p className="slide-eyebrow" style={{ color: slide.accent }}>
              {slide.eyebrow}
            </p>
            <h2 className="slide-headline">{slide.headline}</h2>
            <p className="slide-body">{slide.body}</p>

            <div className="slide-stat" style={{ borderColor: slide.accent }}>
              <span className="stat-value" style={{ color: slide.accent }}>
                {slide.stat.value}
              </span>
              <span className="stat-unit">{slide.stat.unit}</span>
              <span className="stat-caption">{slide.stat.caption}</span>
            </div>
          </div>

          <div className="slide-visual">
            <div className="slide-number" style={{ color: slide.accent }}>
              0{slide.id}
            </div>
            <div className="slide-ring" style={{ borderColor: slide.accent }} />
            <div className="slide-ring slide-ring-2" style={{ borderColor: slide.accent }} />
          </div>

        </div>

        <div className="slide-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot${i === active ? " dot-active" : ""}`}
              onClick={() => goTo(i)}
              style={i === active ? { background: slide.accent } : {}}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </section>

      {/* TEAM STRIP */}
      <section className="about-team">
        <h2>The people behind the mission</h2>
        <div className="team-grid">
          {[
            { initials: "AR", name: "Arjun Reddy", role: "Founder & CEO", yrs: "16 yrs" },
            { initials: "PS", name: "Priya Sharma", role: "Head of Operations", yrs: "11 yrs" },
            { initials: "KM", name: "Kavita Menon", role: "Chief Sustainability Officer", yrs: "9 yrs" },
            { initials: "RT", name: "Rohan Tiwari", role: "Technology Director", yrs: "7 yrs" },
          ].map((p) => (
            <div className="team-card" key={p.initials}>
              <div className="team-avatar">{p.initials}</div>
              <p className="team-name">{p.name}</p>
              <p className="team-role">{p.role}</p>
              <span className="team-badge">{p.yrs}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="about-timeline">
        <h2>Key milestones</h2>
        <div className="timeline">
          {[
            { year: "2008", text: "Founded in Hyderabad with a single composting unit." },
            { year: "2012", text: "Expanded to 10 cities across Telangana and Andhra Pradesh." },
            { year: "2016", text: "Launched AI-assisted sorting facility — first in South India." },
            { year: "2020", text: "Crossed 50K tons recovered annually; ISO 14001 certified." },
            { year: "2024", text: "120K+ tons recovered. 50 cities. Zero-landfill target set for 2030." },
          ].map((m, i) => (
            <div className="timeline-item" key={m.year}>
              <div className="timeline-year">{m.year}</div>
              <div className="timeline-line" />
              <div className="timeline-text">{m.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Ready to make your city greener?</h2>
        <p>Talk to our team about a tailored waste management plan for your community or business.</p>
        <button className="cta-btn" onClick={()=>navigate("/404")}>Get in Touch</button>
      </section>

    </main>
  );
}