const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  document.addEventListener("scroll", () => {
    document.body.classList.remove("nav-open");
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

function turnOffCards(x) {
  var cardElement = document.getElementsByClassName("card");
  if (x.matches) {
    for (let i = 0; i < cardElement.length; i++) {
      cardElement[i].setAttribute("data-tilt-scale", "1");
    }
  } else {
    for (let i = 0; i < cardElement.length; i++) {
      cardElement[i].setAttribute("data-tilt-scale", "1.4");
    }
  }
}

var screenSize = window.matchMedia("(max-width: 720px)");

window.addEventListener("resize", turnOffCards(screenSize));
