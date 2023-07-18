let isScrollLocked = false;
let scrollYPosition = 0;

function toggleScrollLock() {
  if (isScrollLocked) {
    // Разблокируем прокрутку
    isScrollLocked = false;
    document.body.style.overflow = 'auto';
    window.scrollTo(0, scrollYPosition);
  } else {
    // Блокируем прокрутку
    isScrollLocked = true;
    scrollYPosition = window.scrollY;
    document.body.style.overflow = 'hidden';
  }
}

function unlockScroll() {
  isScrollLocked = false;
  document.body.style.overflow = 'auto';
}

// Добавляем обработчики событий для кнопок
document
  .querySelector('.scrollLockBtn')
  .addEventListener('click', toggleScrollLock);
document
  .querySelector('.scrollUnlockBtn')
  .addEventListener('click', unlockScroll);

for (let i = 0; i < document.querySelectorAll('.scroll-unlock').length; i++) {
  document
    .querySelectorAll('.scroll-unlock')
    [i].addEventListener('click', unlockScroll);
}

document
  .querySelector('.scrollLockBtnBurger')
  .addEventListener('click', toggleScrollLock);
document
  .querySelector('.scrollUnlockBtnBurger')
  .addEventListener('click', unlockScroll);

// Добавляем обработчики событий для предотвращения прокрутки
function preventDefaultScroll(event) {
  if (isScrollLocked) {
    event.preventDefault();
  }
}

document.addEventListener('touchmove', preventDefaultScroll, {
  passive: false,
});
document.addEventListener('mousewheel', preventDefaultScroll, {
  passive: false,
});
document.addEventListener('DOMMouseScroll', preventDefaultScroll, {
  passive: false,
});
