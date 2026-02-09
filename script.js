// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // close menu after clicking a link
  navMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Current year
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Smooth scroll for anchor links (nice feel)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Reviews: show only 3 by default, toggle all
(() => {
  const grid = document.getElementById("reviewsGrid");
  const btn = document.getElementById("toggleReviews");
  if (!grid || !btn) return;

  const items = Array.from(grid.querySelectorAll(".quote"));
  const LIMIT = 3;

  function collapse() {
    items.forEach((el, i) => {
      if (i >= LIMIT) el.classList.add("is-hidden");
    });
    btn.textContent = "Більше відгуків";
    btn.setAttribute("aria-expanded", "false");
  }

  function expand() {
    items.forEach((el) => el.classList.remove("is-hidden"));
    btn.textContent = "Згорнути відгуки";
    btn.setAttribute("aria-expanded", "true");
  }

  // якщо відгуків <= 3 — кнопку ховаємо
  if (items.length <= LIMIT) {
    btn.style.display = "none";
    return;
  }

  let opened = false;
  collapse();

  btn.addEventListener("click", () => {
    opened = !opened;
    opened ? expand() : collapse();
  });
})();
