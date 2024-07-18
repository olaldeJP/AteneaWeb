function handleResize() {
  const elements = document.querySelectorAll(".flex-Column-980");

  elements.forEach((element) => {
    if (window.innerWidth < 1200) {
      element.classList.remove("d-flex", "justify-content-center");
    } else {
      element.classList.add("d-flex", "justify-content-center");
    }
  });
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", handleResize);

// Ejecutar la función cada vez que la ventana cambia de tamaño
window.addEventListener("resize", handleResize);
