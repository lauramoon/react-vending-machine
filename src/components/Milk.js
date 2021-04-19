import { Link } from "react-router-dom";

import "./Item.css";

function Milk() {
  return (
    <div className="Item">
      <h1>🥛</h1>
      <h3>It does the body good!</h3>
      <p>
        <Link to="/">Pick something else</Link>
      </p>
    </div>
  );
}

export default Milk;
