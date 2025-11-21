// DARK/LIGHT THEME
const themeBtn=document.getElementById("themeToggle");
themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    themeBtn.textContent=document.body.classList.contains("dark")?"☀️":"🌙";
});

// CAROUSEL
let slideIndex=0;
function showSlides(){
    let slides=document.getElementsByClassName("slides");
    for(let s of slides) s.style.display="none";
    slideIndex++;
    if(slideIndex>slides.length) slideIndex=1;
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,4000);
}
showSlides();

// SLIDER MENU
const menu = document.getElementById("sideMenu");
const hamburger = document.getElementById("hamburger");

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

