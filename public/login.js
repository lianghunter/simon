function login() {
  const nameVal = document.querySelector("#name");
  localStorage.setItem("userName", nameVal.value);
  window.location.href = "compete.html";
}
