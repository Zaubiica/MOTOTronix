// assets/js/main.js
(function () {
  const path = window.location.pathname.replace(/\/+$/, "");
  const links = document.querySelectorAll(".nav-item");

  links.forEach(a => {
    const href = a.getAttribute("href");
    if (!href) return;

    // сравнение по "край" (работи и при под-папки)
    const normalized = href.replace(/\/+$/, "");
    if (path.endsWith(normalized)) {
      a.classList.add("active");
    }
  });
})();
