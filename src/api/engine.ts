import { Engine, MessageEngine } from '../types/type';

export class EngineApi {
  #url: string
  constructor() {
    this.#url = 'http://127.0.0.1:3000';
  }
  async infoDistance(id: number, status: 'started' | 'stopped' | 'drive'): Promise<Engine> {
    const data = await fetch(`${this.#url}/engine/?id=${id}&status=${status}`, {method: 'PATCH'})
    const res = await data.json();
    return res;
  }
  async infoDrive(id: number): Promise<MessageEngine | undefined> {
    const data = await fetch(`${this.#url}/engine/?id=${id}&status=drive`, {method: 'PATCH'})
    const res = await data.json();
    return res.satus;
    }

}