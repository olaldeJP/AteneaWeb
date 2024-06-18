const slideDerecho = document.querySelector("#botonSlideDerecha");
const slideIzquierda = document.querySelector("#botonSlideIzquierda");
const slider = document.querySelector(".slider");
const sliderTrack = document.querySelector(".slide-track");
const cardsStaff = document.querySelector(".carStaff");
/*
document.addEventListener("DOMContentLoaded", function () {
  let getImg = "1.jpg";

  cardsStaff.style.backgroundImage = `url(../img/1.jpg)`;
  cardsStaff.style.backgroundSize = "cover";
  cardsStaff.style.backgroundPosition = "center";
});
*/

// Manejo de eventos para velocidad rápida
slideDerecho.addEventListener("mouseover", () => {
  slider.classList.add("sliderFast");
  sliderTrack.classList.add("sliderFast");
});

slideDerecho.addEventListener("mouseout", () => {
  slider.classList.remove("sliderFast");
  sliderTrack.classList.remove("sliderFast");
});

// Manejo de eventos para dirección inversa
slideIzquierda.addEventListener("mouseover", () => {
  slider.classList.add("sliderIzquierda");
  sliderTrack.classList.add("sliderIzquierda");
});

slideIzquierda.addEventListener("mouseout", () => {
  slider.classList.remove("sliderIzquierda");
  sliderTrack.classList.remove("sliderIzquierda");
});
