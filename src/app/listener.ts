import { getRenderBlocks } from './app';

let level: string;
function listenerButtonsLevel():void {
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button_level');
  for (const button of buttons) {
    button.addEventListener('click', () => {
     const str: string | null = button.getAttribute('data-num');
     if (str) level = str;
     getRenderBlocks(level);
     buttons.forEach(button => {
        button.classList.remove('selected');
     })
     button.classList.add('selected');
    })
  }

}

export { level, listenerButtonsLevel };
