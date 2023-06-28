import { level } from '../app/buttonsListener';

function getValueLocalStorage():string | undefined {
  const value: string | null = localStorage.getItem(`level`);
  if (value) {
    const str = value;
    return str;
  }
}
function getButtonsClass(i: number):string | undefined {
  const value: string | null = localStorage.getItem(`${i}`);
  if (value) {
    const str = value;
    return str;
  }
 
}

 function setValueLocalStorage():void {
  const value: string = level;
  if (value) localStorage.setItem(`level`, value);
   
  const buttons = document.querySelectorAll('.button_level');
  function setClassButtons (i: number):string {
    if (buttons[i]?.classList[2]) return buttons[i]?.classList[2]
    else return 'undefined';
  }
  for (let i = 0; i < buttons.length; i++) {
    const str: string = setClassButtons(i);
    localStorage.setItem(`${i + 1}`, str);
  }
} 

export { getValueLocalStorage, setValueLocalStorage, getButtonsClass};