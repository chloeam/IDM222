// RESPONSIVE NAVIGATION

burger.addEventListener("click", toggleBurger);

function toggleBurger() {
  console.log('toggleBurger called');

  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');

  burger.classList.toggle('is-open');
  menu.classList.toggle('is-visible');
}
