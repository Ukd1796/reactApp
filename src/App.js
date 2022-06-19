import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import MainNavigation from "./shared/components/UIElements/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";

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
        <Route path="/:userId/places" exact>
           <UserPlaces/>
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId" exact>
        <UpdatePlace/>
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
};
// exact is used when we need the same path and not something matching
// the switch component will help us only match with the first route and not with all of them

// we write update place Route after newplace as the route can also new as a placeid
export default App;
