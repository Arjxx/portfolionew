document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  const navbar = document.getElementById("navbar");
  const slide = document.querySelector(".slide");

  slide.classList.add("active");
  document.body.classList.add("lock-scroll");
  /////// Hide loader
  setTimeout(() => {
    loader.style.height = "0px";
    loader.style.opacity = "0";
  }, 3000);

  //////animate navbar
  setTimeout(() => {
    navbar.style.opacity = "1";
    navbar.style.transform = "translateY(0)";
    document.body.classList.remove("lock-scroll");
  }, 4000);

  
});
