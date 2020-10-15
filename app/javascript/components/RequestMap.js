import React, { useState, useEffect, setState } from "react";
import GetLocationHook from "../hooks/GetLocationHook";
import GetHelpRequests from "../hooks/GetHelpRequestsHook";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

function RequestMap() {
  const { lat, long, error } = GetLocationHook();
  const { helpRequests } = GetHelpRequests();

  const test = (event) => {
    console.log("clicked on marker");
  };

  return (
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
        >
          <Popup>{helpRequest.title}</Popup>
        </Marker>
      ))}
    </Map>
  );
}

export default RequestMap;
