'use strict';

const picturesSmall = document.querySelector('.gallery__list');
const largePicture = document.querySelector('.gallery__large-img');

if (picturesSmall !== null) {
  picturesSmall.addEventListener('mouseover', (ev) => {
    const element = ev.target.closest('.gallery__thumb');

    element.style.border = '3px solid #E3DEDE';
    element.style.borderRadius = '5px';
  });

  picturesSmall.addEventListener('mouseout', (ev) => {
    const element = ev.target.closest('.gallery__thumb');

    element.style.border = '';
  });

  picturesSmall.addEventListener('click', (ev) => {
    const element = ev.target.closest('.gallery__thumb');
    const fileName = element.parentElement.getAttribute('href');

    ev.preventDefault();

    if (largePicture) {
      largePicture.setAttribute('src', fileName);
    }
  });
}
