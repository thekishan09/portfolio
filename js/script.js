const btn = document.getElementsByClassName("submit-btn")[0];
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = $("form").serializeArray();
  console.log("🚀 ~ btn.addEventListener ~ value:", value);
  const mail =
    "mailto:" +
    value[1].value +
    "?" +
    "subject=" +
    value[0].value +
    "&message=" +
    value[2].value;
  window.location.href = mail;
});
