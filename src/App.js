import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import Broccoli from "./components/Broccoli";
import Milk from "./components/Milk";
import Cherries from "./components/Cherries";
import Pizza from "./components/Pizza";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/broccoli">
          <Broccoli />
        </Route>
        <Route exact path="/milk">
          <Milk />
        </Route>
        <Route exact path="/cherries">
          <Cherries />
        </Route>
        <Route exact path="/pizza">
          <Pizza />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
