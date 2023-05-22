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
let colors = [0, '#800080', '#000080', '#a52a2a', '#00008b', '	#006400', '#8b008b', '#9932cc', '#2f4f4f', '#ff1493'];
let counter = 0;
let size = 10;
let countMine = 10;
let arrayMines;
let infoFooter;
let field;
let buttons;
let buttonsFooter;
let score;
let lastFlag;
let timer;
let timerId;
let isNewGame;

window.addEventListener('load', function() {
  getStart();
  setHover(buttonsFooter[0]);
  changeMines('.button_closed');
  getNumber();
  checkFlag();
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
  element.getBlockInfo('p', info, 'info__flag', 'last flags');

  // create play fiels, listener to field
  element.getField();
  field = document.getElementsByClassName('field')[0];          /////////
  score = document.getElementsByClassName('info__text')[0];
  field.addEventListener('click', function game(event) {
 if (event.target.closest('.button_closed')) {
  getCheckStart();
  if (event.target.classList.contains('flag')) return;
    counter ++;
    score.textContent = counter;
    event.target.classList.remove('button_closed');
    event.target.classList.add('button__opened');
    if (event.target.getAttribute('data-num') == 0) {
      event.target.classList.add('mine');
      theEnd();
    }
    else if (event.target.getAttribute('data-num') > 1) {
      let num = (event.target.getAttribute('data-num') - 1);
      setColors.call(event.target, num);
      event.target.textContent = num;
    }
    else if (event.target.getAttribute('data-num') == 1) {
    buttons = field.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('data-index', i);
    }
    let index = event.target.getAttribute('data-index');
    let numberInd = Number(index);
    getEmptyCell(numberInd);
  }
  buttons = field.querySelectorAll('button');
  let count = 0;
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].classList.contains('button_closed')){
        console.log(buttons[i]);
        count++;
      }
    }
    console.log(count);
    console.log(countMine);
    if (count == countMine) {
      getWin();
    }
  }
})
  field.addEventListener('contextmenu', function (event) {
    let elem = document.getElementsByClassName('info__flag')[0];
    if (event.target.closest('.button_closed')) {
      console.log('hello');
      if (event.target.getAttribute('data-flag')) {
        event.target.classList.remove('flag');
        event.target.removeAttribute('data-flag');
        lastFlag++;
        elem.textContent = `${lastFlag} flags lasts`;
      }
      else {
        event.target.classList.add('flag');
        event.target.setAttribute('data-flag', 'true');
        lastFlag--;
        elem.textContent = `${lastFlag} flags lasts`;
      }
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
      getNumber();
      checkFlag();
      counterToWin = 0;
      newStartTimer()
    }
    else if (event.target.closest('.button2')) {
      setSizeField(15);
      setHover(event.target.closest('.button2'));
      size = 15;
      changeMines('.button_closed');
      getNumber();
      checkFlag();
      counterToWin = 0;
      newStartTimer()
    }
    else if (event.target.closest('.button3')) {
      setSizeField(25);
      setHover(event.target.closest('.button3'));
      size = 25;
      changeMines('.button_closed');
      getNumber();
      checkFlag();
      counterToWin = 0;
      newStartTimer()
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
    isNewGame = true;
    buttons.forEach(elem => {
      if (elem.classList.contains('button__opened')) isNewGame = false;
    })
    console.log(isNewGame+'isNewGame');
    if (isNewGame) {
    label.textContent = range.value;
    countMine = Number(range.value);
    changeMines('.button_closed');
    getNumber();
    checkFlag();
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
timerFun();
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
  newStartTimer();
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
  counterToWin = 0;
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

  //set color
  function setColors(num) {
    this.style.color = colors[num];
  }

  //check first opened cell                  //todo
function getCheckStart() {
    if (isNewGame) {
      if (this.getAttribute('data-num') == 0) {
        changeMines('.button_closed');
        getNumber();
        checkFlag();
      }
    }
  }

function checkFlag() {
  let elem = document.getElementsByClassName('info__flag')[0];
  console.log(elem);
  let num = countMine;
  lastFlag = num;
  elem.textContent = `${lastFlag} flags lasts`;
}

  //case if open empty cell
  function openCell(elem) {
    if (!elem.classList.contains('flag')) {
    elem.classList.remove('button_closed');
    elem.classList.add('button__opened');
    if (elem.getAttribute('data-num') > 1) {
      let num = (elem.getAttribute('data-num') - 1);
      setColors.call(elem, num);
      elem.textContent = num;
    }
  }
}
  function getEmptyCell(index) {
    field = document.getElementsByClassName('field')[0]; 
    buttons = field.querySelectorAll('button');
    openCell(buttons[index]);
    let array;
    if (index % size == 0) array = [(index + 1), (index + size), (index + size + 1), (index - size), (index - size + 1)];
    else if ((index + 1) % size == 0) array = [(index - 1), (index + size), (index + size - 1), (index - size), (index - size - 1)];
    else {array = [(index + 1), (index - 1), (index + size), (index + size + 1), (index + size - 1), (index - size), (index - size + 1), (index - size - 1)];}
    for (let elem of array) {
      if (elem >= 0 && elem < (size ** 2)) {
        let num = +(buttons[elem].getAttribute('data-num'));
        if (buttons[elem].classList.contains('button_closed')) {
            if (num > 1) {
              openCell(buttons[elem]);
            }
            else if (num == 1) getEmptyCell(elem);
          }
      }
    }
  }

  //finish and win
  function getWin() {
    newStartTimer();
    alert('you won!!!!');
    setTimeout(function() {
      setSizeField(size);
      changeMines('.button_closed');
      getNumber();
      checkFlag();
    }, 2000)
  }
  
  // timer
  function timerFun() {
    let num = 1;
    timerId = setInterval(function start() {
      timer = document.getElementsByClassName('info__text')[1];
      timer.textContent = `${num}seconds`;
      num++;
    }, 1000)
}
function newStartTimer() {
  clearInterval(timerId);
  timer = document.getElementsByClassName('info__text')[1];
  timer.textContent = `00:00`;
//  timerFun();
}