const dropdownItem = document.querySelectorAll(".dropdown-item");
let mostrar = false;
document.addEventListener("DOMContentLoaded", function () {
  const dropdownLink = document.querySelector(
    '.nav-link.dropdown-toggle[href="#servicios"]'
  );

  dropdownLink.addEventListener("click", function (event) {
    // Previene el comportamiento predeterminado para manejarlo manualmente
    event.preventDefault();

    // Desplaza la página a la sección de "Servicios"
    document.querySelector("#servicios").scrollIntoView({
      behavior: "smooth",
    });

    const dropdown = new bootstrap.Dropdown(dropdownLink);
    if (!mostrar) {
      dropdown.show();
      mostrar = true;
    } else {
      dropdown.hide();
      mostrar = false;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownLink = document.querySelector(
    '.nav-link.dropdown-toggle[href="#servicios"]'
  );

  dropdownItem.forEach((element) => {
    element.addEventListener("click", (event) => {
      // Previene el comportamiento predeterminado para manejarlo manualmente
      event.preventDefault();

      // Desplaza la página a la sección de "Servicios"

      const target = document.querySelector(
        "#" + event.target.href.split("#")[1]
      );

      const headerOffset = 100; // Ajusta este valor según la altura de tu header
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      if (!target.classList.contains("mostrarService")) {
        target.classList.add("mostrarService");
        if (target.classList.contains("boxSerices1")) {
          target.classList.add("mostrarServiceAsesora");
        }
      } else {
        target.classList.remove("mostrarService");
        if (target.classList.contains("boxSerices1")) {
          target.classList.remove("mostrarServiceAsesora");
        }
      }
      // Despliega el menú desplegable
      const dropdown = new bootstrap.Dropdown(dropdownLink);
      dropdown.show();
    });
  });
});

function mostrarOcultar() {
  document.querySelector(target).classList.contains("mostrar");
}
