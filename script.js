const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

const filterButtons = document.querySelectorAll(".filter-button");
const logCards = document.querySelectorAll(".log-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    logCards.forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

// Stop placeholder social links from jumping to the top of the page.
// Replace href="#" in index.html with real links before publishing.
document.querySelectorAll("instagram-link").forEach(link => {
  link.addEventListener("click", event => {
    if (link.getAttribute("https://www.instagram.com/blueshiftcansat/") === "#") {
      event.preventDefault();
      alert("Replace this placeholder with your team's real social media link.");
    }
  });
});
document.querySelectorAll("[data-placeholder-link]").forEach(link => {
  link.addEventListener("click", event => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert("Replace this placeholder with your team's real social media link.");
    }
  });
});
document.querySelectorAll("[data-placeholder-link]").forEach(link => {
  link.addEventListener("click", event => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert("Replace this placeholder with your team's real social media link.");
    }
  });
});
