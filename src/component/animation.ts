import {EngineApi} from '../api/engine';

export class AnimationRace {
  engineApi: EngineApi;
  #carWidth: number;

  constructor() {
    this.engineApi = new EngineApi();
    this.#carWidth = 85; //from svg parametrs

  }

  getMessage(parent:Element | null | undefined):void {
    const span = document.createElement('span');
        span.classList.add('message');
        span.textContent = ' It`s engine was broken down';
        if (parent) parent.insertAdjacentElement('beforeend', span);
  }

  async startMove(element: HTMLElement): Promise<number[]>{
    element.classList.add('selected');
    element.previousElementSibling?.classList.remove('selected');
    const div = element.parentElement?.children as HTMLCollectionOf<HTMLButtonElement>;
    if (div) [...div].map(btn => btn.disabled = true);
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
}

