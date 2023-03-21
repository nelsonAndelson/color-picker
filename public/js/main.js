import getColorModeName from "./getColorModeName";
import getColor from "./getColor";
const optionsEl = document.querySelector(".options");
const colorInputEl = document.getElementById("color-input-el");
let colorModeName = "";

window.onload = () => {
  getColor("#000000", "monochrome");
};

document.addEventListener("click", (e) => {
  if (
    e.target.id === "dropdown-el" ||
    document.getElementById("dropdown-el").contains(e.target)
  ) {
    optionsEl.classList.toggle("show");
    colorModeName = getColorModeName(e);
    document.getElementById("color-mode-name").innerText = colorModeName;
  } else optionsEl.classList.remove("show");

  if (e.target.id === "color-input-btn") {
    getColor(colorInputEl.value, colorModeName);
  }
});
