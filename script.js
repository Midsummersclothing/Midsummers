(function () {
  "use strict";

  var nav = document.querySelector(".nav");
  var flower = document.querySelector(".hero-flower");
  var placeholders = document.querySelectorAll(".image-placeholder");

  function handleScroll() {
    var y = window.scrollY || window.pageYOffset;

    if (nav) {
      if (y > 40) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }

    if (flower && y < window.innerHeight) {
      flower.style.transform =
        "translateX(-50%) translateY(" + (y * 0.08) + "px)";
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });

  for (var i = 0; i < placeholders.length; i++) {
    (function (placeholder) {
      placeholder.addEventListener("mousemove", function (event) {
        var rect = placeholder.getBoundingClientRect();
        var x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
        var y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;

        placeholder.style.transform =
          "perspective(700px) rotateX(" +
          (-y) +
          "deg) rotateY(" +
          x +
          "deg)";
      });

      placeholder.addEventListener("mouseleave", function () {
        placeholder.style.transform = "";
      });
    })(placeholders[i]);
  }

  handleScroll();
})();
