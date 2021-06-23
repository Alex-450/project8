import React from "react";
import { Button } from "react-bootstrap";

function MapError(props) {
  function getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      props.setLat(position.coords.latitude);
      props.setLong(position.coords.longitude);
      localStorage.setItem("latitude", String(position.coords.latitude));
      localStorage.setItem("longitude", String(position.coords.longitude));
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
