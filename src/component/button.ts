import { RenderPages } from '../pages/page';

export function buttonListener():void {
  //render 2 buttons: to Garage & to Winners
  const render = new RenderPages();
  render.getButtonsHeader();
  const buttons = document.getElementsByClassName('button__bordered');
  for (const button of buttons) {
    button.addEventListener('click', function change() {
      render.removeClass('garage', 'selected', 'winner');
      button.classList.add('selected');
      console.log(button);
    })
    
  }
}
