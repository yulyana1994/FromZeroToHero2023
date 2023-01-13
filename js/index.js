let check = document.querySelector(".check");
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".header-navigation");
let content = document.querySelector(".content");
check.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  content.classList.toggle("unactive");
});

let changeTheme = document.querySelector(".change-theme");
let body = document.querySelector("body");
changeTheme.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
});

let offset = 0;
let sliderLine = document.querySelector(".slider-line");
let sliderNext = document.querySelector(".slider-next");
let sliderPrev = document.querySelector(".slider-prev");

sliderNext.addEventListener("click", function () {
  offset = offset + 256;
  if (offset > 768) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});

sliderPrev.addEventListener("click", function () {
  offset = offset - 256;
  if (offset < 0) {
    offset = 768;
  }
  sliderLine.style.left = -offset + "px";
});
