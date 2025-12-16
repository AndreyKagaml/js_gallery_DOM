'use strict';

const picturesSmall = document.querySelectorAll('.gallery__thumb');
const largePicture = document.querySelector('.gallery__large-img');

if (picturesSmall !== null) {
  for (const element of picturesSmall) {
    element.addEventListener('mouseover', () => {
      element.style.border = '3px solid #E3DEDE';
      element.style.borderRadius = '5px';
    });

    element.addEventListener('mouseout', () => {
      element.style.border = '';
    });

    element.addEventListener('click', (event) => {
      const fileName = element.parentElement.getAttribute('href');

      event.preventDefault();

      if (largePicture) {
        largePicture.setAttribute('src', fileName);
      }
    });
  }
}
