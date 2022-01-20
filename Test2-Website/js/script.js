const navUl = document.querySelector(".nav-ul");
const times = document.getElementById("times");
const bar = document.getElementById("bar");

const left = document.getElementById("ctaLeft");
const right = document.getElementById("ctaRight");

const firstCta = document.querySelector(".first-slide-show");
const secondCta = document.querySelector(".second-slide-show");

const ctaFirstText = document.querySelector(".firstSlideShow-title");
const ctaSecondText = document.querySelector(".secondSlideShow-title");

const processGallery = document.getElementById("processGallery");
const allGallery = document.getElementById("allGallery")

const secondGallery = document.querySelector(".second-gallery");
const firstGallery = document.querySelector(".first-gallery");


const colorBuild = document.getElementById("colorBuild");

const testiFirst = document.getElementById("testiFirst");
const testiSecond = document.getElementById("testiSecond");
const testiThird = document.getElementById("testiThird");

const testimonialFirst = document.querySelector(".testimonial-first");
const testimonialSecond = document.querySelector(".testimonial-second");
const testimonialThird = document.querySelector(".testimonial-third");

testiFirst.addEventListener("click" , function(){
    testimonialFirst.classList.remove("hidden");
    testimonialSecond.classList.add("hidden");
    testimonialThird.classList.add("hidden");
    testiFirst.style.color = "#C00113";
    testiSecond.style.color = "white";
    testiThird.style.color = "white";
})
testiSecond.addEventListener("click" , function(){
    testimonialFirst.classList.add("hidden");
    testimonialSecond.classList.remove("hidden");
    testimonialThird.classList.add("hidden");
    testiSecond.style.color = "#C00113";
    testiFirst.style.color = "white";
    testiThird.style.color = "white";
})
testiThird.addEventListener("click" , function(){
    testimonialFirst.classList.add("hidden");
    testimonialSecond.classList.add("hidden");
    testimonialThird.classList.remove("hidden");
    testiThird.style.color = "#C00113";
    testiFirst.style.color = "white";
    testiSecond.style.color = "white";
})

processGallery.addEventListener("click" , function(){
    secondGallery.classList.add("hidden");
})

allGallery.addEventListener("click" , function(){
    secondGallery.classList.remove("hidden");
})




bar.addEventListener("click" , function(){
    bar.classList.add("hidden");
    times.classList.remove("hidden");
    navUl.style.animation = "nav 1s ease-in-out forwards"
})

times.addEventListener("click" , function(){
    times.classList.add("hidden");
    bar.classList.remove("hidden");
    navUl.style.animation = "navClose 1s ease-in-out forwards";
})

left.addEventListener("click", function(){
    firstCta.classList.remove("hidden");
    secondCta.classList.add("hidden");
    left.style.color = "#FEB62A;"
    left.style.color = "#FEB62A";
    right.style.color = "white";
    ctaFirstText.classList.remove("hidden");
    ctaSecondText.classList.add("hidden");
})


right.addEventListener("click", function(){
    firstCta.classList.add("hidden");
    secondCta.classList.remove("hidden");
    left.style.color = "white";
    right.style.color = "#FEB62A";
    ctaSecondText.classList.remove("hidden");
    ctaFirstText.classList.add("hidden")
})







