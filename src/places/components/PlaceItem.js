import React, { useContext, useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal";

import "./PlaceItem.css";
import Button from "../../shared/components/FormElements/Button";

import { AuthContext } from "../../shared/context/auth-context";

const PlaceItem = (props) => {
  const auth =useContext(AuthContext)
  const [showMaps, setShowMaps] = useState(false);
  const [showConfirmModal,setShowConfirmModal] = useState(false);
  const openMapHandler = () => setShowMaps(true);
  const closeMapHandler = () => setShowMaps(false);

  const showWarningHandler =()=>{
    
         setShowConfirmModal(true);
  }

  const cancelWarningHandler = ()=>{
    setShowConfirmModal(false);
  }

  const confirmDeletHandler = () =>{
    console.log(("deleting ....."))
    setShowConfirmModal(false);
  }

  return (
    <React.Fragment>
      <Modal
        show={showMaps}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <h2>The Map!!</h2>
        </div>
      </Modal>
      <Modal  show ={showConfirmModal} onCancel = {cancelWarningHandler} header="Are you sure?" footerClass="place-item__modal-action" footer={
        <React.Fragment>
          <Button inverse onClick={cancelWarningHandler}>Cancel</Button>
          <Button danger onClick={confirmDeletHandler}>Delete</Button>
        </React.Fragment>
      }>
        <p>Do you want to delete this for sure ? Once deleted it will be removed forever.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              View On Map
            </Button>
            {auth.isLoggedIn && <Button to={`/places/${props.id}`}>Edit</Button>}
            {auth.isLoggedIn && <Button danger onClick={showWarningHandler}>Delete</Button>}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
