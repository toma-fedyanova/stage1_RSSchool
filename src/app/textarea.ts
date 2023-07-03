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
function choiceLevel():void {
  const arr = checkButtons();
  console.log(arr);
  if (arr.length === 0) {
    console.log('hooray');
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
    } else {
      textarea.value = '';
      textarea.classList.add('textarea_animation');
    }
  }
  textarea?.addEventListener('keypress', function (e) {
    textarea.classList.remove('textarea_animation');
    if (e.key === 'Enter') getValue();
    choiceLevel();
  });
  button.addEventListener('click', function() {
     getValue();
     choiceLevel();
    })
}