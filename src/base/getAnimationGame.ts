export default class GetAnimationGame {
  addMove(array:number[], elements: NodeListOf<HTMLDivElement>):void {
    const variables = array;
    for (const num of variables) {
      const element = elements[num]; 
      element.style.animation = 'move-image 0.5s infinite';
      }
    
  }
  
  removeAnimation(elements: NodeListOf<HTMLDivElement>):void {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.animation = '';
    }
  }
  addShake():void {
   const element = document.querySelector('textarea') as HTMLTextAreaElement;
   element.style.animation = 'textarea-shake 0.5s 3;'
  }
  getSelectButton(level: string):void {
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button_level');
    for (const button of buttons) {
      if (button.getAttribute('data-num') === level) {
        button.classList.remove('selected');
        button.classList.add('colored');
      }
    }
  }
}