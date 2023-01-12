let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".header-navigation");
let content = document.querySelector(".content");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  content.classList.toggle("active");
});
