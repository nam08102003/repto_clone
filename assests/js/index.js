const menumobile = document.querySelector(".menu-mobile");
const iconbar = document.querySelector(".icon-menu-mobile");
const iconclose = document.querySelector(".icon-close");
console.log(iconbar);
iconbar.addEventListener("click", function () {
  menumobile.classList.add("show");
});

iconclose.addEventListener("click", function () {
  menumobile.classList.remove("show");
});
