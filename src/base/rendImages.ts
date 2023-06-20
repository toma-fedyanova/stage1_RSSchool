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

class CreatorImage {
  changeLink(selector: string, link: string):void {
  const element = document.querySelector(selector) as HTMLDivElement;
  element.style.backgroundImage = link;
  }

  additionPicture(parent:HTMLDivElement, topSize: string, leftSize: string):void {
    const element = document.createElement('div') as HTMLDivElement;
    element.classList.add('image');
    element.style.position = 'relative';
    element.style.top = topSize;
    element.style.left = leftSize;
    parent.append(element);
  }

  cearBackground(selector:string):void {
    const element = document.querySelector(selector) as HTMLDivElement;
    element.style.backgroundImage = '';
  }
}