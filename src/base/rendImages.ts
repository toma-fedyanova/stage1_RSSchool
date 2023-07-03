/* import img from './image/backgrd.png';

class CreatorImage {

  createImage():void {
    const temp = new Image();
    temp.src = img;
    temp.style.backgroundSize = '50% auto';
    const div = document.createElement('div') as HTMLDivElement;
    div.append(temp);
    document.body.appendChild(div);
  }
}

export default Creator;*/

export default class CreatorImage {
  changeLink(selector: string, link: string):void {
  const element = document.querySelector(selector) as HTMLDivElement;
  element.style.backgroundImage = link;
  }

  additionPicture(parent:HTMLDivElement, link: string):void {
    const element = document.createElement('img') as HTMLImageElement;
    element.classList.add('addition_image');
    element.classList.add('img_animation');
    element.src = link;
    element.alt = 'fish';
    element.addEventListener('load', () => {
      parent.append(element);
    })
    element.addEventListener('error', () => {
      console.error('ошибка закгрузки');
    })
  
  }

  clearBackground(selector:string):void {
    const element = document.querySelector(selector) as HTMLDivElement;
    element.style.backgroundImage = '';
    const addition = document.getElementsByClassName('addition__block')[0];
    if (addition) addition.remove();
  }
}