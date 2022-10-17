import { openNav, start, move } from "../partials/UserMenu/UserMenu.js";

localStorage.setItem("Check", "true");

const logout = () => {
  localStorage.removeItem("Check");
};
