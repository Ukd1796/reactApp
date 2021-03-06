import React, { useContext } from "react";

import { AuthContext } from "../../../context/auth-context";

import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL Users
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">My Places</NavLink>
        </li>
      )}
      {auth.isLoggedIn && 
      <li>
        <NavLink to="/places/new">Add Places</NavLink>
      </li>
      }
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick ={auth.logout}>Logout</button>
        </li>
      )}
    </ul>
  );
};

// navlink allows us to style which link is active

export default NavLinks;
