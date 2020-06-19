import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from "./Project";
import "./App.css";

//<Route path="/blog/:id" component={Blog} />
//<Route path="/readme" component={Readme} />

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Project} />
      </Switch>
    </Router>
  );
}

export default App;
