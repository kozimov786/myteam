let burger = document.querySelector('.burger');
let sitenav = document.querySelector('.sitenav');

burger.addEventListener('click',()=>{
  sitenav.classList.toggle('active');
  burger.classList.toggle('is-open');
});