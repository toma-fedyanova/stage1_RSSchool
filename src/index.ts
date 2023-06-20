import style from './style.css';
import { getAnimation } from './components/animation';
import { getRenderBlocks } from './app/app';
import { listenerButtonsLevel } from './app/listener';
import { getValueLocalStorage, setValueLocalStorage } from './base/localStorage';

function getSrtart():void {
style;
window.addEventListener('load', getValueLocalStorage);
const str = getValueLocalStorage();
getAnimation(); 
if (str) getRenderBlocks(str);
else getRenderBlocks('1');
listenerButtonsLevel();
window.addEventListener('beforeunload', setValueLocalStorage);
}
getSrtart();