window.addEventListener("load", function (event) {
  const loaderHolder = document.querySelector(".loader-holder");
  const navbar = document.querySelector(".navbar");
  if (event.target.readyState === "complete") {
    setTimeout(function () {
      loaderHolder.style.opacity = "0";
      loaderHolder.style.display = "none";
      setTimeout(function name(params) {
        navbar.style.opacity = "1";
      }, 1000);
    }, 3000);
  }
});
