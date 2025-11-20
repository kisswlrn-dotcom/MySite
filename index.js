// Smooth Scroll
document.querySelectorAll(".header__menu__item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(item.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });

    document
      .querySelectorAll(".header__menu__item")
      .forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// Arrow-up 버튼
const arrowUp = document.querySelector(".arrow-up");
window.addEventListener("scroll", () => {
  arrowUp.style.display = window.scrollY > 300 ? "block" : "none";
});
arrowUp.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Portfolio filter
const categories = document.querySelectorAll(".category");
const projects = document.querySelectorAll(".project");

categories.forEach((catBtn) => {
  catBtn.addEventListener("click", () => {
    categories.forEach((btn) => btn.classList.remove("category--selected"));
    catBtn.classList.add("category--selected");

    const selected = catBtn.textContent.trim();
    projects.forEach((project) => {
      if (selected === "ALL" || project.dataset.category === selected) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});
// 햄버거 메뉴 토글
const hamburger = document.querySelector(".header__hamburger");
const menu = document.querySelector(".header__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("show");
});

// 메뉴 클릭 시 닫기
document.querySelectorAll(".header__menu__item").forEach((item) => {
  item.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      hamburger.classList.remove("active");
    }
  });
});
