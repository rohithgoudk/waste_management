import "./Notfound.css";
import { Link, useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();

  return (
    <div className="notfound">
      <div className="orbit-dot orbit-dot-1" />
      <div className="orbit-dot orbit-dot-2" />
      <div className="orbit-dot orbit-dot-3" />

      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>

      <div className="notfound-actions">
        <button className="notfound-back-btn" onClick={() => navigate(-1)}>
          ← Go Back
        </button>
        <Link to="/">🏠 Back Home</Link>
      </div>
    </div>
  );
}

export default Notfound;