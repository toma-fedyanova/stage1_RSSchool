import style from './style.css';
import { getAnimation } from './components/animation';
import { getRenderBlocks } from './app/app';
import { listenerButtonsLevel } from './app/listener';
import { changeImages } from './app/changeImg';
import { getMargin } from './app/hoverCode';
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
  } else getRenderBlocks('1');
});
listenerButtonsLevel();
window.addEventListener('beforeunload', setValueLocalStorage);
}
getSrtart();