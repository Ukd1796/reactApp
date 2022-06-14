import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import MainNavigation from "./shared/components/UIElements/Navigation/MainNavigation";

import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
    <MainNavigation/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
};
// exact is used when we need the same path and not something matching
// the switch component will help us only match with the first route and nooot with all of them
export default App;
