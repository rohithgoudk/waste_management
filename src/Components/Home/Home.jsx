import "./Home.css";
import { useNavigate } from "react-router-dom";

import W12 from "../../assets/W12.webp";

import W1 from "../../assets/W1.webp";
import W2 from "../../assets/W2.webp";
import W3 from "../../assets/W3.webp";
import W9 from "../../assets/W9.webp";

import W13 from "../../assets/W13.webp";
import W5 from "../../assets/W5.webp";
import W6 from "../../assets/W6.webp";
import W8 from "../../assets/W8.webp";
import W14 from "../../assets/W14.webp";
import W15 from "../../assets/W15.webp";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">
          <h1>
            Transforming Waste Into A Sustainable Future
          </h1>

          <p>
            Smart waste collection, recycling, and environmental
            solutions helping cities become cleaner,
            greener, and healthier.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/404")}>
              Get Started
            </button>

            <button className="secondary-btn" onClick={() => navigate("/404")}>
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={W12} alt="" />
        </div>

      </section>

      {/* ABOUT */}
      <section className="about">

        <h2>Building Greener Communities</h2>

        <p>
          We provide sustainable waste management
          solutions through innovative recycling,
          waste collection, composting, and
          resource recovery technologies.
        </p>

      </section>

      {/* SERVICES */}
      <section className="services">

        <h2>Our Services</h2>

        <div className="service-grid">

          <div className="service-card">
            <img src={W1} alt="" />
            <h3>♻ Recycling</h3>
            <p>
              Transforming waste into reusable resources.
            </p>
          </div>

          <div className="service-card">
            <img src={W2} alt="" />
            <h3>🚛 Waste Collection</h3>
            <p>
              Scheduled pickup for homes and industries.
            </p>
          </div>

          <div className="service-card">
            <img src={W3} alt="" />
            <h3>🌱 Composting</h3>
            <p>
              Organic waste converted into natural fertilizer.
            </p>
          </div>

          <div className="service-card">
            <img src={W9} alt="" />
            <h3>🏭 Industrial Waste</h3>
            <p>
              Safe disposal and treatment of industrial waste.
            </p>
          </div>

        </div>

      </section>

      {/* RECYCLING PROCESS */}
      <section className="process">

        <h2>Our Recycling Process</h2>

        <div className="process-grid">

          <div className="process-card">
            <img src={W13} alt="" />
            <h3>01. Collection</h3>
            <p>
              Waste is collected from residential,
              commercial and industrial sources.
            </p>
          </div>

          <div className="process-card">
            <img src={W5} alt="" />
            <h3>02. Sorting</h3>
            <p>
              Materials are separated into recyclable
              and non-recyclable categories.
            </p>
          </div>

          <div className="process-card">
            <img src={W6} alt="" />
            <h3>03. Recycling</h3>
            <p>
              Valuable materials are processed and reused.
            </p>
          </div>

          <div className="process-card">
            <img src={W8} alt="" />
            <h3>04. Recovery</h3>
            <p>
              New products are created from recovered resources.
            </p>
          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="stats">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <h2>120K+</h2>
          <p>Tons Recycled</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Cities Served</p>
        </div>

        <div className="stat-card">
          <h2>98%</h2>
          <p>Customer Satisfaction</p>
        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">

        <h2>Why Choose Us?</h2>

        <div className="features">

          <div className="feature">
            <img src={W1} alt="" className="feature-img" />
            <h3>Eco Friendly</h3>
            <p>
              Sustainable solutions that protect nature.
            </p>
          </div>

          <div className="feature">
            <img src={W14} alt="" className="feature-img" />
            <h3>Smart Tracking</h3>
            <p>
              Technology-driven monitoring and reporting.
            </p>
          </div>

          <div className="feature">
            <img src={W15} alt="" className="feature-img" />
            <h3>Certified Experts</h3>
            <p>
              Experienced professionals ensuring compliance.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta">

        <h2>Join The Green Revolution</h2>

        <p>
          Together we can create a cleaner and more
          sustainable world for future generations.
        </p>

        <button onClick={() => navigate("/404")}>Schedule Pickup</button>

      </section>

    </main>
  );
}

export default Home;