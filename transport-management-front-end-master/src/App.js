import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

import InsideCityDetail from "./components/InsideCity/InsideCityDetail";
import BetweenCityDetail from "./components/BetweenCity/BetweenCityDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import MapF from "./components/MapF";
import Contact from "./components/Contact";
import Transport from "./components/Transport";
import "./App.scss";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/mapofsenegal">
            <MapF />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/transport">
            <Transport />
          </Route>

          <Route exact path="/insidecity">
            <InsideCityDetail />
          </Route>
          <Route exact path="/betweencity">
            <BetweenCityDetail />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
