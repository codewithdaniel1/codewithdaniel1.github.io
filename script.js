document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll(".mobile-nav nav a").forEach((link) => {
  link.addEventListener("click", () => {
    link.closest("details").open = false;
  });
});
