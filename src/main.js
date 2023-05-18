import Creator from './Creator';
import './style.css';
import smile from './assets/smile.png';
import cry from './assets/cry.png';
// npm init @eslint/config
// npm install eslint-plugin-import --save-dev  npm i eslint eslint-config-airbnb-base
// npm install -D webpack webpack-cli
// npm install -D html-webpack-plugin и подключить в конфиг класс, удалить dist и запустить npm run build
// npm install clean-webpack-plugin (есди через хеш имя бандла)
//  loader добавление функционала npm install -D style-loader css-loader
// npm install -D file-loader
let body = document.body;
let infoBlock = ['div', body, 'info'];
let counter = 0;
let size = 10;
let countMine = 10;
let arrayMines;
let infoFooter;
let field;
let buttons;
let buttonsFooter;
let score;

window.addEventListener('load', function() {
  getStart();
  setHover(buttonsFooter[0]);
  changeMines('.button_closed');
  getNumber();
});

function getStart(num = 10) {
  let element = new Creator(num);

  // create title, block info
  element.getTitle();
  element.getBlockInfo(...infoBlock);

  let info = document.getElementsByClassName('info')[0];
  let infoMove = ['p', info, 'info__text', '00'];
  let ico = ['img', info, 'ico'];
  let infoTime = ['p', info, 'info__text', '00:00'];
  element.getBlockInfo(...infoMove);
  element.getBlockInfo(...ico);
  renderSmile ();
  element.getBlockInfo(...infoTime);

  // create play fiels, listener to field
  element.getField();
  field = document.getElementsByClassName('field')[0];          /////////
  score = document.getElementsByClassName('info__text')[0];
  field.addEventListener('click', function game(event) {
  if (event.target.closest('.button_closed')) {
    counter ++;
    score.textContent = counter;
    event.target.classList.remove('button_closed');
    event.target.classList.add('button__opened');
    if (event.target.getAttribute('data-num') == 0) {
      event.target.classList.add('mine');
      theEnd();
    }
    else if (event.target.getAttribute('data-num') > 1) {
      event.target.textContent = (event.target.getAttribute('data-num') - 1); //todo add class to color text
    }
  }
})
  field.addEventListener('contextmenu', function (event) {
    if (event.target.closest('.button_closed')) {
      event.target.classList.add('flag');
    }
    else if (event.target.closest('.flag')) {
      event.target.setAttribute('class', 'button button_closed');
    }
  })
  element.setButtons();
  buttons = field.querySelectorAll('button');            /////

  //add block info footer, listenet to button for change size of field
  element.getBlockInfo('div', body, 'info_footer');
  infoFooter = document.querySelector('.info_footer');
  infoFooter.addEventListener('click', function (event) {
    removeClass(buttonsFooter, 'colored');
    if (event.target.closest('.button1')) {
      setSizeField(10);
      setHover(event.target.closest('.button1'));
      size = 10;
      changeMines('.button_closed');
      getNumber()
    }
    else if (event.target.closest('.button2')) {
      setSizeField(15);
      setHover(event.target.closest('.button2'));
      size = 15;
      changeMines('.button_closed');
      getNumber()
    }
    else if (event.target.closest('.button3')) {
      setSizeField(25);
      setHover(event.target.closest('.button3'));
      size = 25;
      changeMines('.button_closed');
      getNumber()
    }
  })
  element.getBlockInfo('button', infoFooter, 'info__button button1', 'easy 10 x 10');
  element.getBlockInfo('button', infoFooter, 'info__button button2', 'medium 15 x 15');
  element.getBlockInfo('button', infoFooter, 'info__button button3', 'hard 25 x 25');
  buttons = field.getElementsByClassName('button');
  element.getBlockInfo('div', infoFooter, 'info__mines');
  buttonsFooter = infoFooter.querySelectorAll('button');

  //create range fo mines, listenet to input
  infoFooter.insertAdjacentHTML('beforeEnd', '<input type="range" value ="0" id="volume" name="volume" min="10" max="99"><label for="volume">10</label><span>mines</span>');
  let range = document.getElementById('volume');
  let label = document.getElementsByTagName('label')[0];
  range.addEventListener('change', () => {
    let isNewGame = true;
    buttons.forEach(elem => {
      if (elem.classList.contains('button__opened')) isNewGame = false;
    })
    console.log(isNewGame+'isNewGame');
    if (isNewGame) {
    label.textContent = range.value;
    countMine = Number(range.value);
    changeMines('.button_closed');
    getNumber()
  }
  });
}

