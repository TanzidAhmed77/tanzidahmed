// show and hide password start

const passwordInput = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("showPasswordCheckbox");

showPasswordCheckbox.addEventListener("change", () => {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

// login page start

document.getElementById("submit").addEventListener("click", function () {
  const userField = document.getElementById("username");
  const user = userField.value;

  const passwordField = document.getElementById("password");
  const password = passwordField.value;

  if (
    (user === "tanzid" || user === "Bokha_Shad") &&
    (password === "ghjkl" || password === "Vondo")
  ) {
    window.location.href = "dashboard.html";
  } else {
    alert("Worng Information!");
  }
});

// number change
