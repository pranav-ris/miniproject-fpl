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

// Toggle menu on click for mobile
hamburger.addEventListener("click", () => {
    if (menu.style.right === "0px") {
        menu.style.right = "-250px";
    } else {
        menu.style.right = "0";
    }
});

// Optional: close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.style.right = "-250px";
    }
});
