import { getRenderBlocks } from './app';
import { changeImages } from './changeImg';
import { getAnswer } from './textarea';
import { getMargin, getColoredElements, getImageTitle } from './hoverCode';

let level: string;
function listenerButtonsLevel():void {
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button_level');
  for (const button of buttons) {
    button.addEventListener('click', () => {
     const str: string | null = button.getAttribute('data-num');
     if (str) level = str;
     getRenderBlocks(level);
     changeImages(level);
      buttons.forEach(button => {
        button.classList.remove('selected');
     })
     button.classList.add('selected');
     getMargin(level);
     getColoredElements(level);
     getImageTitle();
     getAnswer();
    })
  }
}

function setButtonsClass(i: string, value: string): void {
  const buttons = document.querySelectorAll('.button_level');
  for (const button of buttons) {
    if ((button.getAttribute('data-num') === i) && value) {
      if (value !== 'undefined') button.classList.add(value);
      }
  }
}

function setClassFirstButton(): void {
  const buttons = document.querySelectorAll('.button_level');
  let flag = false;
  for (const button of buttons) {
    if (button.classList.contains('colored') || button.classList.contains('selected')) {
      flag = true;
    }
  }
  if (!flag) buttons[0].classList.add('selected')
}

function removeButtonsClasses(): void {
  const resetButton = document.querySelector('.button_reset') as HTMLButtonElement;
  resetButton?.addEventListener('click', function() {
    const buttons = document.querySelectorAll('.button_level');
    buttons.forEach(button => {
      button.classList.remove('selected');
      button.classList.remove('colored');
    })
    buttons[0].classList.add('selected');
    getRenderBlocks('1');
     changeImages('1');
     getMargin('1');
     getColoredElements('1');

  })
}

function getHelpButton():void {
  const button = document.querySelector('.button_help') as HTMLButtonElement;
  const textarea = document.querySelector('#textarea') as HTMLTextAreaElement;
  const answers: string[] = ['*', 'cat', '#bird', '.dog', 'cat > fish', '[name="пушок"]', '[name^="мар"]', '[name$="акс"]', 'cat:disabled', 'road :not(dog)'];
  button.addEventListener('click', function() {
    console.log('hello');
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button_level');
    buttons.forEach(elem => {
      if (elem.classList.contains('selected')) {
        if (!elem.classList.contains('colored')) {
          console.log(elem);
          // textarea.value = '';
          // const value: string | null = elem.getAttribute('data-num');
          // if (value) {
          //   const num = Number(+value - 1);
          //   textarea.value = answers[num];
          // }
        }
      }
    })
  })
}
export { level, listenerButtonsLevel, setButtonsClass, setClassFirstButton, removeButtonsClasses, getHelpButton };
