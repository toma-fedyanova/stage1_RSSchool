import RenderBlock from '../base/render';
import { getValueLocalStorage } from '../base/localStorage';

export function getRenderBlocks():void {
  const level: string | undefined = getValueLocalStorage();
  const blockTask = new RenderBlock(level, '.paragraph_title')
  blockTask.cleartextElem();
  blockTask.addText();
  const blockContext = new RenderBlock(level, '.paragraph_context')
  blockContext.cleartextElem();
  blockContext.addText();
  const blockCode = new RenderBlock(level, '.example_code')
  blockCode.cleartextElem();
  blockCode.addText();
  const blockText = new RenderBlock(level, '.paragraph_task')
  blockText.cleartextElem();
  blockText.addText();
}