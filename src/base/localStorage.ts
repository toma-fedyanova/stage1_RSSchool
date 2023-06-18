function getValueLocalStorage():string | undefined {
  const value: string | null = localStorage.getItem(`level`);
  if (value) return value;
}

 function setValueLocalStorage(value: string):void {
  localStorage.setItem(`level`, value);
} 

export { getValueLocalStorage, setValueLocalStorage};