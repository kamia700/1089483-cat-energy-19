var nav = document.querySelector('.page-header');
var toggle = document.querySelector('.page-header__toggle');

nav.classList.remove('page-header--nojs');
nav.classList.add('page-header--close');

toggle.addEventListener('click', function () {
  if (nav.classList.contains('page-header--open')) {
    nav.classList.remove('page-header--open');
    nav.classList.add('page-header--close');
  } else {
    nav.classList.remove('page-header--close');
    nav.classList.add('page-header--open');
  }
}
);
