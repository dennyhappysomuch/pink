/* в этот файл добавляет скрипты*/

const openMenuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');

const initMenu = () => {
  if (openMenuButton) {
    openMenuButton.addEventListener('click', () => {
      if (!openMenuButton.classList.contains('menu-button--opened')) {
        openMenuButton.classList.add('menu-button--opened');
        mainNav.classList.add('main-nav--opened');
      } else {
        openMenuButton.classList.remove('menu-button--opened');
        mainNav.classList.remove('main-nav--opened');
      }
    });
  }
};

const resetOpenedStateMenu = () => {
  const viewport = window.innerWidth;

  if (viewport > 979) {
    if (openMenuButton.classList.contains('menu-button--opened')) {
      openMenuButton.classList.remove('menu-button--opened');
    }

    if (mainNav.classList.contains('main-nav--opened')) {
      mainNav.classList.remove('main-nav--opened');
    }
  }
};

window.addEventListener('resize', resetOpenedStateMenu);

document.addEventListener('DOMContentLoaded', () => {
  /* 1. Удалить NO-JS */
  if (mainNav.classList.contains('main-nav--no-js')) {
    mainNav.classList.remove('main-nav--no-js');
  }

  initMenu();
});
