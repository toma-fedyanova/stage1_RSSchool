import './style.css';
import { RenderGaragePage } from './pages/garage';

const car = new RenderGaragePage;

const el = car.getColoredCar('#64B829'); //#64B829 #97CA1B
document.body.innerHTML = el;