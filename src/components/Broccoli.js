import { Link } from "react-router-dom";

import "./Item.css";

function Broccoli() {
  return (
    <div className="Item">
      <h1>🥦</h1>
      <h3>Please enjoy responsibly.</h3>
      <p>
        <Link to="/">Pick something else</Link>
      </p>
    </div>
  );
}

export default Broccoli;
