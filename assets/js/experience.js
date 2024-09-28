
function exp() {
  const exp = [
    {
      company: "ICubics Technologies",
      tenure: "2022- Present",
      role: "Web Developer",
    },
    {
      company: "Freelancer",
      tenure: "2020- 2022",
      role: "Designer/Developer",
    },
    {
      company: "Techademy",
      tenure: "2019- 2020",
      role: "Graphic Designer",
    },
    {
      company: "Digital Press",
      tenure: "2018- 2019",
      role: "Graphic Designer",
    },
  ];

  const list = document.getElementById("company-list");
  const item = exp
    .map(
      (e) => `<div class="company">
          <div class="company-header">
              <h3>${e.company}</h3>
              <span class="role">${e.role}</span>
          </div>
          <p class="tenure">${e.tenure}</p>
      </div>`
    )
    .join("");
  list.innerHTML = item;
}


document.addEventListener('DOMContentLoaded',exp);