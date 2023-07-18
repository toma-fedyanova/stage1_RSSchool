import './style.css';
import { StartRace } from './component/startRace';

function startGame():void {
  const start = new StartRace();
  start.start();
}
startGame();
