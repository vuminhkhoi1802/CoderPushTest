import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Liked from "./Liked";
import Matches from "./Matches";

function Routers() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/match" component={Matches} />
      <Route path="/like" component={Liked} />
    </Switch>
  );
}

export default Routers;
