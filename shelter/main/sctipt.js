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
const mediaQueryTablet = window.matchMedia('(max-width: 768px)');
const mediaQueryThousent = window.matchMedia('(max-width: 1000px)');

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
let description = newCard.querySelector('.new_card_title .description');
let img = newCard.querySelector('.new_img img');
let imgBlock = newCard.querySelector('.new_img');
let num;
async function getInfoInPopap() {                         //change info in popap cfrd
      
      let img = newCard.getElementsByTagName('img')[0];
      let title = newCard.getElementsByClassName('title')[0];
      let breen = newCard.getElementsByClassName('dog')[0];
      let description = newCard.getElementsByClassName('description')[0];
      let firstBlock = newCard.getElementsByClassName('inner_text_1')[0];
      let secondBlock = newCard.getElementsByClassName('inner_text_2')[0];
      let thirdBlock = newCard.getElementsByClassName('inner_text_3')[0];
      let fourthBlock = newCard.getElementsByClassName('inner_text_4')[0];
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
function changePopapForMobile() {           //change size popap for mobile
  imgBlock.style.display = 'none';
  newCard.style.width = '240px';
  description.style.width = '210px';
}

function chengePopapForTablet() {   //change size popap for tablet
  imgBlock.style.display = 'block';
  img.style.width = '330px';
  imgBlock.style.marginLeft = '-20px';
  let text = newCard.querySelector('.new_card_title .dog');
  text.style.fontSize = '20px';                                 
  description.style.fontSize = '13px'; 
  description.style.width = '260px'; 
  newCard.style.width = '630px';   
}
function chengePopapForComputer() {  //change size popap for computer
  imgBlock.style.display = 'block';
  img.style.width = '510px';
  let text = newCard.querySelector('.new_card_title .dog');
  text.style.fontSize = '21px';                                 
  description.style.fontSize = '17px'; 
  description.style.width = '350px'; 
  newCard.style.width = '900px'; 
  imgBlock.style.marginLeft = '-10px';  
}

function getLocationPopapOverlay() {     //locate popap in window
  newCard.style.left = '50%';            //appiar card
  body.style.overflowY = 'hidden';
  block.classList.remove('overlay');
}
function getPopapVisible() {            //add listener for animal card
  let arr = ["Jennifer", "Sophia", "Woody", "Scarlett", "Katrine", "Timmy", "Freddie", "Charly"];
  for (let card of cards) { 
    card.addEventListener('click', function func(event) {
      let value = card.querySelector('.animal_name').textContent;       //find index in array
      num = arr.indexOf(value);
      getInfoInPopap(); 
      event.stopPropagation();
      getLocationPopapOverlay()
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

window.addEventListener('resize',function(){   //listener for change size window
  if (mediaQueryMini.matches) changePopapForMobile();
  else if (mediaQueryThousent.matches) chengePopapForTablet(); 
  else chengePopapForComputer();    
});


//Реализация слайдера-карусели на странице Main
let petsLinks = [
  {
    "name": "Jennifer",
    "img": "../assets/pets-jennifer.png" },
  {
    "name": "Sophia",
    "img": "../assets/pets-katrine-black.png"},
  {
    "name": "Woody",
    "img": "../assets/pets-woody.png"},
  {
    "name": "Scarlett",
    "img": "../assets/pets-scarlet.png"},
  {
    "name": "Katrine",
    "img": "../assets/pets-katrine.png"},
  {
    "name": "Timmy",
    "img": "../assets/pets-timmy.png"},
  {
    "name": "Freddie",
    "img": "../assets/cat.png"},
  {
    "name": "Charly",
    "img": "../assets/pets-charly.png"}
  ]

let index;
function getRandomNum() {                     //get random number from 0 t0 7
   index = Math.floor(Math.random() * (7 + 1));
   return index;
}
let arrLengthThree = [[4, 0, 2]];

let k = 1;
function addIndexes(arr) {                   //add unique nambers to array
  arr[k] = [];
  while (arr[k].length < arr[k - 1].length) {
    let num = getRandomNum();
    
    if (!(arr[k - 1].includes(num) || arr[k].includes(num))) {
      arr[k].push(num);
    }
  }
  return arr;
}
let flag = true;
function getNewCollectionCards(i, card) {
  console.log(`k=${k}`);
  let num = arrLengthThree[arrLengthThree.length - 1][i];
  let image = card.querySelector('img');
  image.src = petsLinks[num]["img"];
  let title = card.querySelector('.animal_name');
  title.textContent = petsLinks[num]["name"];
}

function getPreviousCollectionCards(i, card) {
  let num = arrLengthThree[arrLengthThree.length - 2][i];
  console.log(num);
  let image = card.querySelector('img');
  image.src = petsLinks[num]["img"];
  let title = card.querySelector('.animal_name');
  title.textContent = petsLinks[num]["name"];
  flag = false;
}


rightArrow.addEventListener('click', function() {    //with right arrow change cards
  addIndexes(arrLengthThree);
  let i = 0;
  for (let card of cards) {
    card.style.animation = 'animateLeft 2s';
    getNewCollectionCards(i, card);
    i++;
    
     }
  k++; 
  })

leftArrow.addEventListener('click', function() {    //with right arrow change cards
  if (arrLengthThree.length == 1 ) {
  addIndexes(arrLengthThree);
  console.log(arrLengthThree);
  let i = 0;
  for (let card of cards) {
    card.style.animation = 'animateRight 2s';
    getNewCollectionCards(i, card);
    i++;
     }
    k++; 
   } 
   else if (flag == false) {
    console.log(arrLengthThree);
    addIndexes(arrLengthThree);
    let i = 0;
      for (let card of cards) {
      getNewCollectionCards(i, card);
      i++;
       }
      k++;
   }
   else {
    
    console.log(arrLengthThree);
     let i = 0;
      for (let card of cards) {
      card.style.animation = 'animateRight 2s';
      getPreviousCollectionCards(i, card)
      i++
     }
    // k++;
    // addIndexes(arrLengthThree);
   }
  
})

