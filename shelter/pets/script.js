let burger = document.querySelector('.burger__menu');
let menu = document.querySelector('.header__navigation')
let links =menu.querySelectorAll('li');
let main = document.querySelector('main');
let block = document.querySelector('.overlay');
let petsBlock = document.querySelectorAll('.our__friends_animals');
let cards = document.getElementsByClassName('animal__card');
const mediaQueryThousent = window.matchMedia('(max-width: 1000px)');
const mediaQueryMobile = window.matchMedia('(max-width: 320px)');
const mediaQueryMini = window.matchMedia('(max-width: 767px)');  //for screen less 797px
const mediaQueryTablet = window.matchMedia('(max-width: 768px)');
const body = document.querySelector('body');
let wrapper = document.querySelector('.header__wrapper');
let newCard = document.querySelector('.card_pet_new');
let cross = document.querySelector('.cross');
let doubleLeftArrow = document.querySelector('.arrow_left');
let leftArrow = document.querySelector('.arrow_double_left');
let rightArrow = document.querySelector('.arrow_right');
let doubleRightArrow = document.querySelector('.arrow_double_right');
let pageNumber = document.getElementsByClassName('page_number')[0];

//burger menu exits on the right
burger.addEventListener('click', function(event) {  //add listener to burger button
  event.stopImmediatePropagation();
  menu.classList.toggle('appier');
  this.classList.toggle('rotate');
  block.classList.toggle('overlay');
})

