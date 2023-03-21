export default function getColorModeName(e) {
  const optionsEl = document.querySelector(".options");
  if (e.target.dataset.modeName) {
    optionsEl.childNodes.forEach((child) => (child.className = "option"));
    e.target.classList.add("selected-option");
    return e.target.dataset.modeName;
  }
  return document.querySelector(".selected-option").innerText;
}