function renderSmile (width = '50px') {
  let img = document.getElementsByClassName('ico')[0];
  if (img.src == smile) img.src = cry;
  else img.src = smile;
  img.style.height = '50px';
  img.style.width = width;
  img.alt = 'smile';
}

// set size for field
function setSizeField(num) {
  counter = 0;
  score.textContent = counter;
  let element = new Creator(num);
  element.clearElement(field);
  field.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  element.setButtons();
}

//set mines
function getArrayMines(num) {
  arrayMines = [];
  for (let i = 0; i < num * num; i++) {
    arrayMines.push(i);
  }
  return arrayMines;
}
function setMines() {
  let array = getArrayMines(size);
  let getRandomArr = array.sort(() => Math.random() - 0.5);
  let minesArray = getRandomArr.slice(0, countMine);
  return minesArray;
}

function isButtonMine(elems, arr) {
  elems.forEach((elem, index) => {
    elem.removeAttribute('data-num');
    if (arr.includes(index)) {
      elem.setAttribute('data-num', '0');
    }
  })
}

function changeMines(selector) {
  let array = setMines();
  let elems = document.querySelectorAll(selector);
  isButtonMine(elems, array);
}

//add hover effect
function setHover(elem) {
  elem.classList.add('colored');
}
//remove hover
function removeClass(elems, classNam) {
for (let elem of elems) {
  elem.classList.remove(classNam);
 }
}
//add finish of game
function theEnd() {
  field = document.getElementsByClassName('field')[0]; 
  buttons = field.querySelectorAll('button'); 
  buttons.forEach(elem => {           //todo открыть остальные кнопки
    if (elem.getAttribute('data-num') == '0') {
      elem.classList.add('mine');
    }
  })
  renderSmile ('80px');
  setTimeout(function() {
    buttons.forEach(elem => {
        elem.setAttribute('class', 'button button_closed');
        elem.textContent = '';
    })
    changeMines('.button_closed');
    getNumber();
    renderSmile ();
    counter = 0;
    score.textContent = counter;
  }, 2000)
}

//set numbers to textContent cells near the mines
function getNumber() {
  field = document.getElementsByClassName('field')[0]; 
  buttons = field.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
  if (!(buttons[i].dataset.num == 0)) {
      buttons[i].setAttribute('data-num', '1');
    }
  }
    for (let i = 0; i < buttons.length; i++) {
    let num = 1;
    if (!(buttons[i].dataset.num == 0)) {
        if ((i % size) == 0) {
     if (buttons[i + 1].dataset.num == '0') num++;
      if (((i + size)< buttons.length) && buttons[i + size].dataset.num == '0') num++;
      if (((i + size + 1)< buttons.length) && buttons[i + size + 1].dataset.num == '0') num++;
      if (((i - size)>= 0) && buttons[i - size].dataset.num == '0') num++;
      if (((i - size)>= 0) && buttons[i - size + 1].dataset.num == '0') num++;
     }
     else if (((i + 1) % size) == 0) {
      if (buttons[i - 1].dataset.num == '0') num++;
      if (((i + size)< buttons.length) && buttons[i + size].dataset.num == '0') num++;
      if (((i + size - 1)< buttons.length) && buttons[i + size - 1].dataset.num == '0') num++;
      if (((i - size)>= 0) && buttons[i - size].dataset.num == '0') num++;
      if (((i - size)>= 0) && buttons[i - size - 1].dataset.num == '0') num++;
     }
     else {
      if (buttons[i - 1].dataset.num == '0') num++;
      if (buttons[i + 1].dataset.num == '0') num++;
      if (((i + size)< buttons.length) && buttons[i + size].dataset.num == '0') num++;
      if (((i + size - 1)< buttons.length) && buttons[i + size - 1].dataset.num == '0') num++;
      if (((i + size + 1)< buttons.length) && buttons[i + size + 1].dataset.num == '0') num++;
      if (((i - size)>= 0) && buttons[i - size].dataset.num == '0') num++;
      if (((i - size)>= 0) && buttons[i - size - 1].dataset.num == '0') num++;
      if (((i - size)>= 0) && buttons[i - size + 1].dataset.num == '0') num++;
        }
     }
     (num != 1) && (buttons[i].setAttribute('data-num', num));
    }
  }