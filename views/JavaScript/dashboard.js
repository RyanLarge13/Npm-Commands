localStorage.setItem("Check", "true");

const logout = () => {
  localStorage.removeItem("Check");
};

document.querySelector(".logout").addEventListener("click", logout);
