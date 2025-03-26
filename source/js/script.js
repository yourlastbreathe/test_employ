const dropdown = document.querySelector('.dropdown');
const header = document.querySelector('.dropdown__header');
const items = document.querySelectorAll('.dropdown__item');

header.addEventListener("click", () => {
  dropdown.classList.toggle("open") | header.classList.toggle('dropdown__header--active');
});

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    header.textContent = item.textContent;
    dropdown.classList.remove("open") | header.classList.remove('dropdown__header--active');
  });
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open") | header.classList.remove('dropdown__header--active');
  }
});

const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

slider.addEventListener("input", function () {
  sliderValue.textContent = slider.value + "%";
});

const burger = document.querySelector('.burger');
const headerWrapper = document.querySelector('.header__list');

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  headerWrapper.classList.toggle("active");
});