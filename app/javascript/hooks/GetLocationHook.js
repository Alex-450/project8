import { useState, useEffect } from "react";

const getUserLocation = () => {
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitide is: ", position.coords.latitude);
      console.log("Longitude is: ", position.coords.longitude);
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);
  return { lat, long, error };
};

export default getUserLocation;
