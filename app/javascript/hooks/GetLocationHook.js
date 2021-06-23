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
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      localStorage.setItem("latitiude", position.coords.latitude);
      localStorage.setItem("longitude", position.coords.longitude);
    });
  }, []);
  return { lat, long, error };
};

export default getUserLocation;
