import { CarWeiv } from '../types/type';

export class Api {
  #url: string
  constructor() {
    this.#url = 'http://127.0.0.1:3000';
  }

  async getCars(page = 1, limit = 7):Promise<CarWeiv[]> {
    const data = await fetch(`${this.#url}/garage/?_page=${page}&_limit=${limit}`);
    const res = data.json();
    return res;
  }

  async getTotalCars(): Promise<number> {
    const data = await fetch(`${this.#url}/garage`);
    const res =  await data.json();
    const number = res.headers.get('X-Total-Count');
    return Number(number);
  }

  async getCar(id: string): Promise<CarWeiv> {
    const data = await fetch(`${this.#url}/garage/${id}`);
    const res = data.json();
    return res;
  }
} 