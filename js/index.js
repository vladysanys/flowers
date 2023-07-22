const buttonBurger = document.querySelector(".header_box-burger");
buttonBurger.addEventListener("click", () => {
  buttonBurger.querySelector(".header_box-burger_lines").classList.toggle("header_box-burger_lines-anim")
});
