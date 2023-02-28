
// nav functionality

const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener("click", function(){

    if(links.classList.contains("show-links")){
        links.classList.remove("show-links")
    } else {
        links.classList.add("show-links")
    }
});

const closeNav = document.querySelector("main")

closeNav.addEventListener("click", function(){
    links.classList.remove("show-links");
});


// Website copy carousel

const websites = [
    {
        id: 1,
        title: "Waitrose",
        backgroundImage: "url('waitrose/cover.png')",
        link: "waitrose/index.html",
        ogSiteLink: "https://www.waitrose.com/ecom/shop/browse/offers/highlights/my-waitrose"
    },
    {
        id: 2,
        title: "KTM",
        backgroundImage: "url('KTM/Cover.png')",
        link: "KTM/index.html",
        ogSiteLink: "https://www.ktm.com/en-gb/models/enduro/4-stroke/ktm-350-exc-f-sixdays2023.html"
    }
];


const title = document.getElementById("title-carousel");
const carouselImg = document.getElementById("carousel-image");
const link = document.getElementById("site-link");
const originalSiteLink = document.getElementById("original-site-link");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentItem = 0;

//load initial website 

window.addEventListener("DOMContentLoaded", function(){
    showWebsite[currentItem]  
});


function showWebsite(website) {
    const item = websites[website];
    title.textContent = item.title;    
    carouselImg.style.backgroundImage = item.backgroundImage;
    link.href = item.link;
    originalSiteLink.href = item.ogSiteLink;
};

//show next website

nextBtn.addEventListener("click", function(){
    currentItem++;
    if (currentItem > websites.length - 1){
        currentItem = 0;
    }
    showWebsite(currentItem)
});

//show previous website

prevBtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = websites.length - 1;
    }
    showWebsite(currentItem)
});













