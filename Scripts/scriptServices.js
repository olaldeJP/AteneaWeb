const todosLosLi = document.querySelectorAll(".losLI");
const todosLosIcono = document.querySelectorAll(".pentaG");
const Iconos = Array.from(todosLosIcono);

Array.from(todosLosLi).map((element) => {
  element.addEventListener("mouseover", () => {
    document
      .querySelector(`#${element.id.slice(0, -2)}` + `Icono`)
      .classList.add("agrandar");
  });
  element.addEventListener("mouseout", () => {
    document
      .querySelector(`#${element.id.slice(0, -2)}` + `Icono`)
      .classList.remove("agrandar");
  });
});
