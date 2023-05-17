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

getStart();

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
  element.setButtons();

  element.getBlockInfo(...infoBlock);
  let infoFooter = document.getElementsByClassName('info')[1];
  element.getBlockInfo('button', infoFooter, 'button1', 'easy 10 x 10');
  element.getBlockInfo('button', infoFooter, 'button2', 'medium 15 x 15');
  element.getBlockInfo('button', infoFooter, 'button3', 'hard 25 x 25');
  element.getBlockInfo('div', infoFooter, 'info__mines');
  infoFooter.insertAdjacentHTML('beforeEnd', '<input type="range" id="volume" name="volume" min="10" max="99"><label for="volume">10</label>');
}

function renderSmile () {
  let img = document.getElementsByClassName('ico')[0];
  if (img.src == smile) img.src = cry;
  else img.src = smile;
  img.style.height = '50px';
  img.style.width = '50px';
  img.alt = 'smile';
}


let field = document.getElementsByClassName('field')[0];
field.addEventListener('click', function (event) {
  if (event.target.matches('button_closed')) {
    counter += 1;
  }
})

let range = document.getElementsByTagName('input')[0];
let label = document.getElementsByTagName('label')[0];
range.addEventListener('change', function() {
  label.textContent = range.value;
})
console.log(range.value);