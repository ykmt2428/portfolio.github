
   'use strict';
   {
      const ul = document.querySelector('.slide');
      const slides = ul.children;
      let currentIndex = 0;
      const dots = [];

      function slide () {
         const slideWidth = slides[0].getBoundingClientRect().width;
         ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
      }
      function setUpDots () {
         for(let i = 0; i < slides.length; i++) {
            const button = document.createElement('button');
         button.addEventListener('click',()=> {
            currentIndex = i;
            slide();
            updateDots();
         });
            dots.push(button);
            document.querySelector('nav').appendChild(button);
         }
      }
      function updateDots () {
      dots.forEach(dot => {
         dot.classList.remove('current');
      });
      dots[currentIndex].classList.add('current');
      };
      setUpDots();
      updateDots();
   }
