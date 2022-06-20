import React,{useState,useCallback} from "react";
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
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

import NewPlace from "./places/pages/NewPlace";

const App = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const login = useCallback(()=>{
    setIsLoggedIn(true);
  },[]);

  const logout = useCallback(()=>{
    setIsLoggedIn(false);
  },[]);

  let routes;

  if(isLoggedIn)
  {
    routes = (
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
        <Redirect to ="/"/>
      </Switch>
    );
  }
  else
  {
    routes = (
      <Switch>
         <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
           <UserPlaces/>
        </Route>
        <Route path="/auth" exact>
          <Auth/>
        </Route>
        <Redirect to ="/auth"/>
      </Switch>
    );
  }
  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn,login:login,logout:logout}}>
    <Router>
    <MainNavigation/>
    <main>
      <React.Fragment>
       {routes}
      </React.Fragment>
      </main>
    </Router>
    </AuthContext.Provider>
  );
};
// exact is used when we need the same path and not something matching
// the switch component will help us only match with the first route and not with all of them

// we write update place Route after newplace as the route can also new as a placeid
export default App;
