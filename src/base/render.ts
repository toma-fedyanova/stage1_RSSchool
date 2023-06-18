import taskText from '../components/blockTask';
import { InfoTask } from '../types/type';

export class RenderBlock {
  public text = '';
  public obj: Record<string, InfoTask> = taskText;
  constructor (public num: number | undefined, public selector: string, public parent: HTMLElement, public classes?: string) {}
  
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
      const number = String(this.num);
      const text: string | undefined= this.obj[(number || '1')][value];
      element.textContent = text as string;
    }
  }
  addClass(): void {
    const element = this.getElement();
    if(this.classes){
    element.classList.add(this.classes);
    }
  }
}