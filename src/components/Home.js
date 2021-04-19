import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1>Vending machine</h1>
      <div className="HomeVending">
        <h4>
          <Link to="/broccoli">Broccoli</Link>
        </h4>
        <h4>
          <Link to="/milk">Milk</Link>
        </h4>
        <h4>
          <Link to="/cherries">Cherries</Link>
        </h4>
        <h4>
          <Link to="/pizza">Pizza</Link>
        </h4>
      </div>
      <p>What would you like to eat?</p>
    </div>
  );
}

export default Home;
