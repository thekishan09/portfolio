const btn = document.getElementsByClassName("submit-btn")[0];
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const form = $("form").serializeArray();
  if (form[1].value === "" || form[2].value === "" || form[0].value === "") {
    alert("Please fill all the fields");
    return;
  }
  if (!isValidEmail(form[1].value)) {
    alert("Please enter a valid email address");
    return;
  }
  const mail =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    form[1].value +
    "&su=" +
    form[0].value +
    "&body=" +
    form[2].value;
  window.open(mail, "_blank");
});
function isValidEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
