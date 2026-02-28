// Scroll to Contact
function scrollToContact(){
    document.getElementById("contact")
    .scrollIntoView({behavior:"smooth"});
}

// Reveal Animation
window.addEventListener("scroll", function(){
    document.querySelectorAll(".reveal").forEach(function(el){
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});

// Skill Bar Animation
window.addEventListener("scroll", function(){
    document.querySelectorAll(".progress").forEach(function(bar){
        if(bar.getBoundingClientRect().top < window.innerHeight){
            bar.style.width = bar.getAttribute("data-width");
        }
    });
});

window.addEventListener("scroll", function(){
    const cards = document.querySelectorAll(".edu-card");

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(cardTop < windowHeight - 100){
            card.classList.add("active");
        }
    });
});
