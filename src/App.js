import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Mileage from "./components/pages/Mileage";
import Tips from "./components/pages/Tips";
import Account from "./components/pages/Account";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/mileage" component={Mileage} />
        <Route exact path="/tips" component={Tips} />
        <Route exact path="/account" component={Account} />
      </div>
    </Router>
  );
}

export default App;
