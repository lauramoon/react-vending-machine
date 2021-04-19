import { Link } from "react-router-dom";

import "./Item.css";

function Pizza() {
  return (
    <div className="Item">
      <h1>🍕</h1>
      <h3>Part of a complete breakfast.</h3>
      <p>
        <Link to="/">Pick something else</Link>
      </p>
    </div>
  );
}

export default Pizza;
