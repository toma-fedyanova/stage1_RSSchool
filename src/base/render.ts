import taskText from '../components/blockTask';
import { arrayString, InfoTask, LevelsCount } from '../types/type';

export default class RenderBlock {
  public text = '';
  public obj: Record<string, InfoTask> = taskText;
  constructor (public num: string, public selector: string, public classes?: string) {}
  
  getElement(): HTMLElement {
      const element = document.querySelector(this.selector) as HTMLElement;
      return element;
  }

  cleartextElem() : void {
      const element = this.getElement();
      if (element) element.textContent = "";
  }

  addText() : void {
     const element = this.getElement();
     const value = element.getAttribute('data-ident') as keyof InfoTask;

     if (value){
       const number = this.num;
       const text: string | undefined= this.obj[(number)][value];
       element.textContent = text as string;
     }
  }
  addCode(array: arrayString, index: number) : void {
       const element = this.getElement();
       const num: LevelsCount =  +this.num - 1;
       const arr: string []= array[num];
       element.textContent = arr[index] as string;
     
  }
  addClass(): void {
    const element = this.getElement();
    if(this.classes){
    element.classList.add(this.classes);
    }
  }
}