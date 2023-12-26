import { dataRegion } from "./data/data.js";

// setInterval(() => {
//   location.reload();return false;
// }, 60000);

document.addEventListener("DOMContentLoaded", (elem) => {
  elem.preventDefault();
  const body = document.querySelector('body');
  // главный экран
  const mainScreen = document.querySelector("#main_screen");
  // кнопка начать
  const buttonStartBack = document.querySelector(".button_start_back");
  // заголовок
  const mainHeading = document.querySelector(".main_heading");

  const clouds = document.querySelectorAll('.cloud');

  const details = document.querySelectorAll("details");

  const audio = document.querySelector('audio');

  const map = document.querySelector("#map_inter");
  const rayons = document.querySelectorAll("path");
  const popap = document.querySelector(".popup");
  const sideBar = document.querySelector(".sidebar");

  const closeSideBar = document.querySelector(".close_button");

  const openRegion = document.querySelector('.open_region');

  const about = document.querySelectorAll('.about');

  openRegion.addEventListener('click', (e)=>{
    console.log(e)
  })

  cloudOnOff(0);

  

  buttonStartBack.addEventListener("click", ()=> {
    startAnimationMenuChanged();
    // startembient();
    body.style = 'background: url(./img/back.png); animation: none;'
    cloudOnOff(0.4)
  });

  elem.preventDefault();

  const rayonsArray = [];

  rayons.forEach((elemnt) => {
    let nameRayon = elemnt.classList.value;
    rayonsArray.push(nameRayon);
  });

  rayons.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      if (rayonsArray.includes(e.target.classList.value)) {
        showSideBar();
      }
    });
  });

  // popup

  document.addEventListener("mousemove", (e) => {
    let popupX = e.clientX;
    let popupY = e.clientY;

    if (
      e.target.tagName == "path" &&
      rayonsArray.includes(e.target.classList.value) &&
      map.classList.contains("map_opacity_remove")
    ) {
      popap.classList.add("show");

      dataRegion.filter((dataElement) => {
        if (dataElement.id == e.target.classList.value) {
          popap.textContent = dataElement.title;
        }
      });

      popap.style.top = popupY + 15 + "px";
      popap.style.left = popupX + 15 + "px";
    } else {
      popap.classList.remove("show");
    }
  });

  // popup

  details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });

  // close sidebar

  sideBar.addEventListener('click', (e) => {
    if (e.target.classList.value == 'close_button_sidebar' || e.target.classList.value == 'close_button_sidebar_image') {
      closeSideBarFun();
    }
  })

  // close sidebar

  // анимации сайдбара и карты

  function showSideBar() {
    sideBar.classList.add("showSidebar");
    sideBar.classList.remove("closeSidebar");
  }

  function closeSideBarFun() {
    sideBar.classList.remove("showSidebar");
    sideBar.classList.add("closeSidebar");
  }

  // анимации сайдбара и карты

  function startAnimationMenuChanged() {
    buttonStartBack.classList.add("hide_animation");
    mainHeading.classList.add("hide_text");
    hideAbout();

    map.classList.remove("hide");
    map.classList.add("map_opacity_remove");

    setTimeout(() => mainHeading.classList.add("show_text_top"), 1000);
  }

  // анимации наведения мыши на кнопку "начать"

  buttonStartBack.addEventListener("mouseover", animationMouseOver);
  buttonStartBack.addEventListener("mouseout", animationMouseOut);

  function animationMouseOver() {
    buttonStartBack.classList.remove("animation_button_unhover");
    buttonStartBack.classList.remove("pulse_anim");
    buttonStartBack.classList.add("animation_button_hover");
  }
  function animationMouseOut() {
    buttonStartBack.classList.remove("animation_button_hover");
    buttonStartBack.classList.add("animation_button_unhover");
    buttonStartBack.classList.add("pulse_anim");
  }

  function startembient() {
    audio.play()
    audio.volume = 0.05;
    audio.loop = true;
  }
  function cloudOnOff(opacity) {
    clouds.forEach((cloud) => {
      cloud.style = `opacity: ${opacity};`
    })
  }

  function hideAbout() {
    about.forEach(elem => {
      elem.classList.add('hideAbout');
      
      if (elem.classList.contains('hideAbout')) {
        elem.addEventListener('click', (e)=>{
          e.stopPropagation();
          e.preventDefault();
        })
        
      }
    })
  }

  
});


