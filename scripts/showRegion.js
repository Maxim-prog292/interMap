let activeRegion;
export { activeRegion };
import {dataRegion} from '../data/data.js';

document.addEventListener("DOMContentLoaded", (elem) => {
  elem.preventDefault();

  const openRegion = document.querySelector(".open_region");
  const map = document.querySelector("#map_inter");
  const rayons = document.querySelectorAll("path");
  const exitRegionMode = document.querySelector(".close_button_sidebar");
  const monumentsRegion = document.querySelector('.monuments_region');


  let image;

  
  const arrayRegionImageSRC = [
    "kholm",
    "molokovo",
    "sonkovo",
    "vesegonsk",
    "sandovo",
    "lesnoi",
    "bejeck",
    "kesgor",
    "kashin",
    "kalyazin",
    "kimri",
    "konakovskiy",
    "kalininskiy",
    "rameshki",
    "lihoslavl",
    "torjokskiy",
    "starickiy",
    "zubtsov",
    "rzevskiy",
    "maksatiha",
    "spirovskiy",
    "vishniyvolochok",
    "udomelskiy",
    "bologovskiy",
    "kuvshinovskiy",
    "selizjarovskiy",
    "firovskiy",
    "ostashkovskiy",
    "penovskiy",
    "oleninskiy",
    "belskiy",
    "nelidovskiy",
    "andreapolskiy",
    "jarovskiy",
    "zapadnodvinskiy",
    "toropeckiy",
    "tver"
  ];

  rayons.forEach((elem) =>
    elem.addEventListener("click", (element) => {
      createPathRegionElement(element.target.classList.value);
    })
  );

  function createPathRegionElement(classValue) {
    if (arrayRegionImageSRC.includes(classValue)) {
      image = document.createElement("img");

      image.setAttribute("src", `./img/region/${classValue}.svg`);
      image.setAttribute("alt", `${classValue}`);
      image.setAttribute("id", "regionIMG");
      image.setAttribute("style", "position: relative");
      activeRegion = classValue;
      showRegionElement();
      openRegion.appendChild(image);
      showMonuments(activeRegion)
    }
  }

  exitRegionMode.addEventListener("click", () => exitRegion(image));
  function exitRegion(image) {
    hideRegionElement();
    deleteMonuments();
    openRegion.removeChild(image);
  }

  function showRegionElement() {
    openRegion.classList.add("region_opacity_remove");
    openRegion.classList.remove("region_opacity");
    map.classList.add("map_opacity");
    map.classList.remove("map_opacity_remove");
  }
  function hideRegionElement() {
    openRegion.classList.remove("region_opacity_remove");
    openRegion.classList.add("region_opacity");
    map.classList.add("map_opacity_remove");
    map.classList.remove("map_opacity");
  }

  function showMonuments(activeRegion) {
        dataRegion.forEach(element => {
            if(element.id == activeRegion) {

                element.monumentsInMap.forEach(elem => {
                  let monument = document.createElement('img');
                  if (elem.id == 'city') {
                    monument.setAttribute('src', "../img/monuments/city.png");
                  } else {
                    monument.setAttribute('src', "../img/monuments/dostoprimechatelinosti.png");
                  }
                    monument.setAttribute('id', elem.id)
                    monument.classList.add('monumentItem');
                    monument.style = `top: ${elem.x}px; left: ${elem.y}px`;
                    monumentsRegion.appendChild(monument);
                })
            }
        })
  }

  function deleteMonuments() {
    const monumentItems = monumentsRegion.querySelectorAll('.monumentItem');
    monumentItems.forEach(elem => {
        monumentsRegion.removeChild(elem);
    })
    
  }
  function changeEmbient() {

  }
});


