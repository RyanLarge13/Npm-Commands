export const toggleNav = (e) => {
  const spans = document.querySelectorAll("header span");
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
  spans.forEach((span) => span.classList.toggle("open"));
};
