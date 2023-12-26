import {dataRegion} from '../data/data.js';
import { activeRegion } from "../scripts/showRegion.js";


const monumentsRegion = document.querySelector('.monuments_region');
const infoBlockMonument = document.querySelector('.info_block info_block_monument')
const body = document.querySelector('body');

let infoBlock = document.createElement('div');
infoBlock.setAttribute('class', 'info_block')
let closeInfoBlockMonument = document.createElement('span');
let closeButtonImg = document.createElement('img');
let title = document.createElement('h1');
let description = document.createElement('p');
let image = document.createElement('img');
let imageBlock = document.createElement('div');

monumentsRegion.addEventListener('click', (e) => {
    if (e.target.classList.contains('monumentItem')) {
        dataRegion.forEach(element => {
            if(activeRegion == element.id) {
                element.monumentsInMap.forEach(monument => {
                    if (monument.id == e.target.id) {
                        showInfoMonuments(monument)
                    }
                })
            }
        })
    }
})

function showInfoMonuments(monument) {

    infoBlock.classList.add('info_block_monument');
    closeInfoBlockMonument.classList.add('close_info_block_monument');
    closeButtonImg.classList.add('close_info_block_img');

    closeButtonImg.setAttribute('src', './img/close.png');

    title.innerHTML = monument.title;
    description.innerHTML = monument.description;
    description.setAttribute("class", 'description_monument')
    
    monument.mainImage.forEach(img => {
        image.src = img;
        image.setAttribute('class', 'mainImage')
        
    })
    imageBlock.classList.add('image_block')
    imageBlock.appendChild(image);
    infoBlock.appendChild(closeInfoBlockMonument);
    infoBlock.appendChild(title);
    infoBlock.appendChild(imageBlock);
    infoBlock.appendChild(description);
    
    closeInfoBlockMonument.appendChild(closeButtonImg);

    body.appendChild(infoBlock);

    closeInfoBlock();
}

function closeInfoBlock() {
    infoBlock.addEventListener('click', (e)=>{
        if (e.target.classList.contains("close_info_block_monument") || e.target.classList.contains("close_info_block_img")) {
            body.removeChild(infoBlock);
        }
    })
}
