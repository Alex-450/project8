import React, { useState, useEffect, setState } from "react";
import { Map, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
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

        {props.helpRequests.map((helpRequest) => (
          <Marker
            className="map_marker"
            key={helpRequest.id}
            position={[helpRequest.latitude, helpRequest.longitude]}
            onClick={() => selectHelpRequest(helpRequest.id)}
          >
            <Tooltip>Click to see request</Tooltip>
            <Popup>{helpRequest.title}</Popup>
          </Marker>
        ))}
      </Map>
    </div>
  );
}

export default RequestMap;
