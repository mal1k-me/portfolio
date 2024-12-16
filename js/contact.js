function validateForm() {
  var message = document.getElementsByName("message")[0];

  if (message.value == "") {
    alert("Please write a message before sending!");
    return false;
  }

  alert("Message sent successfully!");
  document.getElementsByClassName("contact-form")[0].reset();
  return false;
}
