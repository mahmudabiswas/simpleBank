document.getElementById("FormSubmit").addEventListener("click", function () {
  const formEmail = document.getElementById("FormEmail");
  const formValidEmail = formEmail.value;

  // get the password field;

  const formPassword = document.getElementById("FormPassword");
  const formValidPassword = formPassword.value;
  if (formValidEmail === "lima@gmail.com" && formValidPassword === "12345") {
    window.location.href = "index.html";
  } else {
    alert("invalid user");
  }
});
