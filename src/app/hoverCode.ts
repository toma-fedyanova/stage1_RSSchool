
export function getColoredElements(level: string): void {
  const codeBlock: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.code_line');
  console.log(codeBlock[6]);
  const imagesBlock: NodeListOf<HTMLDivElement> = document.querySelectorAll('.image');
  const changeColor = (element: HTMLElement, color: string): string => element.style.color = color;
  if (level !== '5') {
    for (let i = 0; i <imagesBlock.length; i++ ) {
      imagesBlock[i].addEventListener('mouseover', () => changeColor (codeBlock[i + 1], 'rgb(228, 132, 84)'));
      imagesBlock[i].addEventListener('mouseout', () => changeColor (codeBlock[i + 1], 'white'));
    }
  } else {
    const image = imagesBlock[1].firstElementChild as HTMLElement;
    image.addEventListener('mouseover', function(e) {
      e.preventDefault();
        for (let j = 3; j <= 5; j++) {
        changeColor (codeBlock[j], 'rgb(228, 132, 84)');
      }
    })
    image.addEventListener('mouseout', function(e) {
      e.preventDefault();
      for (let j = 3; j <= 5; j++) {
        changeColor (codeBlock[j], 'white');
      }
    })
      imagesBlock[0].addEventListener('mouseover', () => changeColor (codeBlock[1], 'rgb(228, 132, 84)'));
      imagesBlock[0].addEventListener('mouseout', () => changeColor (codeBlock[1], 'white'));
      imagesBlock[2].addEventListener('mouseover', () => changeColor (codeBlock[7], 'rgb(228, 132, 84)'));
      imagesBlock[2].addEventListener('mouseover', () => changeColor (codeBlock[3], 'white'));
      imagesBlock[2].addEventListener('mouseout', () => changeColor (codeBlock[7], 'white'));
      imagesBlock[1].addEventListener('mouseover', function() {
      changeColor (codeBlock[2], 'rgb(228, 132, 84)');
      changeColor (codeBlock[6], 'rgb(228, 132, 84)');
      })
      imagesBlock[1].addEventListener('mouseout', function() {
        changeColor (codeBlock[2], 'white');
        changeColor (codeBlock[6], 'white');
      })
  }
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