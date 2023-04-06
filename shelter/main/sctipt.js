let burger = document.querySelector('.burger__menu');
let menu = document.querySelector('.header__navigation')
let links =menu.querySelectorAll('li');
let main = document.querySelector('main');


//burger menu exits on the right
burger.addEventListener('click', function(event) {  //add listener to burger button
  event.stopImmediatePropagation();
  menu.classList.toggle('appier');
  this.classList.toggle('rotate');
})

main.addEventListener('click', function() { //click for not menu 
     menu.classList.remove('appier');
    burger.classList.remove('rotate');
})
const mediaQuery = window.matchMedia('(max-width: 767px)')
if (mediaQuery.matches) {
  for (let li of links) {
    li.addEventListener('click', () => { //click on the links 
      menu.classList.remove('appier');
      burger.classList.remove('rotate');
    })
  }
}
