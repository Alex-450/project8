import { useState, useEffect } from "react";

const getUserProfile = () => {
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("api/v1/users/1")
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setUser(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return { user, error, isLoaded };
};

export default getUserProfile;
