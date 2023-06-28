import style from './style.css';
import { getAnimation } from './components/animation';
import { getRenderBlocks } from './app/app';
import { listenerButtonsLevel, setButtonsClass, setClassFirstButton, removeButtonsClasses } from './app/buttonsListener';
import { changeImages } from './app/changeImg';
import { getAnswer } from './app/textarea';
import { getMargin, getColoredElements, getImageTitle } from './app/hoverCode';
import { getValueLocalStorage, setValueLocalStorage, getButtonsClass } from './base/localStorage';

function getSrtart():void {
style;
getAnimation();
window.addEventListener('load', () => {
  for (let i = 1; i <= 10; i++) {
    const value = getButtonsClass(i);
    if (value) setButtonsClass(String(i), value);
  }
  setClassFirstButton();
  const str = getValueLocalStorage();
  if (str) {
  getRenderBlocks(str);
  changeImages(str);
  getMargin(str);
  getColoredElements(str);
  getImageTitle();
  } else {
    getRenderBlocks('1');
    getColoredElements('1');
    getImageTitle();
  }
  getAnswer();

});
listenerButtonsLevel();
removeButtonsClasses();
window.addEventListener('beforeunload', setValueLocalStorage);
}
getSrtart();