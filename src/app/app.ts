import RenderBlock from '../components/blockTask';
import { getValueLocalStorage } from '../base/localStorage';

export function getRenderBlockOne():void {
  const level: string | undefined = getValueLocalStorage();
  console.log(level);
  //let blockTask = new RenderBlock((public num: number | undefined, public selector: string, public parent: HTMLElement, public level: string | null, public classes?: string))
}