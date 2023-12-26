import { dataRegion } from "../data/data.js";
import { activeRegion } from "../scripts/showRegion.js";

document.addEventListener("DOMContentLoaded", (elem) => {
  elem.preventDefault();

  const aboutButtonAll = document.querySelectorAll(".sidebar_content_about");
  const modalContent = document.querySelector('.modal_content');
  const modalWindow = document.querySelector(".modal_fullscreen");
  const modalHeading = document.querySelector(".modal_content_heading");
  const cardsMonumentContainer = document.querySelector('.cards_monument_container');
  const body = document.getElementsByName('body');
  let cardsMonuments;
  const modalText = document.querySelector('.modal_text');
  const modalImage = document.querySelector('.modal_image');

  let titles = ["история", "природа", "достопримечательности", "личности"];

  aboutButtonAll.forEach((element) => {
    element.addEventListener("click", (e) => {
      
      if (e.target.tagName == 'H2' || e.target.tagName == 'DIV') {
        console.log(e.target.tagName);

        modalWindow.classList.toggle("close");
      }
      dataRegion.filter((dataElement) => {
          if (dataElement.id == activeRegion) {
            if (e.target.classList.contains("history")) {
              modalHeading.textContent = titles[0];
              createInfoDescription(dataElement.history.description, dataElement.history.image);
            } else if (e.target.classList.contains("nature")) {
              modalHeading.textContent = titles[1];
              createInfoDescription(dataElement.nature.description, dataElement.nature.image);
            } else if (e.target.classList.contains("monuments")) {
              modalHeading.textContent = titles[2];
              setTimeout(() => {
                cardsMonuments = document.querySelectorAll('.card_monument')
              }, 1000);
              // console.log(dataElement.monuments == {})
              // if (dataElement.people.length === '0') {
              //   modalText.innerHTML = "Здесь пока пусто";
              // } 
              createCardMonument(dataElement.monuments)
              popupMonument();
            } else if (e.target.classList.contains("people")) {
              modalHeading.textContent = titles[3];
              setTimeout(() => {
                cardsMonuments = document.querySelectorAll('.card_monument')
              }, 1000);
              createCardMonument(dataElement.people)
            }
          }
        });
    });

  });
  

  modalWindow.addEventListener("click", (e) => {
    if  (e.target.classList.value == "close_button_modal_fullscreen" || e.target.classList.value == "close_button_modal_fullscreen_image") {
      console.log(e.target.tagName)
      modalWindow.classList.toggle("close");
      deleteCardsMonument()
      deleteModalContent()
    }
  });

  function createCardMonument(monuments) {
    let element;
    for (let i = 0; i < monuments.length; i++){
      element = `
      <div class="card_monument">
        <h2 class="card_title">${monuments[i].title}</h2>
        <p class="card_description">${monuments[i].description}</p>
      </div>`
      cardsMonumentContainer.innerHTML += element;
    }
  }

  function createInfoDescription(history, image) {
    console.log(image)
    modalText.innerHTML = history;
    modalImage.setAttribute('src', `${image}`);
    if (image !== "") {
      modalImage.classList.add('ramka')
    }
    modalText.innerHTML = history;
  }
  function deleteCardsMonument() {
    modalText.innerHTML = '';
    modalImage.removeAttribute('src');
    cardsMonuments.forEach(element => {
      cardsMonumentContainer.removeChild(element);
    })
  }
  function deleteModalContent() {
    modalText.innerHTML = '';
    modalImage.removeAttribute('src');
    modalImage.classList.remove('ramka')
  }

  function popupMonument() {
    const monuments = document.querySelectorAll('.card_monument');
    const backgroundMonument = document.createElement('div');
    monuments.forEach(monument => {
      monument.addEventListener('click', (e) => {
        const targetMonument = e.currentTarget;
        const activeOverlay = document.querySelector('.active_overlay');

        if (targetMonument.classList.contains('active_monument')){
          targetMonument.classList.remove('active_monument');
          backgroundMonument.classList.remove('bacground_monument');
        } else {
          monuments.forEach(monument => {
            monument.classList.remove('active_monument')
          })
          // document.body.
          targetMonument.classList.add('active_monument');
          activeOverlay.classList.add('.active_overlay')
          document.body.style.overflow = 'hidden';
        }

          document.body.appendChild(backgroundMonument);
      })
    })
  }
});