const DeleteHelpRequest = (id) => {
  if (confirm("Are you sure you want to delete this request?")) {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    fetch(`api/v1/help_requests/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-CSRF-Token": csrf,
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    });
    window.location.reload(false);
  } else {
  }
};

export default DeleteHelpRequest;
