const cars = [
    {
        id: 2,
        manufacturer: "Porsche",
        model: "Porsche 918 Spyder",
        img: "assets/porsche-918-weissach-wrap-miami-11.jpg",
        text: "This Chrome red porsche 918 spyder sold for £1.65m"

    },
    {
        id: 2,
        manufacturer: "Car Manufacturer : Lamborghini",
        model: "Lamborghini Aventador SVJ Roadster",
        img: "assets/lambo1.jpg",
        text: "This Lamborghini svj roadster sold for £500,000. It is all wheel drive and makes 770hp from its v12 engine. It reaches its 0-62 (0-100kmh) in "
    },
    {
        id: 3,
        manufacturer: "Car Manufacturer : Ferrari",
        model: "Ferrari 488",
        img: "assets/488.jpg",
        text: "The Ferrari 418 "
    },
    {
        id: 4,
        manufacturer: "Car Manufacturer : Porsche",
        model: "Porsche Carrera GT",
        img: "assets/por2.jpeg",
        text: "The Carrera GT is a somwhat old but considerably sought after supercar, it initally retailed for £360k but in 2023 it sells for up to £1.6 million."
    }
];

// select all items 
const img = document.getElementById("car-img")
const manufacturer = document.getElementById("manufacturer")
const model = document.getElementById("model")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// set starting item

let currentItem = 0;


// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showCar();
});


// show car based on item

function showCar(){
    const item = cars[currentItem];
    img.src = item.img;
    manufacturer.textContent = item.name;
    model.textContent = item.model
    info.textContent = item.text;
}

//show next car

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > cars.length - 1){
        currentItem = 0;
    }
    showCar(currentItem);
})

// show previous car

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = cars.length - 1;
    }
    showCar(currentItem);
})


// random car button 
let hey = [1, 2, 3 ,4 ];
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * cars.length);
    console.log(currentItem);
    showCar();
    

});



