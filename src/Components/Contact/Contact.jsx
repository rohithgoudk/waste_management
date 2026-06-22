import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const slides = [
  {
    id: 1,
    tab: "Get in Touch",
    icon: "✉️",
    step: "01",
    eyebrow: "Send a Message",
    headline: "We read every message and reply within 24 hours — guaranteed.",
    body: "Whether you have a question about our services, want to schedule a pickup, or need a custom waste management plan, our team is ready. Fill in the form and we'll match you with the right specialist.",
    accent: "#2d6a4f",
    bg: "contact-bg-message",
    content: "form",
  },
  {
    id: 2,
    tab: "Schedule Pickup",
    icon: "🚛",
    step: "02",
    eyebrow: "Book a Collection",
    headline: "Pick a date, tell us your waste type — we handle everything else.",
    body: "Our GPS-tracked fleet covers 50+ cities. Choose a convenient time slot, specify the type and approximate volume of waste, and we'll confirm within the hour. Residential, commercial, and industrial pickups all welcome.",
    accent: "#1b4332",
    bg: "contact-bg-pickup",
    content: "pickup",
  },
  {
    id: 3,
    tab: "Visit Us",
    icon: "📍",
    step: "03",
    eyebrow: "Our Offices",
    headline: "Four regional offices — always close to the communities we serve.",
    body: "Walk in any weekday between 9 AM and 6 PM. Our regional teams handle everything from resident queries to large-scale industrial contracts. No appointment needed for general enquiries.",
    accent: "#40916c",
    bg: "contact-bg-visit",
    content: "offices",
  },
  {
    id: 4,
    tab: "Emergency",
    icon: "🚨",
    step: "04",
    eyebrow: "24 / 7 Rapid Response",
    headline: "Spill, leak, or hazardous waste incident? We respond in under 2 hours.",
    body: "Environmental emergencies don't wait for business hours. Our rapid response team operates round the clock. Call our emergency line, share your location, and a certified hazmat team will be on site fast.",
    accent: "#52b788",
    bg: "contact-bg-emergency",
    content: "emergency",
  },
];

const offices = [
  { city: "Hyderabad", address: "Plot 42, Hitech City, Madhapur, HYD 500081", phone: "+91 40 2345 6789", hours: "Mon–Sat 9 AM–6 PM" },
  { city: "Bengaluru", address: "12th Floor, UB City, Vittal Mallya Rd, BLR 560001", phone: "+91 80 2345 6789", hours: "Mon–Sat 9 AM–6 PM" },
  { city: "Chennai", address: "Tower C, Tidel Park, Taramani, CHN 600113", phone: "+91 44 2345 6789", hours: "Mon–Sat 9 AM–6 PM" },
  { city: "Mumbai", address: "Level 18, One BKC, Bandra Kurla Complex, MUM 400051", phone: "+91 22 2345 6789", hours: "Mon–Sat 9 AM–6 PM" },
];

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name: only alphabets and spaces
    if (name === "name" && value && !/^[a-zA-Z\s]*$/.test(value)) return;

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(form.email)) {
      errs.email = "Only Gmail addresses are accepted (e.g. you@gmail.com).";
    }
    if (!form.subject) errs.subject = "Please select a topic.";
    if (!form.message.trim()) errs.message = "Message cannot be empty.";
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSent(true);
  };

  if (sent) return (
    <div className="form-success">
      <span className="success-icon">✅</span>
      <h3>Message sent!</h3>
      <p>We'll reply to <strong>{form.email}</strong> within 24 hours.</p>
      <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); setErrors({}); }}>
        Send another
      </button>
    </div>
  );

  return (
    <div className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label>Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Arjun Reddy"
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="arjun@gmail.com"
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
      </div>
      <div className="form-group">
        <label>Subject</label>
        <select name="subject" value={form.subject} onChange={handleChange}>
          <option value="">Select a topic</option>
          <option>Residential Pickup</option>
          <option>Industrial Waste</option>
          <option>Composting Service</option>
          <option>Recycling Partnership</option>
          <option>General Enquiry</option>
        </select>
        {errors.subject && <span className="form-error">{errors.subject}</span>}
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us how we can help..."
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>
      <button className="form-submit" onClick={handleSubmit}>
        Send Message →
      </button>
    </div>
  );
}

