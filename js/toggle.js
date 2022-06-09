'use strict';
{
    const hamburger = document.querySelector('.hamburger');
    const side = document.querySelector('.side');
    const header = document.getElementById('header');
    const mask = document.getElementById('mask');
    hamburger.addEventListener('click', ()=> {
    header.classList.toggle('open');
    });
    mask.addEventListener('click', ()=> {
    header.classList.remove('open');
    });
    side.addEventListener('click', ()=> {
    header.classList.remove('open');
    });
}
