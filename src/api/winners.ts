import { Winners } from "../types/type";

export class WinnersApi {
  #url: string
  constructor() {
    this.#url = 'http://127.0.0.1:3000';
  }

  async postWinner(id: number, wins: number, time: number ): Promise<void> {
    const config: Winners = {
    id: id,
    wins: wins,
    time: time
    }
    const data = await fetch(`${this.#url}/winners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(config),
    });
    const res = await data.json();
    return res; 
  }

  async putWinner(id: number, wins: number, time: number ): Promise<void> {
    const config: Winners = {
    wins: wins,
    time: time
    }
    const data = await fetch(`${this.#url}/winners/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(config),
    });
    const res = await data.json();
    return res; 
  }

  async deleteWinner(id: number): Promise<void> {
    const data = await fetch(`${this.#url}/winners/${id}`, {method: 'DELETE'});
    const res = await data.json();
    return res; 
  }

  async getWinner(id: number): Promise<Winners | null> {
    const data = await fetch(`${this.#url}/winners/${id}`, {method: 'GET'});
    const res = await data.json();
    if (res.status === 200) return res; 
    else return null;
  }
}