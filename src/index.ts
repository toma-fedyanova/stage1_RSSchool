import './style.css';
import { getAnimation } from './components/animation';
import { getRenderBlocks } from './app/app';
import { listenerButtonsLevel, setButtonsClass, setClassFirstButton, removeButtonsClasses, getHelpButton } from './app/buttonsListener';
import { changeImages, imgAnimation } from './app/changeImg';
import { getAnswer } from './app/textarea';
import { getMargin, getColoredElements, getImageTitle } from './app/hoverCode';
import { getValueLocalStorage, setValueLocalStorage, getButtonsClass } from './base/localStorage';

function getSrtart():void {
getAnimation();
window.addEventListener('load', () => {
  for (let i = 1; i <= 10; i++) {
    const value = getButtonsClass(i);
    if (value) setButtonsClass(String(i), value);
  }
  setClassFirstButton();
  const str = getValueLocalStorage();
  console.log(str);
  if (str) {
  getRenderBlocks(str);
  changeImages(str);
  imgAnimation(str);
  getMargin(str);
  getColoredElements(str);
  getImageTitle();
  } else {
    getRenderBlocks('1');
    getColoredElements('1');
    imgAnimation('1');
    getImageTitle();
  }
  getAnswer();
});
listenerButtonsLevel();
removeButtonsClasses();
getHelpButton();
window.addEventListener('beforeunload', setValueLocalStorage);
}
getSrtart();