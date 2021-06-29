import React from "react";
import { Map, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";

function RequestMap(props) {
  const selectHelpRequest = (id) => {
    props.setSelectedRequest(id);
    props.setShowOrForm("help_request_show");
  };

  const unfulfilledHelpRequests = props.helpRequests.filter(
    (helpRequests) => helpRequests.fulfilled == false
  );

  const materialHelpRequests = unfulfilledHelpRequests.filter(
    (helpRequests) => helpRequests.request_type_id == 1
  );

  const oneTimeHelpRequests = unfulfilledHelpRequests.filter(
    (helpRequests) => helpRequests.request_type_id == 2
  );

  const iconMarkupOne = renderToStaticMarkup(
    <i id="map_marker_one" className="fas fa-map-marker-alt fa-2x"></i>
  );

  const customMarkerIconOne = divIcon({
    html: iconMarkupOne,
  });

  const iconMarkupTwo = renderToStaticMarkup(
    <i id="map_marker_two" className="fas fa-map-marker-alt fa-2x"></i>
  );

  const customMarkerIconTwo = divIcon({
    html: iconMarkupTwo,
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
            icon={customMarkerIconOne}
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
            icon={customMarkerIconTwo}
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
