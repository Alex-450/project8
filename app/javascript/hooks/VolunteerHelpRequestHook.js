const volunteerHelpRequest = (user_id, help_request_id) => {
  const csrf = document
    .querySelector("meta[name='csrf-token']")
    .getAttribute("content");

  fetch("api/v1/volunteer_connections", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-CSRF-Token": csrf,
    },
    body: JSON.stringify({
      user_id,
      help_request_id,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });
};

export default volunteerHelpRequest;