main.addEventListener('click', function() { //click for not menu 
     menu.classList.remove('appier');
     burger.classList.remove('rotate');
     block.classList.add('overlay');
})


  for (let li of links) {
    if (mediaQueryMini.matches) {
    li.addEventListener('click', () => { //click on the links 
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

//пагинация на странице Pets
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
function getArray(length, pages) {  //get array
  let petsCards = [];
  for (let i = 0; i < pages; i++) {
    petsCards[i] = [];
    while (petsCards[i].length < length){
      let num = getRandomNum();
      if (!petsCards[i].includes(num)) {
        petsCards[i].push(num)
      }
    }
  }
  return petsCards;
}

function setInactivArrows(num) {       //get colored buttons
  if (pageNumber.textContent == '1') {
    leftArrow.classList.add('inactive');
    doubleLeftArrow.classList.add('inactive');
    rightArrow.classList.remove('inactive');
    doubleRightArrow.classList.remove('inactive');
  }
  else if (pageNumber.textContent > '1' && pageNumber.textContent < num) {
    leftArrow.classList.remove('inactive');
    doubleLeftArrow.classList.remove('inactive');
    rightArrow.classList.remove('inactive');
    doubleRightArrow.classList.remove('inactive');
  }
  else if (pageNumber.textContent == num){
    leftArrow.classList.remove('inactive');
    doubleLeftArrow.classList.remove('inactive');
    rightArrow.classList.add('inactive');
    doubleRightArrow.classList.add('inactive');
  }
}

let newCardsArray;
if (mediaQueryMobile.matches) {
  newCardsArray = getArray(3, 16);
}
else if (mediaQueryTablet.matches) {
  newCardsArray = getArray(6, 8);
}
else {
  newCardsArray = getArray(8, 6);
}

let i = 1;

rightArrow.addEventListener('click', function() {  //get change of number of page
  if (mediaQueryMobile.matches) {
    if (i == 0) i = 1;
    if (pageNumber.textContent < 16) {
      pageNumber.textContent = +pageNumber.textContent + 1;
    }
    setInactivArrows('16');
    let array = newCardsArray;
     console.log(array);
    let j = 0;
    while (i < array.length) {
    for (let card of cards) {
      card.style.animation = 'animateLeft 2s';
      if(!(card.classList.contains('remove')|| card.classList.contains('last_remove'))) {
        card.querySelector('img').src = petsLinks[newCardsArray[i][j]]['img'];
        card.querySelector('.animal_name').textContent = petsLinks[newCardsArray[i][j]]['name'];
        j++;
      }
    }
    i++;
    if (i == 16) i = 15;
  }
  }
  else if (mediaQueryTablet.matches) {   
    if (i == 0) i = 1;
    if (pageNumber.textContent < 8) {
      pageNumber.textContent = +pageNumber.textContent + 1;
    }
    setInactivArrows('8');
    let array = newCardsArray;
    let j = 0;
    while (i < array.length) {
    for (let card of cards) {
      card.style.animation = 'animateLeft 2s';
      if(!(card.classList.contains('remove'))) {
        card.querySelector('img').src = petsLinks[newCardsArray[i][j]]['img'];
        card.querySelector('.animal_name').textContent = petsLinks[newCardsArray[i][j]]['name'];
        j++;
      }
    }
    i++;
    if (i == 8) i = 7;
  }
  }
  else {
    if (i == 0) i = 1;
  if (pageNumber.textContent < 6) {    
  pageNumber.textContent = +pageNumber.textContent + 1;
}
   setInactivArrows('6');
   let array = newCardsArray;
   let j = 0;
    while (i < array.length) {
    for (let card of cards) {
      card.style.animation = 'animateLeft 2s';
        card.querySelector('img').src = petsLinks[array[i][j]]['img'];
        card.querySelector('.animal_name').textContent = petsLinks[array[i][j]]['name'];
        j++;
      }
    i++;
    if (i == 6) i = 5;
  }
}
})

doubleRightArrow.addEventListener('click', function() {  //get change of number of page
  if (mediaQueryMobile.matches) {
    if (pageNumber.textContent < 16) {
      pageNumber.textContent = '16';
    }
    setInactivArrows('16');
    let array = newCardsArray;
      i = 15;
       let j = 0;
    for (let card of cards) {
      card.style.animation = 'animateLeft 2s';
        card.querySelector('img').src = petsLinks[array[15][j]]['img'];
        card.querySelector('.animal_name').textContent = petsLinks[array[15][j]]['name'];
        j++;
      }
  }
  else if (mediaQueryTablet.matches) {
    i = 7;
    if (pageNumber.textContent < 8) {
      pageNumber.textContent = '8';
    }
    setInactivArrows('8');
    let array = newCardsArray;
   let j = 0;
    for (let card of cards) {
      card.style.animation = 'animateLeft 2s';
        card.querySelector('img').src = petsLinks[array[7][j]]['img'];
        card.querySelector('.animal_name').textContent = petsLinks[array[7][j]]['name'];
        j++;
      }
    
  }
  else {
    i = 5;
  if (pageNumber.textContent< 6 ) {
  pageNumber.textContent = '6';
}
   setInactivArrows('6');
   let array = newCardsArray;
   let j = 0;
    for (let card of cards) {
      card.style.animation = 'animateLeft 2s';
        card.querySelector('img').src = petsLinks[array[5][j]]['img'];
        card.querySelector('.animal_name').textContent = petsLinks[array[5][j]]['name'];
        j++;
      }
  }
})

leftArrow.addEventListener('click', function() {  //get change of number of page

  if (mediaQueryMobile.matches) {
    if (pageNumber.textContent > '1') {
      pageNumber.textContent = +pageNumber.textContent - 1;
    }
    setInactivArrows('16');
    let array = newCardsArray;
    i = i - 1;
     if (i < 0) i = 0;
     let j = 0;
    while (i >= 0) {
    for (let card of cards) {
      card.style.animation = 'animateRight 2s';
      if(!(card.classList.contains('remove')|| card.classList.contains('last_remove'))) {
        card.querySelector('img').src = petsLinks[array[i][j]]['img'];
        card.querySelector('.animal_name').textContent = petsLinks[array[i][j]]['name'];
        j++;
      }
    }
  }
  }
  else if (mediaQueryTablet.matches) {
    if (pageNumber.textContent > '1') {
      pageNumber.textContent = +pageNumber.textContent - 1;
    }
    setInactivArrows('8');
    let array = newCardsArray;
    i = i - 1;
     if (i < 0) i = 0;
     let j = 0;
    while (i >= 0) {
    for (let card of cards) {
      if(!(card.classList.contains('remove'))) {
        card.style.animation = 'animateRight 2s';
        card.querySelector('img').src = petsLinks[array[i][j]]['img'];
        card.querySelector('.animal_name').textContent = array[newCardsArray[i][j]]['name'];
        j++;
      }
    }
  }
  }
  else {
  if (pageNumber.textContent > '1') {
  pageNumber.textContent = +pageNumber.textContent - 1;
}
   setInactivArrows('6');
   let array = newCardsArray;
   i = i - 1;
   if (i < 0) i = 0;
     let j = 0;
     while (i >= 0)
     for (let card of cards) {
      card.style.animation = 'animateRight 2s';
         card.querySelector('img').src = petsLinks[array[i][j]]['img'];
         card.querySelector('.animal_name').textContent = petsLinks[array[i][j]]['name'];
         j++;
       }
    
    }
})

doubleLeftArrow.addEventListener('click', function() {  //get change of number of page
  if (mediaQueryMobile.matches) {
    i = 0;
    if (pageNumber.textContent > '1') {
      pageNumber.textContent = '1';
    }
    setInactivArrows('16');
    let array = newCardsArray;
    let j = 0;
    for (let card of cards) {
       card.style.animation = 'animateRight 2s';
        card.querySelector('img').src = petsLinks[array[0][j]]['img'];
        card.querySelector('.animal_name').textContent = petsLinks[array[0][j]]['name'];
        j++;
      }
  }
  else if (mediaQueryTablet.matches) {
    i = 0;
    if (pageNumber.textContent > '1') {
      pageNumber.textContent = '1';
    }
    setInactivArrows('8');
    let array = newCardsArray;
    let j = 0;
    for (let card of cards) {
      card.style.animation = 'animateRight 2s';
        card.querySelector('img').src = petsLinks[array[0][j]]['img'];
        card.querySelector('.animal_name').textContent = petsLinks[array[0][j]]['name'];
        j++;
      }
  }
  else {
    i = 0;
  if (pageNumber.textContent > '1') {
  pageNumber.textContent = '1';
}
   setInactivArrows('6');
   let array = newCardsArray;
    let j = 0;
    for (let card of cards) {
      card.style.animation = 'animateRight 2s';
        card.querySelector('img').src = petsLinks[array[0][j]]['img'];
        card.querySelector('.animal_name').textContent = petsLinks[array[0][j]]['name'];
        j++;
      }
  }
})

window.addEventListener('resize',function(){   //listener for change size window
  if (mediaQueryMobile.matches) {
    newCardsArray = getArray(3, 16);
    setInactivArrows('16');
    
  }
  else if (mediaQueryTablet.matches) {
    newCardsArray = getArray(6, 8);
    setInactivArrows('8');
    if (pageNumber.textContent > 8) pageNumber.textContent = '8';
    i = 7
  }
  else {
    newCardsArray = getArray(8, 6);
    setInactivArrows('6');
    if (pageNumber.textContent > 6) pageNumber.textContent = '6';
    i = 5;
  }
});
