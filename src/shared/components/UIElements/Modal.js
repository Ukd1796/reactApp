import React from "react";
import Backdrop from "./Backdrop";
import { CSSTransition } from "react-transition-group";

import ReactDOM from "react-dom";
import "./Modal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props}/> 
      </CSSTransition>
    </React.Fragment>
  );
};

// the syntax on line 43 allows us to pass the props of modal to modal overlay which in turn helps us to set header , footer etc props of the modal overlay.
// we are using template literals while writing the classname so that we can have a generic class and add our own clas if needed while using the modal
// the event prevent default method prevents the form from getting submitted if the props on sumbit handler is not set

// we have two seperate components as we need the backdrop and transitions as well in the modal
export default Modal;
