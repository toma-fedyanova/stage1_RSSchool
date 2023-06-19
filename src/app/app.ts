import RenderBlock from '../base/render';
import { CodeText } from '../components/blockCode';

export function getRenderBlocks(level: string):void {
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

  const elems:NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.code_line');
  for (let i = 0; i < elems.length; i++) {
    const str:string = '.' + elems[i].classList[2];
    if (str) {
      const blockCode = new RenderBlock(level, str)
      blockCode.cleartextElem();
      blockCode.addCode(CodeText, i);
    }
  }

}
