var colors = ["blue", "orange", "red"];
var el = document.getElementById("color-container"); 

const blue = document.getElementById("blue");
const orange = document.getElementById("orange");
const red = document.getElementById("red");

var currentActive = -1;

function myFunction(){
    currentActive=-1;
    el.style.backgroundColor = "white";
    document.getElementById("color-container").textContent = "Color: white";
}

function update(){
    el.style.backgroundColor= colors[currentActive];
    document.getElementById("color-container").textContent = "Color: " + colors[currentActive];
    console.log(currentActive);
}

blue.addEventListener("click",() => {
    currentActive = 0;
    update()
})
orange.addEventListener("click",() => {
    currentActive = 1;
    update()
})
red.addEventListener("click",() => {
    currentActive = 2;
    update()
})
