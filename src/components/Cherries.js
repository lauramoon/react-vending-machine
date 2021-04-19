import { Link } from "react-router-dom";

import "./Item.css";

function Cherries() {
  return (
    <div className="Item">
      <h1>🍒</h1>
      <h3>Delicious and refreshing.</h3>
      <p>
        <Link to="/">Pick something else</Link>
      </p>
    </div>
  );
}

export default Cherries;
