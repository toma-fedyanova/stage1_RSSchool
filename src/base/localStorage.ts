import { level } from '../app/listener';

function getValueLocalStorage():string | undefined {
  const value: string | null = localStorage.getItem(`level`);
  if (value) {
    const str = value;
    return str;
  }
}

 function setValueLocalStorage():void {
  const value: string = level;
  if (value) localStorage.setItem(`level`, value);
} 

export { getValueLocalStorage, setValueLocalStorage};