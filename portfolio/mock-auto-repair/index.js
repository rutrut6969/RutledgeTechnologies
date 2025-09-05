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
