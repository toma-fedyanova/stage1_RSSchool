import { RenderPages } from '../pages/page';
import { Api} from '../api/garage'
import {EngineApi} from '../api/engine';
import {AnimationRace} from '../component/animation';
//import { CarWeiv } from '../types/type';

export class StartRace {
  renderPages: RenderPages;
  header: HTMLElement | null;
  api: Api;
  apiEngine: EngineApi; 
  page: number;
  animationRace: AnimationRace;

  constructor() {
    this.renderPages = new RenderPages();
    this.api = new Api();
    this.apiEngine = new EngineApi();
    this.animationRace = new AnimationRace();
    this.header = document.getElementById('header');
    this.page = 1;
  }

  start():void {
    this.renderButtonsHeader();
    this.renderPages.garage();
    this. buttonGarag();
    this.buttonWinner();
    this.startDriveButtons();
  }
   renderButtonsHeader():void {
    this.renderPages.getButtonsHeader()
   }
   renderCars():void {
    const ul = document.getElementById('ul_cars') as HTMLUListElement;
    this.api.getCars(this.page).then(arr => {                                            //todo page number
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
      console.log(this.apiEngine.infoDistance(1, 'started'));
      console.log(this.apiEngine.infoDrive(1));
      console.log(this.apiEngine.infoDistance(1, 'stopped'));
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
    startDriveButtons():void {
        document.body.addEventListener('click', async(event) => {
        const el = event.target as HTMLElement;
        if (el.getAttribute('data-name') === 'btn_B') { 
              this.animationRace.startMove(el)
            .catch(() => console.log(`Code 500.Car has been stopped suddenly. It's engine was broken down`));
          }
        else if (el.getAttribute('data-name') === 'btn_A') { 
              this.animationRace.returnStart(el);
            }
        else if(el.closest('#btn_race')) {
          this.animationRace.startRace();
            }
          });
        }
  }



