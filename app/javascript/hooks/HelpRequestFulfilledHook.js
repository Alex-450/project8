const HelpRequestFulfilled = (id) => {
  const csrf = document
    .querySelector("meta[name='csrf-token']")
    .getAttribute("content");

  fetch(`api/v1/help_requests/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-CSRF-Token": csrf,
    },
    body: JSON.stringify({
      fulfilled: true,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });
  window.location.reload(false);
};

export default HelpRequestFulfilled;
