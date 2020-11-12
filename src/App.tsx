import React from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import { routes, navigation, links } from "./constants/routes";

import "./App.css";

const App: React.FunctionComponent = () => (
  <div className="App">
    <nav className="App-nav">
      {navigation.map(({ label, route }) => (
        <NavLink
          activeClassName="App-link-active"
          className="App-link"
          key={route}
          to={route}
        >
          {label}
        </NavLink>
      ))}
    </nav>
    <Switch>
      {routes.map(({ component, route }) => (
        <Route exact path={route} component={component} />
      ))}
      <Redirect to={links.glucose} />
    </Switch>
  </div>
);

export default App;
