import React from "react";

import { ReactDOM } from "react";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  const content =  <aside className="side-drawer">{props.children}</aside>;

  return ReactDOM.createPortal(content,document.getElementById('drawer-hook'));
};

// react dom create portal is a method in which you can render a content at a specific position

export default SideDrawer;
