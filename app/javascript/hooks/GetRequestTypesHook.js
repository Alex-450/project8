import { useState, useEffect } from "react";

const GetRequestTypes = () => {
  const [requestTypes, setRequestTypes] = useState([]);

  useEffect(() => {
    fetch("api/v1/request_types")
      .then((response) => response.json())
      .then((data) => {
        setRequestTypes(data);
      });
  }, []);
  return { requestTypes };
};

export default GetRequestTypes;
