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
const sidePanel = document.getElementById("sideMenu");
const menuBtn = document.getElementById("hamburger");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    sidePanel.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if (!sidePanel.contains(e.target) && !menuBtn.contains(e.target)) {
        sidePanel.classList.remove("open");
    }
});
// Get username from localStorage
let user = localStorage.getItem("focusFuelName");

// Display on navbar if exists
if (user) {
    document.getElementById("displayName").textContent = "👤 " + user;
} else {
    document.getElementById("displayName").textContent = "Guest";
}