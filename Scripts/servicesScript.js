const services = document.querySelectorAll(".boxSerices");

services.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();

    if (!element.classList.contains("mostrarService")) {
      element.classList.add("mostrarService");
      if (element.classList.contains("boxSerices1")) {
        element.classList.add("mostrarServiceAsesora");
      }
    } else {
      element.classList.remove("mostrarService");
      if (element.classList.contains("boxSerices1")) {
        element.classList.remove("mostrarServiceAsesora");
      }
    }
  });
});
