import { useState, useEffect } from "react";

const GetHelpRequests = () => {
  const [helpRequests, setHelpRequests] = useState([]);

  useEffect(() => {
    fetch("api/v1/help_requests")
      .then((response) => response.json())
      .then((data) => {
        setHelpRequests(data);
      });
  }, []);
  return { helpRequests };
};

export default GetHelpRequests;
