import { toggleNav } from "./nav.js";

const LoggedIn = localStorage.getItem("Check");

const logout = () => {
  localStorage.removeItem('Check');
};

document.querySelector(".menu-toggle").addEventListener("click", toggleNav);
document.querySelector(".logout").addEventListener("click", logout);
