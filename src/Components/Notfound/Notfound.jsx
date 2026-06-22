import "./Notfound.css";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="notfound">

      <h1>404</h1>

      <h2>Page Not found</h2>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <Link to="/">
        Back Home
      </Link>

    </div>
  );
}

export default Notfound;