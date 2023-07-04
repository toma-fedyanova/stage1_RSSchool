import { getRenderBlocks } from './app';
import { changeImages, imgAnimation } from './changeImg';
import { getMargin, getColoredElements, getImageTitle } from './hoverCode';
import { changeValueLevel } from './buttonsListener';

function checkButtons():string[] {
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button_level');
  const arrayOfNotDone: string[] = [];
  buttons.forEach(button => {
    if (!button.classList.contains('colored')) {
      const str = button.getAttribute('data-num');
      if (str) arrayOfNotDone.push(str);}
  })
  return arrayOfNotDone;
}
function renderWinMess():void {
  const div:HTMLDivElement = document.createElement('div');
  div.classList.add('popap');
  const mess: HTMLParagraphElement = document.createElement('p');
  const span: HTMLSpanElement = document.createElement('span');
  span.textContent = 'X';
  span.style.border = '1px solid black';
  mess.prepend(span);
  mess.classList.add('mess');
  mess.textContent = 'Вы победили!';
  mess.addEventListener('click', () => {
    mess.remove();
    div.remove();
    const buttons = document.querySelectorAll('.button_level');
    buttons.forEach(button => {
      button.classList.remove('selected');
      button.classList.remove('colored');
      const text = button.textContent;
      const str = text?.replace(/(⁉)/g, '');
      if (str) button.textContent = str;
    })
    buttons[0].classList.add('selected');
    getRenderBlocks('1');
     changeImages('1');
     getMargin('1');
     getColoredElements('1');
     changeValueLevel('1');
     imgAnimation('1');
  })
  div.append(mess);
  document.body.prepend(div);
}
function choiceLevel():void {
  const images = document.querySelectorAll('.image');
  images.forEach(img => img.classList.remove('slide'));
  const arr = checkButtons();
  console.log(arr);
  if (arr.length === 0) {
    renderWinMess()
  }
  else {
    const str = arr[0];
    console.log(str + 'atr')
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button_level');
    buttons[+str - 1].classList.add('selected');
    getRenderBlocks(str);
    changeImages(str);
    imgAnimation(str);
    getMargin(str);
    getColoredElements(str);
    getImageTitle();
    changeValueLevel(str);
  }
}

function removeChousenImages():void {
  const images = document.querySelectorAll('.image');
  images.forEach(img => {
    if (img.hasAttribute('data-img')) img.classList.add('slide');
});
  const elemAddition: HTMLCollectionOf<Element> | null = document.getElementsByClassName('addition_image');
  const fish = elemAddition[0];
  if (fish) {
    fish.classList.remove('img_animation');
    fish.classList.add('slide');
  }
}

export function getAnswer(): void {
  const answers: string[] = ['*', 'cat', '#bird', '.dog', 'cat>fish', '[name="пушок"]', '[name^="мар"]', '[name$="акс"]', 'cat:disabled', 'road:not(dog)'];
  const textarea = document.querySelector('#textarea') as HTMLTextAreaElement;
  const button = document.querySelector('.textarea_button') as HTMLButtonElement;
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button_level');
  function getNumberLevel(): string {
  let res = '';
  buttons.forEach(button => {
    if( button.classList.contains('selected')) res += button.getAttribute('data-num')});
    return answers[+res - 1] ?? '*';
}
  function getValue():void {
    const answer = getNumberLevel();
    const value = textarea.value.replace(/`|'/g, '"');
    textarea.value = '';
    if (value.split('\n').join('') == answer) {
    textarea.classList.remove('textarea_animation');
    buttons.forEach(button => {
        if (button.classList.contains('selected')) {
        button.classList.remove('selected');
        button.classList.add('colored');
        }
      });
      removeChousenImages();
      setTimeout(()  => {choiceLevel()}, 2000)
    } else {
      textarea.value = '';
      textarea.classList.add('textarea_animation');
    }
  }
  textarea?.addEventListener('keypress', function (e) {
    textarea.classList.remove('textarea_animation');
    if (e.key === 'Enter') getValue();
  });
  button.addEventListener('click', function() {
     getValue();
    })
}