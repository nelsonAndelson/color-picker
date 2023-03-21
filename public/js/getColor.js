const colorsEl = document.querySelectorAll(".colors .color .color");

export default function getColor(color, mode) {
  color = color.slice(1);
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=${mode}&count=6`
  )
    .then((res) => res.json())
    .then((data) => {
      let colorsArr = Array.from(colorsEl);
      colorsArr.map((color, index) => {
        color.nextElementSibling.innerText = color.style.background =
          data.colors[index].hex.value;
      });
    });
}
