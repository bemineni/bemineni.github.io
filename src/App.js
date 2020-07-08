import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import VSCode from "./VSCode";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/src/:id" component={VSCode} />
        <Route path="/src" component={VSCode} />
        <Route path="/readme" component={VSCode} />
        <Route path="/public/:id" exact component={VSCode} />
        <Route path="/public" exact component={VSCode} />
        <Route exact path="/" exact component={VSCode} />
      </Switch>
    </Router>
  );
}

export default App;
