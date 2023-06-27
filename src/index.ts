import style from './style.css';
import { getAnimation } from './components/animation';
import { getRenderBlocks } from './app/app';
import { listenerButtonsLevel } from './app/listener';
import { changeImages } from './app/changeImg';
import { getMargin, getColoredElements, getImageTitle } from './app/hoverCode';
import { getValueLocalStorage, setValueLocalStorage } from './base/localStorage';

function getSrtart():void {
style;
getAnimation();
window.addEventListener('load', () => {
  const str = getValueLocalStorage();
  if (str) {
  getRenderBlocks(str);
  changeImages(str);
  getMargin(str);
  getColoredElements(str);
  getImageTitle()
  } else {
    getRenderBlocks('1');
    getColoredElements('1');
    getImageTitle()
  }
});
listenerButtonsLevel();
window.addEventListener('beforeunload', setValueLocalStorage);
}
getSrtart();