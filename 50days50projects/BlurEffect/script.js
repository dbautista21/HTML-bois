const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  // go from 1 opacity to 0 opacity
  loadText.style.opacity = ((inMin = 0, inMax = 100, outMin = 1, outMax = 0) =>
    ((load - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin)();
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
