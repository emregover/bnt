document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "Kapat" : "Menü";
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    if (menuButton) menuButton.textContent = "Menü";
  });
});

const targets = document.querySelectorAll(
  ".platform-card, .component-card, .company-grid, .journey-grid > div, .capability-grid article, .manifesto h2"
);

targets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.12 }
);

targets.forEach((el) => observer.observe(el));