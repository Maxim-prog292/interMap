const aboutExpo = document.querySelector('.about_expo');
const aboutVoro = document.querySelector('.about_vorobiov');
const closeButtonAbout = document.querySelector('.close_button_about');
const closeButtonAboutVoro = document.querySelector('.close_button_about_voro');
const aboutContent = document.querySelector('.about_content');






// aboutExpo
aboutExpo.addEventListener('click', ()=>{
    aboutExpo.classList.remove("about_close_expo");
    aboutExpo.classList.add("about_open_expo");
    closeButtonAbout.style = 'display: flex;';
    aboutContent.style = 'display: flex;';
    aboutExpo.style = 'overflow-y: scroll;';
    aboutVoro.style = 'opacity: 0;'
})

aboutExpo.addEventListener('click', (e) => {
    if (
        e.target.classList.value == "close_button_about" ||
        e.target.classList.value == "close_button_about_image"
      ) {
        aboutExpo.classList.remove("about_open_expo");
        aboutExpo.classList.add("about_close_expo");
        setTimeout(()=> {aboutExpo.classList.remove("about_close_expo");}, 390)
        aboutContent.style = 'display: none;';
        closeButtonAbout.style = 'display: none;';
        aboutExpo.style = 'overflow: hidden;'
        aboutVoro.style = 'overflow: hidden;'
      }
});

if (!aboutExpo.classList.contains('about_open_expo')) {
    aboutContent.style = 'display: none;';
    closeButtonAbout.style = 'display: none;';
    aboutExpo.style = 'overflow: hidden;'
}

// aboutVoro
aboutVoro.addEventListener('click', ()=>{
    aboutVoro.classList.remove("about_close_vorobiov");
    aboutVoro.classList.add("about_open_vorobiov");
    closeButtonAboutVoro.style = 'display: flex;';
    aboutContent.style = 'display: flex;';
    aboutVoro.style = 'overflow-y: scroll;'
})

aboutVoro.addEventListener('click', (e) => {
    if (
        e.target.classList.value == "close_button_about_voro" ||
        e.target.classList.value == "close_button_about_voro_image"
      ) {
        aboutVoro.classList.remove("about_open_vorobiov");
        aboutVoro.classList.add("about_close_vorobiov");
        setTimeout(()=> {aboutVoro.classList.remove("about_close_vorobiov");}, 390)
        aboutContent.style = 'display: none;';
        closeButtonAboutVoro.style = 'display: none;';
        aboutVoro.style = 'overflow: hidden;'
      }
});

if (!aboutVoro.classList.contains('about_open_vorobiov')) {
    aboutContent.style = 'display: none;';
    closeButtonAboutVoro.style = 'display: none;';
    aboutVoro.style = 'overflow: hidden;'
} 


