const btn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const tabBtns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");
const date = document.getElementById("date");

// toggle nav-links on burger menu
btn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// navigate tabs
about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  //   console.log(id);
  const el = document.getElementById(id);
  //   console.log(el);
  if (id) {
    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    el.classList.add("active");
  }
});

date.innerHTML = new Date().getFullYear();
