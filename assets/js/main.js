y = new Date().getFullYear();

document.getElementById("copyright").innerHTML = `&copy ${y} | Arjun Suresh`;

const nav = document.getElementById("nav");

const links = document.querySelectorAll(".nav-link");

function popUp(card) {
  let content;
  switch (card) {
    case "web":
      bg =
        "https://png.pngtree.com/background/20231030/original/pngtree-bold-and-dynamic-3d-illustration-of-black-and-red-abstract-technology-picture-image_5786699.jpg";

      content = {
        description:
          "A highly skilled web developer with over 2 years of experience in building responsive and dynamic web applications. Proficient in front-end and back-end technologies, with a strong focus on modern JavaScript frameworks, API integration, and database management. Adept at using a wide range of tools to streamline development workflows and ensure high-quality code delivery.",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "API",
          "PHP",
          "MySQL",
          "React",
          "Node.js",
        ],
        experience: "2+",
        tools: [
          "VS Code",
          "CPanel",
          "phpMyAdmin",
          "FileZilla",
          "Postman",
          "Git",
          "Docker",
          "Webpack",
          "Babel",
        ],
        featuredImage: "assets/img/laptop.png",
      };
      break;
    case "seo":
      bg =
        "https://c0.wallpaperflare.com/preview/187/945/117/black-and-red-laptop-keyboard.jpg";

      content = {
        description:
          "An experienced SEO specialist with a strong background in optimizing websites to achieve higher search engine rankings and increase organic traffic. Proficient in keyword research, on-page optimization, link building, and technical SEO. Skilled at analyzing data and implementing strategies that drive measurable results.",
        skills: [
          "Keyword Research",
          "On-Page SEO",
          "Technical SEO",
          "Link Building",
          "Content Optimization",
          "Google Analytics",
          "SEO Audits",
          "Competitor Analysis",
        ],
        experience: "3+ years",
        tools: [
          "Google Analytics",
          "Google Search Console",
          "SEMrush",
          "Ahrefs",
          "Moz",
          "Yoast SEO",
          "Screaming Frog",
          "Keyword Planner",
          "SurferSEO",
          "Google Tag Manager",
        ],
      };
      break;
    case "graphic":
      bg =
        "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/01/Google-Wallpapers-00047.png";

      content = {
        description:
          "A creative and detail-oriented graphic designer experienced in creating visually compelling designs for digital and print media. Skilled in translating client ideas into unique and impactful designs. Proficient in using industry-standard design software to produce high-quality work that meets branding and marketing goals.",
        skills: [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe InDesign",
          "Typography",
          "Branding",
          "Logo Design",
          "Print Design",
          "UI/UX Design",
          "Color Theory",
          "Visual Communication",
        ],
        experience: "4+ years",
        tools: [
          "Adobe Creative Suite",
          "Sketch",
          "Figma",
          "CorelDRAW",
          "Canva",
          "Procreate",
          "Wacom Tablet",
          "Microsoft PowerPoint",
          "Affinity Designer",
          "Adobe XD",
        ],
      };
      break;
    case "video":
      bg =
        "https://img.freepik.com/free-vector/realistic-background-futuristic-style_23-2149129125.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723939200&semt=ais_hybrid";
      break;
    default:
      // Optional: you can define a default background in case no case matches
      bg = "";
      break;
  }

  const skills = content.skills
    .map((skill) => `<div class="info-tag">${skill}</div>`)
    .join("");

  const tools = content.tools
    .map((tool) => `<div class="info-tag">${tool}</div>`)
    .join("");

  const modal = `<div class="modal" >
      <span class="close-btn">&times;</span>

       <section class="info-skills">
        <div class = "col1">  <div class="discription">${content.description}</div>
     <div class="skill-title"><h5>Skills I have</h5> </div> 
      <div class="skills">
        
      ${skills}      
      </div>     
     <div class="skill-title"><h5>Tools I use</h5> </div> 
      <div class="tools">
   
        ${tools} 
       </div></div>
         <div class = "col2"><img src="${content.featuredImage}" alt=""></div>
    
    </section>
    </div>`;

  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = modal;
  document.body.classList.add("lock-scroll");
  modalContainer.style.display = "block";
  const closeBtn = document.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modalContainer.style.display = "none";
      document.body.classList.remove("lock-scroll");
    });
  }
}

function scrollToSection(item) {
  const target = document.getElementById(item.id + "-target");
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
    });
  }
}
var ubBtn = document.getElementById("up-btn");
ubBtn.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  scrollValue = this.scrollY;
  if (scrollValue > 300) {
    ubBtn.classList.add("active");
  } else {
    ubBtn.classList.remove("active");
  }
});
