import taskText from '../components/blockTask';
import { InfoTask } from '../types/type';

class RenderBlock {
  public text = '';
  public obj: Record<string, InfoTask> = taskText;
  constructor (public num: number | undefined, public selector: string, public parent: HTMLElement, public level: string | null, public classes?: string) {}
  
  getElement(): HTMLElement {
      const element = document.querySelector(this.selector) as HTMLElement;
      return element;
  }

  cleartextElem(this: RenderBlock) : void {
      const element = this.getElement();
      if (element) element.textContent = "";
  }

  addText(this: RenderBlock) : void {
    const element = this.getElement();
    const value: string | null = element.getAttribute('data-ident');
    if (value){
      const text = this.obj[(this.num || '1')][value]
      element.textContent = text;
    }
  }
}