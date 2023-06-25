export { level } from '../app/listener';

export function getColoredElements(): void {
  const codeBlock: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.code_line');
}

export function getMargin(level: string) : void {
  const codeBlock: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.code_line');
 if (level === '5') {
  codeBlock[3].style.marginLeft = '25px';
  codeBlock[4].style.marginLeft = '25px';
  codeBlock[5].style.marginLeft = '25px';
 }
 else {
  codeBlock[3].style.marginLeft = '0';
  codeBlock[4].style.marginLeft = '-10px';
  codeBlock[5].style.marginLeft = '0';
 }
}

