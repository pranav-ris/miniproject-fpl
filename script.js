const body = document.body;
const toggleBtn = document.getElementById("toggle-btn");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Update button text
    if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});
let index = 0;
const slides = document.querySelectorAll(".slide");

// Show first slide initially
showSlide(index);

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);
