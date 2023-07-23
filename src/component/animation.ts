import {EngineApi} from '../api/engine';
import { WinnersApi } from '../api/winners';
import { Api } from '../api/garage';

export class AnimationRace {
  engineApi: EngineApi;
  winnersApi: WinnersApi;
  api: Api;
  #carWidth: number;

  constructor() {
    this.engineApi = new EngineApi();
    this.winnersApi = new WinnersApi();
    this.api = new Api();
    this.#carWidth = 85; //from svg parametrs
  }

  getMessage(parent:Element | null | undefined):void {
    const span = document.createElement('span');
        span.classList.add('message');
        span.textContent = ' It`s engine was broken down';
        if (parent) parent.insertAdjacentElement('beforeend', span);
  }
  getMessageWin(parent:Element | null | undefined):void {
        const name = parent?.querySelector('span')?.textContent;
        const span = document.createElement('span');
        span.classList.add('message');
        span.textContent = `🎉 ${name} won!! 🎉🎉🎉`;
        if (parent) parent.insertAdjacentElement('beforeend', span);
  }

  async startMove(element: HTMLElement): Promise<number[]>{
    element.classList.add('selected');
    element.previousElementSibling?.classList.remove('selected');
    const div = element.parentElement?.children as HTMLCollectionOf<HTMLButtonElement>;
    if (div) [...div].forEach(btn => btn.disabled = true);
  const li = element.closest('li.garage_car');
  let roadLength: number;
  if (li) roadLength= parseInt(window.getComputedStyle(li).width) - this.#carWidth;
  const car = li?.querySelector('svg');
  const id = Number(li?.id);
  let requestId: number;
  let carLocate: number;
  let lastDistance: number;
      const step = ():void => {
      carLocate += lastDistance;  //сколько прибавить px при смене экрана
      if (car) car.style.transform = `translateX(${carLocate}px)`;
      if (carLocate < roadLength ) { 
        requestId = window.requestAnimationFrame(step);
      } 
      };
      const timePromise = await this.engineApi.infoDistance(id, 'started').then((res) => {
      const duration = res.distance / res.velocity;  //(расстояние / скорость) = время
      const durationMin = (duration / 1000) * 60;  // при обновлении экрана 60 кадров в сек
      if (car) carLocate = car.getBoundingClientRect().x;
      if (car) lastDistance = (roadLength - car.getBoundingClientRect().x) / durationMin;
      step();
      return duration;
    });
    return this.engineApi.infoDrive(id)
      .then(() => {
        if (div) [...div].map(btn => btn.disabled = false);
        return [id, timePromise]})
      .catch(() => {
        window.cancelAnimationFrame(requestId);
        this.getMessage(li?.firstElementChild);
        if (div) [...div].map(btn => btn.disabled = false);
        throw new Error(`Code 500. Car has been stopped suddenly. It's engine was broken down.`);
      });
    }

    returnStart(el: HTMLElement): void {
      el.classList.add('selected');
      el.nextElementSibling?.classList.remove('selected');
      const li = el.closest('li');
      const span = li?.querySelector('.message');
      if (span) span.textContent = '';
      const car = li?.querySelector('svg');
      if (car) car.style.transform = `translateX(0px)`
    }
    
    startRace():void {
      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn_B');
      const header = document.querySelector('.section__config')
      const div = document.createElement('div');
      div.classList.add('absolute');
      div.style.backgroundColor = 'black';
      header?.prepend(div);
      Promise.any((Array.from(buttons)).map(btn => this.startMove(btn))).then(res => {
        this.sendWinnerServer(res);
        return res;
      }).then((res) => {
        const num = String(res[0]);
        const li = document.getElementById(num);
        this.getMessageWin(li?.firstElementChild);
        })
      .then(() => {
        setTimeout(() => {
          div.classList.remove('absolute')
        },4000) 
      }).catch(er => console.log(er))
    }

    stopRace():void {
      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn_A');
      Promise.all((Array.from(buttons)).map(btn => this.returnStart(btn))).then(() => {
        const spans = document.querySelectorAll('.message');
        spans.forEach(span => span.remove());
      }).catch(er => console.log(er))
    }

    async sendWinnerServer(res: number[]): Promise<void> {
        const id = res[0];
        const time = Number((res[1] / 1000).toFixed(2));
        console.log(time)
        await this.winnersApi.postWinner(id, 1, time).catch(async () => {
          const winners = await this.winnersApi.getWinner(id);
          const timeBest = winners.time;
          console.log(timeBest + 'timebest')
         if (timeBest > time) winners.time = time;
         winners.wins = winners.wins + 1;
         await this.winnersApi.putWinner(id, winners.wins, winners.time)})
  }
}
