const btn = document.querySelector('.open-modal');
const close = document.querySelector('.close-modal');
const filter = document.querySelector('.filter');
const burger = document.querySelector('.header__burger');
const categories = document.querySelector('.categories');

btn.addEventListener('click', () => {
  filter.classList.add('modal');
});

close.addEventListener('click', () => {
  filter.classList.remove('modal');
});

burger.addEventListener('click', () => {
  categories.classList.toggle('active');
});
