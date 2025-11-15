const themeBtn = document.getElementById("theme-toggle");
const body = document.body;
const menuBtn = document.getElementById("menu-btn");
const sidePanel = document.getElementById("sidePanel");

/* THEME TOGGLE */
themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    themeBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

/* MENU TOGGLE */
menuBtn.addEventListener("click", () => {
    sidePanel.classList.toggle("open");
});

/* CLOSE PANEL WHEN CLICK OUTSIDE */
document.addEventListener("click", (e) => {
    if (!sidePanel.contains(e.target) && !menuBtn.contains(e.target)) {
        sidePanel.classList.remove("open");
    }
});
