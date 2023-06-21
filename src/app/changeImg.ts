import CreatorImage from '../base/rendImages';
import { Links } from '../components/blockPicture';

export function changeImages(level: string): void {
  const divs: NodeListOf<HTMLDivElement> = document.querySelectorAll('.image');
  const num: number = +level - 1;
  const arrayLinks: string[] = Links[num];
  const block = new CreatorImage;
  for (let i = 0; i < divs.length; i++) {
    const selector: string = '.' + divs[i].classList[1];
    block.cearBackground(selector);
    block.changeLink(selector, arrayLinks[i]);
  }
}