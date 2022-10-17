const userNavToggle = document.querySelector(".user-menu-toggle");
let timesUp = false;

export const openNav = () => {
  const menu = document.querySelector(".user-menu");
  const arrow = document.querySelector(".user-menu-toggle i");
  arrow.classList.toggle("flip");
  menu.classList.toggle("user-nav");
};

export const start = (e) => {
  e.preventDefault();
  timesUp = false;
  setTimeout(() => {
    timesUp = true;
  }, 250);
  userNavToggle.addEventListener("touchend", decide, { once: true });
};

export const move = (e) => {
  const top = e.touches[0].pageY;
  userNavToggle.style.top = `${top}px`;
};

const decide = () => {
  if (timesUp === true) {
    return;
  }
  if (timesUp === false) {
    openNav();
    return;
  }
};

userNavToggle.addEventListener("touchstart", start);
userNavToggle.addEventListener("touchmove", move);
