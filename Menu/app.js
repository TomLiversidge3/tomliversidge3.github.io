// array of vehicles and their details

const vehicles = [
    {
        id: 1,
        title: "BMW M4",
        category: "car",
        price: "£33,000",
        img: "beemw.PNG",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non euismod sapien. Curabitur vitae risus aliquam, porttitor ipsum vitae, pharetra neque."
    },
    {
        id: 2,
        title: "B2 Bomber",
        category: "plane",
        price: "£1.2 billion",
        img: "b2.PNG",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non euismod sapien. Curabitur vitae risus aliquam, porttitor ipsum vitae, pharetra neque."
    },
    {
        id: 3,
        title: "M1 Abrams",
        category: "tank",
        price: "£10 million",
        img: "m1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non euismod sapien. Curabitur vitae risus aliquam, porttitor ipsum vitae, pharetra neque."
    },
    {
        id: 4,
        title: "Sailboat",
        category: "boat",
        price: "£250,000",
        img: "sailboat.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non euismod sapien. Curabitur vitae risus aliquam, porttitor ipsum vitae, pharetra neque."
    },
    {
        id: 5,
        title: "Mclaren 12C",
        category: "car",
        price: "£70,000-120,000",
        img: "12c.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non euismod sapien. Curabitur vitae risus aliquam, porttitor ipsum vitae, pharetra neque."
    },
    {
        id: 6,
        title: "Police RIB (rigid inflatable boat)",
        category: "boat",
        price: "£50,000",
        img: "rib.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non euismod sapien. Curabitur vitae risus aliquam, porttitor ipsum vitae, pharetra neque."
    },
    {
        id: 7,
        title: "WW1 Mark IV",
        category: "tank",
        price: "£500,000",
        img: "mk4.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non euismod sapien. Curabitur vitae risus aliquam, porttitor ipsum vitae, pharetra neque."
    },
    {
        id: 8,
        title: "Mazda MX-5",
        category: "car",
        price: "£3,000",
        img: "mx5.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non euismod sapien. Curabitur vitae risus aliquam, porttitor ipsum vitae, pharetra neque."
    },
    {
        id: 9,
        title: "Audi TT Quattro S-line",
        category: "car",
        price: "£10,000",
        img: "auditts.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non euismod sapien. Curabitur vitae risus aliquam, porttitor ipsum vitae, pharetra neque."
    },
    {
        id: 10,
        title: "Concorde",
        category: "plane",
        price: "£2 billion",
        img: "concorde.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non euismod sapien. Curabitur vitae risus aliquam, porttitor ipsum vitae, pharetra neque."
    },
];


const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");



window.addEventListener("DOMContentLoaded", function(){
    displayVehicleOptions(vehicles);
});

filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;
        const vehicleCategory = vehicles.filter(function(vehicleOption){
            if(vehicleOption.category === category){
                return vehicleOption;
            }
            
        });
        if(category === "all"){
            displayVehicleOptions(vehicles);
        }
        else{
            displayVehicleOptions(vehicleCategory);
        }
    })
})






function displayVehicleOptions (vehicleOptions){
    let displayVehicles = vehicleOptions.map(function (item){
        //  console.log(item);
  
          return `<article class="menu-item">
          <img src=${item.img} class="photo">
          <div class="item-info">
              <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
          </div>
      </article>`;
      });
      displayVehicles = displayVehicles.join("");
      sectionCenter.innerHTML = displayVehicles;
}



