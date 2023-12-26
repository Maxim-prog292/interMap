import { dataRegion } from "../data/data.js";

document.addEventListener('DOMContentLoaded', (elem) => {
    elem.preventDefault()
    const sideBarTitle = document.querySelector('.sidebar_content_title');
    const sideBarDescription = document.querySelector('.sidebar_content_description');
    const sideBarImage = document.querySelector('.sidebar_content_img');
    const rayons = document.querySelectorAll('path');

    rayons.forEach((rayon) => {
        rayon.addEventListener('click', (e) => {
            dataRegion.filter((dataElement) => {
                if (dataElement.id == e.target.classList.value) {
                    sideBarTitle.textContent = dataElement.title;
                    sideBarDescription.textContent = dataElement.description;
                    sideBarImage.setAttribute('src', `./img/geraldika/${dataElement.img}.png`);
                } 
            }) 
        })
    })
})