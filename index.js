document.querySelector("#sub-btn").addEventListener("click", function () {
  input = document.querySelector("#email").value;
  if (input.slice(-10) != "@gmail.com") {
    document.querySelector("#email").classList.add("invalid");
    document.querySelector("#warning-msg").classList.add("error");
    document.querySelector("#warning-msg").classList.remove("hidden");
  } else {
    document.querySelector("#email").classList.remove("invalid");
    document.querySelector("#warning-msg").classList.remove("error");
    document.querySelector("#warning-msg").classList.add("hidden");
  }
});
