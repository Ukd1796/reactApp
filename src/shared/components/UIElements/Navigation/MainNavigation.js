import React from "react";

import "./MainNavigation.css";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import MainHeader from "./MainHeader";

import SideDrawer from "./SideDrawer";

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">CheckItOut</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;

// everything written in between opening and closing tag of main header will be displayed at props.children position

// we cannot return multiple root level elements together so we use react.fragment in such cases
