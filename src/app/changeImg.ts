import CreatorImage from '../base/rendImages';
import { Links } from '../components/blockPicture';
import img from '../image/bird2.png';
import img1 from '../image/cat2.png';
import img2 from '../image/dog2.png';
import img3 from '../image/dog3.png';
import img4 from '../image/dog4.png';
import img5 from '../image/fish.png';

export function changeImages(level: string): void {
  img; img1; img2; img3; img4; img5;
  const divs: NodeListOf<HTMLDivElement> = document.querySelectorAll('.image');
  const num: number = +level - 1;
  const arrayLinks: string[] = Links[num];
  const block = new CreatorImage;
  for (let i = 0; i < divs.length; i++) {
    const selector: string = '.' + divs[i].classList[1];
    block.clearBackground(selector);
    block.changeLink(selector, arrayLinks[i]);
    const img = divs[i].firstElementChild as HTMLImageElement;
    if (img) img.remove();
  }
  if (level === '5') {
    const parent = document.querySelector('.image2') as HTMLDivElement;
    const link = "images/fish.png";
    block.additionPicture(parent, link);
  }
}