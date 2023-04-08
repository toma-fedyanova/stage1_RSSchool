let burger = document.querySelector('.burger__menu');
let menu = document.querySelector('.header__navigation')
let links =menu.querySelectorAll('li');
let main = document.querySelector('main');
let block = document.querySelector('.overlay');
let petsBlock = document.querySelector('.our__friends_animals');
let cards = petsBlock.querySelectorAll('.animal__card');
let leftArrow = document.querySelector('.arrow_left');
let rightArrow = document.querySelector('.arrow_right');
const mediaQueryMobile = window.matchMedia('(max-width: 320px)');
const mediaQueryMini = window.matchMedia('(max-width: 767px)');  //for screen less 797px
const mediaQueryTable = window.matchMedia('(max-width: 767px)');

let wrapper = document.querySelector('.header__wrapper');
let newCard = document.querySelector('.card_pet_new');
let cross = document.querySelector('.cross');
const body = document.querySelector('body');



//burger menu exits on the right
burger.addEventListener('click', function(event) {  //add listener to burger button
  event.stopImmediatePropagation();
  menu.classList.toggle('appier');
  this.classList.toggle('rotate');
  block.classList.toggle('overlay');
  
})

block.addEventListener('click', function() {   //click for not menu close menu
    
     menu.classList.remove('appier');
     burger.classList.remove('rotate');
     block.classList.add('overlay');
    
    
})

 
  for (let li of links) {
    if (mediaQueryMini.matches) {
    li.addEventListener('click', () => {        //click on the links 
      console.log(li);
      menu.classList.remove('appier');
      burger.classList.remove('rotate');
      block.classList.add('overlay');
      
    })
  }
}


//popap

let num;
async function getInfoInPopap() {                         //change info in popap cfrd
      
      let img = newCard.querySelector('.new_img img');
      let title = newCard.querySelector('.new_card_title .title');
      let breen = newCard.querySelector('.new_card_title .dog');
      let description = newCard.querySelector('.new_card_title .description');
      let firstBlock = newCard.querySelector('.new_card_title .property .inner_text_1');
      let secondBlock = newCard.querySelector('.new_card_title .property .inner_text_2');
      let thirdBlock = newCard.querySelector('.new_card_title .property .inner_text_3');
      let fourthBlock = newCard.querySelector('.new_card_title .property .inner_text_4');
      let pets = "pets.json";
      const res = await fetch(pets);
      const data = await res.json();
      
      img.src = data['pets'][num]["img"];
      title.textContent = data['pets'][num]["name"];
      breen.textContent =  data['pets'][num]["breed"];  
      description.textContent =  data['pets'][num]["description"]; 
      firstBlock.textContent = data['pets'][num]["age"];
      secondBlock.textContent = data['pets'][num]["inoculations"];
      thirdBlock.textContent = data['pets'][num]["diseases"];
      fourthBlock.textContent = data['pets'][num]["parasites"];
}

function getPopapVisible() {
   
  for (let card of cards) {                                            // add listener to cards
    card.addEventListener('click', function func(event) {
      let arr = ["Jennifer", "Sophia", "Woody", "Scarlett", "Katrine", "Timmy", "Freddie", "Charly"];
      let value = card.querySelector('.animal_name').textContent;       //find index in array
      num = arr.indexOf(value);
      getInfoInPopap();                                             //create new popap
      event.stopPropagation();
      newCard.style.left = '50%';                                   //appiar card
      body.style.overflowY = 'hidden';
      block.classList.remove('overlay');
      
    })
  }
}
getPopapVisible();

function getClosePopap() {                        //close popap  
    newCard.style.left = '-150%';
    body.style.overflowY = 'scroll';
    block.classList.add('overlay');
}
cross.addEventListener('click', getClosePopap);
block.addEventListener('click', getClosePopap);


//Реализация слайдера-карусели на странице Main
/*let num;
function getRandomNum() {                     //get random number from 0 t0 7
   num = Math.floor(Math.random() * (7 + 1));
   return num;
}


let arr = [[4, 0, 2]]  //location information about card in pets.json;

function getNewNumbers() {
  getRandomNum();
  if (res.length == 3) return res;
  else {
    if (!(arr.includes(num) || res.includes(num)))
    res.push(num);
    res.push(getNewNumbers());
  }
}
console.log(getNewNumbers());
let k = 1;
async function getPetInfo() {                                              //output quotes english text
  const pet = "../pets.json"; 
  const res = await fetch(pet);//выполним  запрос. Для этого используется функция fetch, параметром получающая адрес страницы, содержимое которой мы хотим получить
  const data = await res.json(); 
   
  let img = this.querySelector('img');
  img.setAttribute('src', data["pets"][k]["pets"])
  
  let title = this.querySelector('.animal_name')
  title.textContent = data["pets"][k]["name"];
  k++;
}

function changeCard() {        //привязать контекст функции к карточке животного
for (let i = 0; i < cards.length; i++) {
  
  getPetInfo.call(card);
}
}*/