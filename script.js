// ================= SMOOTH SCROLL =================

function scrollToContact(){
    document.getElementById("contact")
    .scrollIntoView({
        behavior:"smooth"
    });
}

// ================= REVEAL ANIMATION =================

window.addEventListener("scroll", function(){

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(function(el){

        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }

    });

});

// ================= SKILL BAR ANIMATION =================

window.addEventListener("scroll", function(){

    const skillBars = document.querySelectorAll(".progress");

    skillBars.forEach(function(bar){

        const barTop = bar.getBoundingClientRect().top;

        if(barTop < window.innerHeight - 50){

            bar.style.width = bar.getAttribute("data-width");

        }

    });

});

// ================= EDUCATION CARD ANIMATION =================

window.addEventListener("scroll", function(){

    const cards = document.querySelectorAll(".edu-card");

    cards.forEach(function(card){

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.classList.add("active");

        }

    });

});

// ================= EXPERIENCE CARD ANIMATION =================

window.addEventListener("scroll", function(){

    const cards = document.querySelectorAll(".exp-card");

    cards.forEach(function(card){

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.classList.add("active");

        }

    });

});

// ================= PROJECT CARD ANIMATION =================

window.addEventListener("scroll", function(){

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(function(card){

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.classList.add("active");

        }

    });

});

// ================= STRENGTH CARD ANIMATION =================

window.addEventListener("scroll", function(){

    const strengthCards = document.querySelectorAll(".strength-card");

    strengthCards.forEach(function(card){

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.classList.add("active");

        }

    });

});

// ================= ACTIVE NAV LINK =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 150){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("nav-active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("nav-active");

        }

    });

});

// ================= TYPEWRITER EFFECT =================

const texts = [
    "CSE Student",
    "Video Editor",
    "Web Developer",
    "IEEE Multimedia Master",
    "Creative Designer"
];

let speed = 100;
const textElement = document.querySelector(".hero h3");

let textIndex = 0;
let charIndex = 0;

function typeWriter(){

    if(charIndex < texts[textIndex].length){

        textElement.innerHTML += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, speed);

    }
    else{

        setTimeout(eraseText, 1500);

    }

}

function eraseText(){

    if(charIndex > 0){

        textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseText, 50);

    }
    else{

        textIndex++;

        if(textIndex >= texts.length){

            textIndex = 0;

        }

        setTimeout(typeWriter, 500);

    }

}

document.addEventListener("DOMContentLoaded", function(){

    textElement.innerHTML = "";

    typeWriter();

});

// ================= BACK TO TOP BUTTON =================

// HTML এ footer এর আগে এটা add করবে:

/*

<button id="topBtn">↑</button>

*/

// JS

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }
    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ================= HERO IMAGE PARALLAX =================

window.addEventListener("mousemove", function(e){

    const image = document.querySelector(".image-frame");

    let x = (window.innerWidth / 2 - e.pageX) / 30;
    let y = (window.innerHeight / 2 - e.pageY) / 30;

    image.style.transform = `translate(${x}px, ${y}px)`;

});

// ================= CONSOLE MESSAGE =================

console.log("Welcome to AH Dipto Portfolio Website 🚀");
