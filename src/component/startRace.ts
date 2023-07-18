import { RenderPages } from '../pages/page';

export class StartRace {
  renderPages: RenderPages;
  header: HTMLElement | null;

  constructor() {
    this.renderPages = new RenderPages();
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

   buttonGarag():void {
    const buttonGarage = document.getElementById('garage');
    buttonGarage?.addEventListener('click', () => {
      this.renderPages.removeClass('garage', 'selected', 'winner');
      buttonGarage.classList.add('selected');
      this.renderPages.garage();
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



