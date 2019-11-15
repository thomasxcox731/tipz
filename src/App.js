import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./Components/NavTab/NavTabs";
import Home from "./Components/pages/Home/Home";
import Mileage from "./Components/pages/Mileage/Mileage";
import Tips from "./Components/pages/tips/Tips";
import Account from "./Components/pages/Account/Account";


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
