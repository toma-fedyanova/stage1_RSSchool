import CreatorImage from '../base/rendImages';
import { Links } from '../components/blockPicture';
import img from '../image/bird2.png';
import img1 from '../image/cat2.png';
import img2 from '../image/dog2.png';
import img3 from '../image/dog3.png';
import img4 from '../image/dog4.png';
import img5 from '../image/fish.png';
import img6 from '../image/cat_gray.png';

function changeImages(level: string): void {
  img; img1; img2; img3; img4; img5; img6;
  const divs: NodeListOf<HTMLDivElement> = document.querySelectorAll('.image');
  const num: number = +level - 1;
  const arrayLinks: string[] = Links[num];
  const block = new CreatorImage;
  for (let i = 0; i < divs.length; i++) {
    const selector: string = '.' + divs[i].classList[1];
    block.clearBackground(selector);
    block.changeLink(selector, arrayLinks[i]);
    const img = divs[i].querySelector('img') as HTMLImageElement;
    if (img) img.remove();
  }
  if (level === '5') {
    const parent = document.querySelector('.image2') as HTMLDivElement;
    const link = "images/fish.png";
    block.additionPicture(parent, link);
  }
}

function imgAnimation(level: string): void {
  const divs: NodeListOf<HTMLDivElement> = document.querySelectorAll('.image');
  console.log(level);
  divs.forEach(img => img.classList.remove('img_animation'));
  divs.forEach(img => img.removeAttribute('data-img'));
  if (level === '1') {
    divs.forEach(img => {
      img.classList.add('img_animation');
      img.setAttribute('data-img', 'true');
    });
  }
  if (level === '2' || level === '8') {
    divs.forEach((img, index: number) => {
    if (index === 0 || index === 1) {
      img.classList.add('img_animation');
      img.setAttribute('data-img', 'true');
    }
  });
}
  if (level === '3' || level === '9' || level === '10') {
    divs[0].classList.add('img_animation');
    divs[0].setAttribute('data-img', 'true');
  }
  if (level === '4' || level === '7') {
    divs.forEach((img, index: number) => {
      if (index === 0 || index === 2) {
        img.classList.add('img_animation');
        img.setAttribute('data-img', 'true');
      }
    });
  }
  if (level === '6') {
    divs[1].classList.add('img_animation');
    divs[1].setAttribute('data-img', 'true');
  }
}

export { changeImages, imgAnimation};