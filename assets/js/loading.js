document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
  
    const navbar = document.getElementById("navbar");
    const hi = document.querySelector(".slide");
  
    hi.classList.add("active");
    document.body.classList.add("lock-scroll");
    // Hide loader after 10 seconds
    setTimeout(() => {
      loader.style.height = "0px";
      loader.style.opacity = "0";
    }, 3000);
  
    // Show and animate navbar after 11 seconds
    setTimeout(() => {
      navbar.style.opacity = "1";
      navbar.style.transform = "translateY(0)";
      document.body.classList.remove("lock-scroll");
    }, 4000);
    ///////scroll box
  
    const burger = document.getElementById("burger-icon");
    links.forEach((link) => {
      link.addEventListener("click", function () {
        scrollToSection(link);
        if (nav.classList.contains("show")) {
          nav.classList.toggle("show");
        }
        burger.classList.toggle("active");
      });
    });
  
    burger.addEventListener("click", function () {
      this.classList.toggle("active");
      nav.classList.toggle("show");
    });
  });