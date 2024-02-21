document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const fadeElements = document.querySelectorAll(".fade-element");

    fadeElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight / 1.5) {
        element.classList.add("opacity-100");
      } else {
        element.classList.remove("opacity-100");
      }
    });
  });
});
