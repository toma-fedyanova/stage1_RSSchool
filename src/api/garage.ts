import { CarWeiv } from '../types/type';

export class Api {
  #url: string
  constructor() {
    this.#url = 'http://127.0.0.1:3000';
  }

  async getAllCars(): Promise<CarWeiv[]> {
    const data = await fetch(`${this.#url}/garage`);
    const res  = await data.json();
    return res;
  }

  // async getSevenCars():  Promise<CarWeiv[]> {
  //   const data = await fetch(`${this.#url}/garage/`)
  // }
} 