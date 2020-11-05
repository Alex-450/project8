import { useState, useEffect } from "react";

const ShowHelpRequest = (id) => {
  const [helpRequest, setHelpRequest] = useState({});
  const helpRequestId = id;

  useEffect(() => {
    fetch(`api/v1/help_requests/${helpRequestId}`)
      .then((response) => response.json())
      .then((data) => {
        setHelpRequest(data);
      });
  }, [id]);
  return { helpRequest };
};

export default ShowHelpRequest;
