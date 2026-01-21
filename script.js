document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("messageError").innerText = "";
  document.getElementById("successMsg").innerText = "";

  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    return;
  }

  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    return;
  }

  if (message === "") {
    document.getElementById("messageError").innerText = "Message is required";
    return;
  }

  document.getElementById("successMsg").innerText =
    "Message submitted successfully (backend coming soon)";

  document.getElementById("contactForm").reset();
});
