import React, { useState, useEffect, setState } from "react";
import GetLocationHook from "../hooks/GetLocationHook";
import GetHelpRequests from "../hooks/GetHelpRequestsHook";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Modal, Button } from "react-bootstrap";

function RequestMap(props) {
  const { lat, long, error } = GetLocationHook();
  const { helpRequests } = GetHelpRequests();
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const test = (event) => {
    console.log("clicked on marker");
    props.setShowOrForm("help_request_show");
  };

  return (
    <div>
      {/* <Modal.Dialog
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Find your current location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This will allow you to see requests for help in your area</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={GetLocationHook}>
            Find location
          </Button>
        </Modal.Footer>
      </Modal.Dialog> */}
      <Map center={[lat, long]} zoom={11} id="mapid">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {lat && long && (
          <Marker key={lat} position={[lat, long]} onClick={test}>
            <Popup>Your location</Popup>
          </Marker>
        )}

        {helpRequests.map((helpRequest) => (
          <Marker
            key={helpRequest.id}
            position={[helpRequest.latitude, helpRequest.longitude]}
            onClick={test}
          >
            <Popup>{helpRequest.title}</Popup>
          </Marker>
        ))}
      </Map>
    </div>
  );
}

export default RequestMap;
