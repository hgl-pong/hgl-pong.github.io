window.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll("nav a");
  var sections = document.querySelectorAll("section");
  var header = document.querySelector("header");
  var headerHeight = header.offsetHeight;
  var main = document.querySelector("main");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = this.getAttribute("href");
      var targetSection = document.querySelector(targetId);
      var targetSectionTop = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetSectionTop,
        behavior: "smooth",
      });

      // 调整 main 元素的位置
      main.style.position = "relative";
      main.style.top = headerHeight + "px";
    });
  });
});
