document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  fetch(this.action, {
    method: this.method,
    body: new FormData(this),
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        this.reset();
        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed. Please try again.");
      }
    })
    .catch((error) => {
      alert("Form submission failed. Please try again.");
    });
});
