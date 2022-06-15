import React, { useState } from "react";

import "./MainNavigation.css";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import MainHeader from "./MainHeader";
import Backdrop from "../Backdrop";
import SideDrawer from "./SideDrawer";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler =()=>{
    setDrawerIsOpen(true);
  }
  const closeDrawerHandler =()=>{
    setDrawerIsOpen(false);
  }

  return (
    <React.Fragment>
    {drawerIsOpen ? (<Backdrop onClick={closeDrawerHandler}/>):null}
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
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
