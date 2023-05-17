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
let score;


window.addEventListener('load', function() {
  getStart();
  changeMines('.button_closed');
});

function getStart(num = 10) {
  let element = new Creator(num);

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

  element.getField();
  field = document.querySelector('.field');
  score = document.querySelector('.info__text');
  field.addEventListener('click', function (event) {
  if (event.target.closest('.button_closed')) {
    counter ++;
    score.textContent = counter;
  }
})
  element.setButtons();
  buttons = field.getElementsByTagName('BUTTON');
  element.getBlockInfo('div', body, 'info_footer');
  infoFooter = document.querySelector('.info_footer');
  infoFooter.addEventListener('click', function (event) {
    let target = event.target.closest('.info__button');
    if (target.classList.contains('button1')) setSizeField(10);
    else if (target.classList.contains('button2')) setSizeField(15);
    else if (target.classList.contains('button3')) setSizeField(25);
  })
  element.getBlockInfo('button', infoFooter, 'info__button button1', 'easy 10 x 10');
  element.getBlockInfo('button', infoFooter, 'info__button button2', 'medium 15 x 15');
  element.getBlockInfo('button', infoFooter, 'info__button button3', 'hard 25 x 25');
  element.getBlockInfo('div', infoFooter, 'info__mines');
  infoFooter.insertAdjacentHTML('beforeEnd', '<input type="range" value ="0" id="volume" name="volume" min="10" max="99"><label for="volume">10</label><span>mines</span>');
  let range = document.getElementById('volume');
  let label = document.getElementsByTagName('label')[0];
  range.addEventListener('change', () => {
    label.textContent = range.value;
    countMine = Number(range.value);
    changeMines('.button_closed');
  });
}

function renderSmile () {
  let img = document.getElementsByClassName('ico')[0];
  if (img.src == smile) img.src = cry;
  else img.src = smile;
  img.style.height = '50px';
  img.style.width = '50px';
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


