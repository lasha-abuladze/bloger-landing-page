`use strict`;

const openClose = document.querySelector(`.open-close`);
const navigationUl = document.querySelector(`.navigation-ul`);
const navigationDivUl = document.querySelector(`.navigation-ul--li--div`);
const dropdounUlArr = document.querySelectorAll(`.dropdown-ul`);
const arrowArr = document.querySelectorAll(`.arrow-svg`);

const openBtn = document.querySelector(`.open-btn`);
const closeBtn = document.querySelector(`.close-btn`);

let counter = 0;

openClose.addEventListener(`click`, () => {

    counter ++;

    openBtn.classList.toggle(`display-none`);
    closeBtn.classList.toggle(`display-none`);

    navigationUl.classList.toggle(`open-navigation`);
    navigationUl.classList.toggle(`close-navigation`);

    if(counter % 2 === 0) {
        dropdounUlArr.forEach(el => {
            if(!el.classList.contains(`display-none`)) {
                el.classList.add(`display-none`);
                counter = 0;
            }
        })

        arrowArr.forEach(el => {
            if(el.classList.contains(`rotate`)) {
                el.classList.remove(`rotate`);
            }
        })
    }
});


navigationDivUl.addEventListener(`click`, (e) => {

    if(e.target.classList.contains(`nav-a`)) {
        const dropdownUl = e.target.closest(`.navigation-ul--li`).querySelector(`.dropdown-ul`);
        const arrow = e.target.querySelector(`.arrow-svg`);

        if(dropdownUl.classList.contains(`display-none`)) {
            dropdounUlArr.forEach(el => {
                if(!el.classList.contains(`display-none`)) {
                    el.classList.add(`display-none`);
                    arrow.classList.toggle(`rotate`);
                }
            })

        if(arrow.classList.contains(`rotate`)) {
            arrowArr.forEach(el => {
                if(el.classList.contains(`rotate`)) {
                    el.classList.remove(`rotate`);
                }
            })
        }

            dropdownUl.classList.toggle(`display-none`);
            arrow.classList.toggle(`rotate`);
        } else {
            dropdownUl.classList.toggle(`display-none`);
            arrow.classList.toggle(`rotate`);
        }

        
    }

})






