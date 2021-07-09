let burger = document.querySelector(".burger");
let sitenav = document.querySelector(".sitenav");

burger.addEventListener("click", () => {
  sitenav.classList.toggle("active");
  burger.classList.toggle("is-open");
});

let direcBtn = document.querySelectorAll(".directors__btn");

direcBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.classList.toggle("directors__item--quote");
    item.classList.toggle("directors__btn--close");
  });
});
