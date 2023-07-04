import { getRenderBlocks } from './app';
import { changeImages, imgAnimation } from './changeImg';
import { getAnswer } from './textarea';
import { getMargin, getColoredElements, getImageTitle } from './hoverCode';

let level: string;
  function changeValueLevel(str: string): string {
  level = str;
  console.log(level + 'level');
  return level;
}
//todo
function getColoredText():void {
  const img = document.getElementsByClassName('addition_image')[0]
  const codeBlock: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.code_line');
    if (img) { img.addEventListener('mouseover', function() {
        for (let j = 3; j <= 5; j++) {
          codeBlock[j].style.color = 'rgb(228, 132, 84)';
        }
      })
       img.addEventListener('mouseout', function() {
        for (let j = 3; j <= 5; j++) {
          codeBlock[j].style.color = 'white';
        }
       })}
  }
function listenerButtonsLevel():void {
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button_level');
  for (const button of buttons) {
      button.addEventListener('click', () => {
        console.log(document.getElementsByClassName('addition_image'));
      const str: string | null = button.getAttribute('data-num');
     if (str) level = str;
     getRenderBlocks(level);
     changeImages(level);
     imgAnimation(level);
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
      const text = button.textContent;
      const str = text?.replace(/(⁉)/g, '');
      if (str) button.textContent = str;
    })
    buttons[0].classList.add('selected');
    getRenderBlocks('1');
     changeImages('1');
     getMargin('1');
     getColoredElements('1');
     level = '1';
     imgAnimation('1');
  })
}
function printLetter(arr: string[], index: number):void {
  const textarea: HTMLTextAreaElement | null = document.querySelector('#textarea');
  textarea?.blur();
  if (textarea) textarea.disabled = true;
  const word = arr[index];
  if (textarea) {
    textarea.value = '';
    let count = 0;
  const timerId = setInterval(function func():void {
    if (count !== 0) {
      if (textarea.value[count - 1] !== word[count - 1]) {
        clearInterval(timerId);
        textarea.value = '';
        throw new Error('значение введено не полностью');
      }
    }
    if (word.length === textarea.value.length) {
      textarea.disabled = false;
      textarea.focus();
      clearInterval(timerId);
    }
    else textarea.value += word[count++];
  }, 300)
  }
}
function getHelpButton():void {
  const button = document.querySelector('.button_help') as HTMLButtonElement;
  const textarea = document.querySelector('#textarea') as HTMLTextAreaElement;
  const answers: string[] = ['*', 'cat', '#bird', '.dog', 'cat>fish', '[name="пушок"]', '[name^="мар"]', '[name$="акс"]', 'cat:disabled', 'road:not(dog)'];
  button.addEventListener('click', function() {
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button_level');
    buttons.forEach(elem => {
      if (elem.classList.contains('selected')) {
        if (!elem.classList.contains('colored')) {
          const num: string | null = elem.getAttribute('data-num');
          if (num) {
             printLetter(answers, (+num - 1));
            }
           elem.textContent += ' ⁉';
        }
      }
    })
  })
}
export { level, listenerButtonsLevel, setButtonsClass, setClassFirstButton, removeButtonsClasses, getHelpButton, changeValueLevel};
