const botIzq = document.querySelector("#botonIzqStaff");
const botDer = document.querySelector("#botonDerStaff");
const sliderTrack = document.querySelector(".slide-track");
botIzq.addEventListener("mouseover", () => {
  sliderTrack.classList.add("moveFastLeft");
});
botDer.addEventListener("mouseover", () => {
  sliderTrack.classList.add("moveFastRight");
});

botIzq.addEventListener("mouseout", () => {
  sliderTrack.classList.remove("moveFastLeft");
});
botDer.addEventListener("mouseout", () => {
  sliderTrack.classList.remove("moveFastRight");
});
