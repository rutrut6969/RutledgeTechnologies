document
  .getElementById("cta-book")
  ?.addEventListener("click", () => window.va?.("track", "BookClick"));
document
  .getElementById("cta-call")
  ?.addEventListener("click", () => window.va?.("track", "CallClick"));
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-add-inquiry")) {
    window.va?.("track", "AddInquiry");
  }
});

export const products = [
  {
    id: "wiper-22",
    name: 'Wiper Blades (22")',
    price: 24.99,
    img: "/images/portfolio/mock-auto-repair/products/wiper.jpg",
  },
  {
    id: "battery-oem",
    name: "OEM Battery",
    price: 139.99,
    img: "/images/.../battery.jpg",
  },
  {
    id: "air-filter",
    name: "Engine Air Filter",
    price: 19.99,
    img: "/images/.../air-filter.jpg",
  },
  {
    id: "tire-215-55r17",
    name: "All-Season Tire 215/55R17",
    price: 109.99,
    img: "/images/.../tire.jpg",
  },
];

const hamMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-links");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

function closeMenu() {
  if (hamMenu && navMenu && hamMenu.classList.contains("active")) {
    hamMenu.classList.remove("active");
    navMenu.classList.remove("active");
  }
}

document.querySelectorAll(".nav-links a, .dropdown-menu a").forEach((a) => {
  a.addEventListener("click", closeMenu);
});

let lastY = window.scrollY;
window.addEventListener(
  "scroll",
  () => {
    if (Math.abs(window.scrollY - lastY) > 10) closeMenu();
    lastY = window.scrollY;
  },
  { passive: true }
);

window.addEventListener("hashchange", closeMenu);
window.addEventListener("click", (e) => {
  if (
    navMenu.classList.contains("active") &&
    !navMenu.contains(e.target) &&
    !hamMenu.contains(e.target)
  ) {
    closeMenu();
  }
});

const dropdowns = document.querySelectorAll(".dropdown-menu");
