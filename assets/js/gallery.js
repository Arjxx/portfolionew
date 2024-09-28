document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img[loading='lazy']");
  
    const lazyLoad = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    };
  
    const observer = new IntersectionObserver(lazyLoad, {
      rootMargin: "0px 0px 300px 0px",
    });
  
    lazyImages.forEach((img) => {
      observer.observe(img);
    });
  
    var el = document.getElementById("all");
    displayImages(el);
  });



  
function displayImages(item) {
    const images = [
      { id: 1, src: "img/portfolio/2972660 copy-min.jpg", category: "print" },
      { id: 2, src: "img/portfolio/christmas-min.jpg", category: "web" },
      { id: 3, src: "img/portfolio/onamfest-min.jpg", category: "print" },
      { id: 4, src: "img/portfolio/dbtp1.jpg", category: "print" },
      { id: 5, src: "img/portfolio/dbtp2.jpg", category: "print" },
      { id: 6, src: "img/portfolio/instagram-min.jpg", category: "web" },
      { id: 7, src: "img/portfolio/KS billboard-min.jpg", category: "web" },
      { id: 8, src: "img/portfolio/muthoot flyer -min.jpg", category: "print" },
      { id: 9, src: "img/portfolio/shoe1.jpg", category: "print" },
      { id: 10, src: "img/portfolio/martian.jpg", category: "illustration" },
      { id: 11, src: "img/portfolio/jalamarmaram.jpg", category: "print" },
      { id: 12, src: "img/portfolio/LOGOS.jpg", category: "illustration" },
      {
        id: 13,
        src: "img/portfolio/cat illustration.jpeg",
        category: "illustration",
      },
      { id: 14, src: "img/portfolio/Timesup.jpg", category: "web" },
      { id: 15, src: "img/portfolio/lush.jpg", category: "print" },
      { id: 16, src: "img/portfolio/lush2.jpg", category: "print" },
      { id: 17, src: "img/portfolio/merry.jpg", category: "illustration" },
      {
        id: 18,
        src: "img/portfolio/dance-illustration.jpg",
        category: "illustration",
      },
      { id: 19, src: "img/portfolio/cowin.jpg", category: "print" },
      { id: 20, src: "img/portfolio/ali.jpg", category: "print" },
      { id: 21, src: "img/portfolio/carwash-min.PNG", category: "print" },
      { id: 22, src: "img/portfolio/Curio.jpg", category: "web" },
      { id: 23, src: "img/portfolio/instagram2.jpg", category: "web" },
      { id: 24, src: "img/portfolio/dpharm.jpg", category: "web" },
      { id: 25, src: "img/portfolio/tiger.jpg", category: "illustration" },
      { id: 26, src: "img/portfolio/budda-min.PNG", category: "web" },
      { id: 27, src: "img/portfolio/groovadd.jpg", category: "web" },
      { id: 28, src: "img/portfolio/budda2.jpg", category: "web" },
      { id: 29, src: "img/portfolio/moto ad.jpg", category: "web" },
      { id: 30, src: "img/portfolio/Menucover.jpeg", category: "print" },
    ];
  
    let processedImages = images;
  
    if (item !== undefined) {
      if (item.id !== "all") {
        processedImages = images.filter(function (image) {
          return image.category === item.id;
        });
      }
  
      document.querySelectorAll(".sort-btn").forEach((btn) => {
        if (btn.id == item.id) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    }
  
    const imageElement = processedImages
      .map(
        (image) =>
          `<div class="${image.category}">
              <img src="assets/${image.src}" alt="Image ${image.id}" class="image-item" loading="lazy"/>
          </div>`
      )
      .join("");
  
    const container = document.querySelector(".container-gallery");
    container.innerHTML = imageElement;
  
    // Lightbox functionality
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeBtn = document.querySelector(".close");
  
    document.querySelectorAll(".image-item").forEach((item) => {
      item.addEventListener("click", function () {
        lightbox.style.display = "block";
        lightboxImage.src = this.src;
      });
    });
  
    closeBtn.onclick = function () {
      lightbox.style.display = "none";
    };
  
    // Close lightbox when clicking outside of the image
    lightbox.onclick = function (event) {
      if (event.target === lightbox) {
        lightbox.style.display = "none";
      }
    };
  }
  