function PickupForm() {
  const [booked, setBooked] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "", type: "", date: "", volume: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  if (booked) return (
    <div className="form-success dark">
      <span className="success-icon">🚛</span>
      <h3>Pickup scheduled!</h3>
      <p>Our team will confirm your slot on <strong>{form.phone}</strong> within 1 hour.</p>
      <button onClick={() => { setBooked(false); setForm({ name: "", phone: "", city: "", type: "", date: "", volume: "" }); }}>
        Book another
      </button>
    </div>
  );

  return (
    <div className="contact-form dark-form">
      <div className="form-row">
        <div className="form-group">
          <label>Your Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>City</label>
          <select name="city" value={form.city} onChange={handleChange}>
            <option value="">Select city</option>
            <option>Hyderabad</option>
            <option>Bengaluru</option>
            <option>Chennai</option>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Waste Type</label>
          <select name="type" value={form.type} onChange={handleChange}>
            <option value="">Select type</option>
            <option>Household / General</option>
            <option>Recyclables</option>
            <option>Organic / Food Waste</option>
            <option>E-Waste</option>
            <option>Industrial / Hazardous</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Preferred Date</label>
          <input name="date" type="date" value={form.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Approx. Volume</label>
          <select name="volume" value={form.volume} onChange={handleChange}>
            <option value="">Estimate</option>
            <option>Under 50 kg</option>
            <option>50 – 200 kg</option>
            <option>200 kg – 1 tonne</option>
            <option>1 – 5 tonnes</option>
            <option>5+ tonnes</option>
          </select>
        </div>
      </div>
      <button className="form-submit" onClick={() => setBooked(true)}>
        Book Pickup →
      </button>
    </div>
  );
}

function OfficeCards() {
  return (
    <div className="office-grid">
      {offices.map((o) => (
        <div className="office-card" key={o.city}>
          <div className="office-icon">📍</div>
          <h3>{o.city}</h3>
          <p className="office-address">{o.address}</p>
          <p className="office-phone">{o.phone}</p>
          <span className="office-hours">{o.hours}</span>
        </div>
      ))}
    </div>
  );
}

function EmergencyPanel() {
  return (
    <div className="emergency-panel">
      <div className="emergency-number">
        <span className="emg-label">Emergency Hotline</span>
        <a href="tel:+918001234567" className="emg-phone">1800 123 4567</a>
        <span className="emg-note">Toll-free · Available 24 / 7 · Response &lt; 2 hrs</span>
      </div>
      <div className="emergency-cards">
        {[
          { icon: "☣️", title: "Chemical Spill", desc: "Hazmat-certified team deployed immediately." },
          { icon: "🔋", title: "E-Waste Incident", desc: "Safe containment and certified disposal." },
          { icon: "🏭", title: "Industrial Leak", desc: "Rapid site assessment and full cleanup." },
          { icon: "🌊", title: "Waterway Contamination", desc: "Coordinated response with local authorities." },
        ].map((c) => (
          <div className="emg-card" key={c.title}>
            <span className="emg-icon">{c.icon}</span>
            <div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
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
    <main className="contact-page">

      {/* HERO */}
      <section className="con-header">
        <p className="con-eyebrow-top">Contact Us</p>
        <h1>Let's build something<br />greener together.</h1>
        <p className="con-subhead">
          A message, a pickup request, an office visit, or an emergency —
          we have a channel ready for every need.
        </p>
        <div className="con-quick-links">
          {slides.map((sl, i) => (
            <button
              key={sl.id}
              className={`cql-btn${i === active ? " cql-active" : ""}`}
              onClick={() => goTo(i)}
              style={i === active ? { borderColor: sl.accent, color: sl.accent } : {}}
            >
              {sl.icon} {sl.tab}
            </button>
          ))}
        </div>
      </section>

      {/* SLIDE TABS */}
      <section className="con-slides">
        <nav className="con-nav">
          {slides.map((sl, i) => (
            <button
              key={sl.id}
              className={`con-tab${i === active ? " con-tab-active" : ""}`}
              onClick={() => goTo(i)}
              style={{ "--accent": sl.accent }}
            >
              <span className="con-tab-icon">{sl.icon}</span>
              <span>{sl.tab}</span>
            </button>
          ))}
        </nav>

        {/* STAGE */}
        <div className={`con-stage ${s.bg}${animating ? " c-exit" : " c-enter"}`}>

          {/* LEFT — info */}
          <div className="con-info">
            <p className="con-slide-eyebrow" style={{ color: s.accent }}>{s.eyebrow}</p>
            <h2>{s.headline}</h2>
            <p className="con-body">{s.body}</p>

            <div className="con-badges">
              <span style={{ background: s.accent }}>
                {s.id === 1 && "24 hr reply"}
                {s.id === 2 && "Confirmed in 1 hr"}
                {s.id === 3 && "No appointment needed"}
                {s.id === 4 && "< 2 hr response"}
              </span>
              <span className="badge-step" style={{ borderColor: s.accent, color: s.accent }}>
                Step {s.step}
              </span>
            </div>
          </div>

          {/* RIGHT — interactive content */}
          <div className="con-content-panel">
            {s.content === "form"      && <ContactForm />}
            {s.content === "pickup"    && <PickupForm />}
            {s.content === "offices"   && <OfficeCards />}
            {s.content === "emergency" && <EmergencyPanel />}
          </div>

        </div>

        {/* DOTS */}
        <div className="con-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`con-dot${i === active ? " con-dot-active" : ""}`}
              onClick={() => goTo(i)}
              style={i === active ? { background: s.accent } : {}}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="con-strip">
        {[
          { icon: "📧", label: "General Enquiries", value: "hello@ecowaste.in" },
          { icon: "📞", label: "Main Office", value: "+91 40 2345 6789" },
          { icon: "🚨", label: "Emergency 24/7", value: "1800 123 4567" },
          { icon: "⏰", label: "Office Hours", value: "Mon – Sat, 9 AM – 6 PM" },
        ].map((c) => (
          <div className="con-strip-item" key={c.label}>
            <span className="strip-icon">{c.icon}</span>
            <p className="strip-label">{c.label}</p>
            <p className="strip-value">{c.value}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="con-cta">
        <h2>Not sure where to start?</h2>
        <p>Schedule a free 30-minute consultation with one of our waste specialists.</p>
        <div className="con-cta-btns">
          <button className="btn-primary" onClick={() => navigate("/404")}>Book Free Consultation</button>
          <button className="btn-outline" onClick={() => navigate("/404")}>Download Service Brochure</button>
        </div>
      </section>

    </main>
  );
}