const button = document.querySelector(".submit");
const input_field = document.querySelector(".search");

button.addEventListener("click", function () {
  if (input_field.classList.contains("active-search")) {
    input_field.classList.remove("active-search");
  } else {
    input_field.classList.add("active-search");
    input_field.focus();
  }
});
