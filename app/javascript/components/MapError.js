import React from "react";
import { Button } from "react-bootstrap";

function MapError(props) {
  function getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitide is: ", position.coords.latitude);
      console.log("Longitude is: ", position.coords.longitude);
      props.setLat(position.coords.latitude);
      props.setLong(position.coords.longitude);
    });
  }
  return (
    <div className="map_button_background">
      <Button className="map_button" onClick={getLocation}>
        See help requests near me <span className="button_arrow">→</span>
      </Button>
    </div>
  );
}

export default MapError;
