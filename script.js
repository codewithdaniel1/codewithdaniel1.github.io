const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  mobileMenu.hidden = true;
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  mobileMenu.hidden = isOpen;
});

mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("resize", () => {
  if (window.innerWidth > 620) closeMenu();
});

document.querySelector("#year").textContent = new Date().getFullYear();
