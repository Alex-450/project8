import { useState, useEffect } from "react";

const GetHelpRequests = () => {
  const [helpRequests, setHelpRequests] = useState([]);
  const [timeInterval, setTimeInterval] = useState(0);

  setTimeout(() => {
    setTimeInterval(timeInterval + 1);
  }, 3000);

  useEffect(() => {
    fetch("api/v1/help_requests")
      .then((response) => response.json())
      .then((data) => {
        setHelpRequests(data);
      });
    console.log("polling");
  }, [timeInterval]);
  return { helpRequests };
};

export default GetHelpRequests;
