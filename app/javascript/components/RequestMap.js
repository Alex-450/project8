import React, { useState, useEffect, setState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Modal, Button } from "react-bootstrap";

function RequestMap(props) {
  const selectHelpRequest = (id) => {
    props.setSelectedRequest(id);
    props.setShowOrForm("help_request_show");
  };

  return (
    <div>
      <Map center={[props.lat, props.long]} zoom={11} id="mapid">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {props.lat && props.long && (
          <Marker key={props.lat} position={[props.lat, props.long]}>
            <Popup>Your location</Popup>
          </Marker>
        )}

        {props.helpRequests.map((helpRequest) => (
          <Marker
            key={helpRequest.id}
            position={[helpRequest.latitude, helpRequest.longitude]}
            onClick={() => selectHelpRequest(helpRequest.id)}
          >
            <Popup>{helpRequest.title}</Popup>
          </Marker>
        ))}
      </Map>
    </div>
  );
}

export default RequestMap;
