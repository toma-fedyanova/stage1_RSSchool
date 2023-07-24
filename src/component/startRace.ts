import { RenderPages } from '../pages/page';
import { Api} from '../api/garage'
import {EngineApi} from '../api/engine';
import {WinnersApi} from '../api/winners';
import {AnimationRace} from '../component/animation';

export class StartRace {
  renderPages: RenderPages;
  header: HTMLElement | null;
  api: Api;
  apiEngine: EngineApi; 
  page: number;
  pageWinner:  number;
  animationRace: AnimationRace;
  winnersApi: WinnersApi

  constructor() {
    this.renderPages = new RenderPages();
    this.api = new Api();
    this.apiEngine = new EngineApi();
    this.animationRace = new AnimationRace();
    this.winnersApi = new WinnersApi();
    this.header = document.getElementById('header');
    this.page = 1;
    this.pageWinner = 1;
  }

  start():void {
    this.renderButtonsHeader();
    this.renderPages.garage();
    this. buttonGarag();
    this.buttonWinner();
    this.startDriveButtons();
    this.buttonCreateCar(); 
    this.buttonChangePagesGarage();
    this.buttonChangePagesWinner();
    this.buttonUpdateCarGarage();
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
   async getName(id: string): Promise<string>{
    const data = await this.api.getCar(String(id));
    const res = data.name;
    return res;
   }

   async renderWinners():Promise<void> {
    await this.winnersApi.getPageWinners(this.pageWinner).then((arr) => {
      const trs = document.getElementsByClassName('tr');
      for (let i = 0; i < arr.length; i++) {
        const id = arr[i].id;
       for (const tr of trs) {
          if (tr.getAttribute('data-row') === String(i + 1)){
          tr.children[0].textContent = String(i + 1);
          tr.children[3].textContent = String(arr[i].wins);
          tr.children[4].textContent = String(arr[i].time);
          this.getName(String(id)).then(res => {
            const arrName = res.split(' ');
            const [name, ...rest] = arrName;
            tr.children[1].textContent = name;
            tr.children[2].textContent = rest.toString();
           });
          }
        }
      }
    });
   }


   buttonGarag():void {
    const buttonGarage = document.getElementById('garage');
    buttonGarage?.addEventListener('click', () => {
      this.renderPages.removeClass('garage', 'selected', 'winner');
      buttonGarage.classList.add('selected');
      this.renderPages.garage();
      this.renderCars();
      const span = document.getElementById('page_count');
      if (span) span.textContent = `#${this.page}`;
      console.log(this.apiEngine.infoDistance(1, 'started'));
      console.log(this.apiEngine.infoDrive(1));
      console.log(this.apiEngine.infoDistance(1, 'stopped'));
      });
    }

   buttonWinner():void {
    const buttonWinner = document.getElementById('winner');
    buttonWinner?.addEventListener('click', async() => {
      this.renderPages.removeClass('garage', 'selected', 'winner');
      buttonWinner.classList.add('selected');
       this.renderPages.winner();
      const span = document.querySelector('#page__winner_number');
      console.log(span)
      if (span) span.textContent = `#${this.pageWinner}`
      this.renderWinners();
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
          if (el.getAttribute('data-bool') === 'false') {
          this.animationRace.startRace();
          el.setAttribute('data-bool', 'true')}
          else alert('Верните машины на старт с помощью кнопки "RESET"!')
            }
        else if(el.closest('#btn_reset')) {
          this.animationRace.stopRace();
          const btn = document.getElementById('btn_race');
          btn?.setAttribute('data-bool', 'false')
            }
          });
        }

        buttonCreateCar(): void {
          document.body.addEventListener('click', async(event) => {
            const el = event.target as HTMLElement;
            if (el.closest('#btn_create')){
              const colorInput = el.previousElementSibling as HTMLInputElement;
              const color = colorInput.value;
              const nameInput = colorInput.previousElementSibling as HTMLInputElement;
              const name = (nameInput.value.length > 0) ? nameInput.value : 'noname'
                await this.api.postCar(name, color).then(() => this.renderPages.getcountCars()).then(() => {
                this.renderPages.garage();
                this.renderCars();
                const span = document.getElementById('page_count');
               if (span) span.textContent = `#${this.page}`
              })
            } else if (el.closest('.btn_remove')) {
              const li = el.closest('li');
              const id = Number(li?.id);
              if (li) await this.api.deleteCar(li?.id).then(() => li?.remove()).then(() => this.winnersApi.deleteWinner(id));
              const span = document.getElementById('page_count');
              if (span) span.textContent = `#${this.page}`
            } else if(el.closest('.btn_select')) {
              el.id = 'active';
              const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn_select');
              buttons.forEach(btn => {
                if (!(btn.id === 'active')) btn.disabled = true;
              })
            } 
          })
        }
        
        buttonUpdateCarGarage ():void {
          document.body.addEventListener('click', (event) => {
            const el = event.target as HTMLElement;
            if (el.closest('#btn_update')){
              const colorInput = el.closest('#btn_update')?.previousElementSibling as HTMLInputElement;
              const color = colorInput.value;
              const nameInput = colorInput?.previousElementSibling as HTMLInputElement;
              const name = nameInput.value;
              const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn_select');
            
              buttons.forEach(btn => {
                if (btn.id === 'active') {
                  const id = btn.closest('li')?.id || '0';
                  const li = btn.closest('li');
                  const svg = li?.querySelector('svg');
                  svg?.remove();
                  li?.insertAdjacentHTML('beforeend', this.renderPages.getColoredCar(color))
                  const text = li?.querySelector('.car_name');
                  if (text) text.textContent = name;
                  this.api.putCar(id, name, color);
                  btn.id = '';
                } else btn.disabled = false})
                
            }
         });
       
     }
        buttonChangePagesGarage(): void {
          document.body.addEventListener('click', async(event) => {
            const el = event.target as HTMLElement;
            const count =  this.renderPages.getPagesgarage();
            const span = document.getElementById('page_count');
            const pageActual = Number(span?.textContent?.slice(1));
            if (el.closest('#btn_next_garage')){
               const num = (pageActual < count) ? (pageActual + 1) : count;
               this.page = num;
               this.renderPages.garage();
               this.renderCars();
               const span = document.getElementById('page_count');
              if (span) span.textContent = `#${this.page}`;
               
            }
            else if (el.closest('#btn_previous_garage')){
               const num = (pageActual > 1) ? (pageActual - 1) : 1;
               this.page = num;
               this.renderPages.garage();
               this.renderCars();
               const span = document.getElementById('page_count');
              if (span) span.textContent = `#${this.page}`;
            }
            
            })
        }
        buttonChangePagesWinner(): void {
          document.body.addEventListener('click', async(event) => {
        
    

            
            const el = event.target as HTMLElement;
            if (el.closest('#btn_next')){
              const count =  this.renderPages.getPageswinner();
              const span = document.querySelector('#page__winner_number');
              console.log(span);
              const pageActual = Number(span?.textContent?.slice(1));
               const num = (pageActual < count) ? (pageActual + 1) : count;
               this.pageWinner = num;
               this.renderPages.winner();
               this.renderWinners();
               if (span) span.textContent = `#${this.pageWinner}`;
               
            }
            else if (el.closest('#btn_previous')){
              const span = document.querySelector('#page__winner_number');
              console.log(span);
              const pageActual = Number(span?.textContent?.slice(1));
               const num = (pageActual > 1) ? (pageActual - 1) : 1;
               this.pageWinner = num;
               this.renderPages.winner();
               this.renderWinners();
               if (span) span.textContent = `#${this.pageWinner}`;
            }
            
            })
        }

  }



