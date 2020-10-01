import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Button } from "react-bootstrap";
import GetLocationHook from "../hooks/GetLocationHook";

const Home = (props) => {
  const { lat, long, error } = GetLocationHook();
  return (
    <div>
      <h1>Welcome - you have successfully logged in!</h1>

      <Map center={[lat, long]} zoom={11} id="mapid">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker key={lat} position={[lat, long]}>
          <Popup>Your location</Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default Home;
