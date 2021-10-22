"use strict";

let input = document.getElementById("task__input");
/*
const checkInput = function (text) {
  if (text == "") {
    prompt("Please enter an actual task");
  }
  return;
};
*/

// Add an element to the HTML
document.querySelector("#add").addEventListener("click", function () {
  let item = document.querySelector("#task__input").value;
  //checkInput(item);
  let text = document.createTextNode(item);
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.classList.add("list__button");
  btn.innerHTML = '<i class="fas fa-times"></i>';
  li.classList.add("list__element");
  li.appendChild(btn);
  li.appendChild(text);
  document.querySelector(".list").appendChild(li);
  btn.addEventListener("click", function () {
    this.parentElement.remove();
  });
});
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add").click();
  }
});
//document.querySelectorAll(".delete").addEventListener("click", function () {});
