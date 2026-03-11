const dotsBtn = document.getElementById("dotsBtn");
const menu = document.getElementById("menu");

function closeMenu() {
  menu.classList.remove("open");
  dotsBtn.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  const isOpen = menu.classList.toggle("open");
  dotsBtn.setAttribute("aria-expanded", String(isOpen));
}

dotsBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Close when clicking anywhere outside
document.addEventListener("click", () => closeMenu());

// Close when pressing Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Close menu after clicking a menu item
menu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => closeMenu());
});