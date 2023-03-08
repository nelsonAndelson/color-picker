let dropdownEl = document.getElementById("dropdown-el");
let optionsEl = document.querySelector(".options");

document.addEventListener("click", (e) => {
  if (e.target.id === "dropdown-el" || dropdownEl.contains(e.target))
    optionsEl.classList.toggle("show");
  else optionsEl.classList.remove("show");
});
