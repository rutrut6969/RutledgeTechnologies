const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// --- Mobile menu auto-close helpers ---
function closeMenu() {
  if (hamMenu && offScreenMenu && hamMenu.classList.contains("active")) {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
  }
}

// 1) Close when any menu link is clicked
document.querySelectorAll(".off-screen-menu a, .nav-links a").forEach((a) => {
  a.addEventListener("click", closeMenu);
});

// 2) Close on scroll (any meaningful movement)
let lastY = window.scrollY;
window.addEventListener(
  "scroll",
  () => {
    if (Math.abs(window.scrollY - lastY) > 10) closeMenu();
    lastY = window.scrollY;
  },
  { passive: true }
);

// 3) Close on hashchange (e.g., #pricing jump)
window.addEventListener("hashchange", closeMenu);

// 4) Close when resizing up to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) closeMenu();
});

// 5) Optional: click outside to close
document.addEventListener("click", (e) => {
  if (
    offScreenMenu.classList.contains("active") &&
    !offScreenMenu.contains(e.target) &&
    !hamMenu.contains(e.target)
  ) {
    closeMenu();
  }
});
