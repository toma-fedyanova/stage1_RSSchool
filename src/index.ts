import style from './style.css';
import { getAnimation } from './components/animation';
import { getRenderBlocks } from './app/app';
import { listenerButtonsLevel } from './app/buttonsListener';
import { changeImages } from './app/changeImg';
import { getAnswer } from './app/textarea';
import { getMargin, getColoredElements, getImageTitle } from './app/hoverCode';
import { getValueLocalStorage, setValueLocalStorage, getButtonsClass } from './base/localStorage';

function getSrtart():void {
style;
getAnimation();
window.addEventListener('load', () => {
  console.log(getButtonsClass(1));
  console.log(getButtonsClass(2));
  console.log(getButtonsClass(3));
  console.log(getButtonsClass(4));
  console.log(getButtonsClass(5));
  console.log(getButtonsClass(6));
  console.log(getButtonsClass(7));
  console.log(getButtonsClass(8));
  console.log(getButtonsClass(9));
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
window.addEventListener('beforeunload', setValueLocalStorage);
}
getSrtart();