import React, { useState, useEffect, setState } from "react";
import { Map, Marker, Popup, TileLayer, Tooltip, Circle } from "react-leaflet";
import { Modal, Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";

function RequestMap(props) {
  const selectHelpRequest = (id) => {
    props.setSelectedRequest(id);
    props.setShowOrForm("help_request_show");
  };

  const materialHelpRequests = props.helpRequests.filter(
    (helpRequests) => helpRequests.request_type_id == 1
  );

  const oneTimeHelpRequests = props.helpRequests.filter(
    (helpRequests) => helpRequests.request_type_id == 2
  );

  const iconMarkup = renderToStaticMarkup(
    <i className=" fas fa-map-marker-alt fa-3x" />
  );
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });

  return (
    <div>
      <Map center={[props.lat, props.long]} zoom={11} id="mapid">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {materialHelpRequests.map((materialHelpRequest) => (
          <Marker
            icon={customMarkerIcon}
            className="map_marker"
            key={materialHelpRequest.id}
            position={[
              materialHelpRequest.latitude,
              materialHelpRequest.longitude,
            ]}
            onClick={() => selectHelpRequest(materialHelpRequest.id)}
          >
            <Tooltip>Click to see request</Tooltip>
            <Popup>{materialHelpRequest.title}</Popup>
          </Marker>
        ))}

        {oneTimeHelpRequests.map((oneTimeHelpRequest) => (
          <Marker
            icon={customMarkerIcon}
            className="map_marker"
            key={oneTimeHelpRequest.id}
            position={[
              oneTimeHelpRequest.latitude,
              oneTimeHelpRequest.longitude,
            ]}
            onClick={() => selectHelpRequest(oneTimeHelpRequest.id)}
          >
            <Tooltip>Click to see request</Tooltip>
            <Popup>{oneTimeHelpRequest.title}</Popup>
          </Marker>
        ))}
      </Map>
    </div>
  );
}

export default RequestMap;
