import { RenderPages } from '../pages/page';
import { Api} from '../api/garage'
//import { CarWeiv } from '../types/type';

export class StartRace {
  renderPages: RenderPages;
  header: HTMLElement | null;
  api: Api;

  constructor() {
    this.renderPages = new RenderPages();
    this.api = new Api();
    this.header = document.getElementById('header');
  }

  start():void {
    this.renderButtonsHeader();
    this.renderPages.garage();
    this. buttonGarag();
    this.buttonWinner();
  }
   renderButtonsHeader():void {
    this.renderPages.getButtonsHeader()
   }
   renderCars():void {
    const ul = document.getElementById('ul_cars') as HTMLUListElement;
    this.api.getCars(1).then(arr => {                                            //todo page number
      for (const car of arr){
        const carExample = this.renderPages.createCar(car.name, car.color, car.id)
        ul.insertAdjacentElement("beforeend", carExample);
      }
     })
   }
   buttonGarag():void {
    const buttonGarage = document.getElementById('garage');
    buttonGarage?.addEventListener('click', () => {
      this.renderPages.removeClass('garage', 'selected', 'winner');
      buttonGarage.classList.add('selected');
      this.renderPages.garage();
      this.renderCars();

      });
    }
   buttonWinner():void {
    const buttonWinner = document.getElementById('winner');
    buttonWinner?.addEventListener('click', () => {
      this.renderPages.removeClass('garage', 'selected', 'winner');
      buttonWinner.classList.add('selected');
      this.renderPages.winner();
      });
    }
  }



