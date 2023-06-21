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
    
    const element = document.createElement('div') as HTMLDivElement;
    element.style.width = '100%';
    element.style.height = '40px';
    element.style.marginTop = '100px';
    element.style.backgroundImage = link;
    element.style.position = 'relative';
    console.log(element);
    parent.append(element);
  }

  cearBackground(selector:string):void {
    const element = document.querySelector(selector) as HTMLDivElement;
    element.style.backgroundImage = '';
  }
}