
export function getColoredElements(level: string): void {
  const codeBlock: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.code_line');
  const imagesBlock: NodeListOf<HTMLDivElement> = document.querySelectorAll('.image');
  const changeColor = (element: HTMLElement, color: string): string => element.style.color = color;
    for (let i = 0; i <imagesBlock.length; i++ ) {
      imagesBlock[i].addEventListener('mouseover', () => changeColor (codeBlock[i + 1], 'rgb(228, 132, 84)'));
      imagesBlock[i].addEventListener('mouseout', () => changeColor (codeBlock[i + 1], 'white'));
    }
    if (level === '5') {
      const image = imagesBlock[1].querySelector('img') as HTMLElement;
      image.addEventListener('mouseover', function() {
        for (let j = 3; j <= 5; j++) {
        changeColor (codeBlock[j], 'rgb(228, 132, 84)');
      }
    })
      image.addEventListener('mouseout', function() {
        for (let j = 3; j <= 5; j++) {
        changeColor (codeBlock[j], 'white');
      }
    });
        imagesBlock[1].addEventListener('mouseover', function getColor() {
        changeColor (codeBlock[2], 'rgb(228, 132, 84)');
        changeColor (codeBlock[6], 'rgb(228, 132, 84)');
            
        })
        imagesBlock[1].addEventListener('mouseout', function removeColor() {
          changeColor (codeBlock[2], 'white');
          changeColor (codeBlock[6], 'white');
          console.log('hhh');
          
        })
        imagesBlock[2].addEventListener('mouseover', () => changeColor (codeBlock[7], 'rgb(228, 132, 84)'));
        imagesBlock[2].addEventListener('mouseout', () => changeColor (codeBlock[7], 'white'));
    }
}

export function getImageTitle(): void {
  const codeBlock: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.code_line');
  const imagesBlock: NodeListOf<HTMLDivElement> = document.querySelectorAll('.image');
  const addText = (i: number): void => {
    const elem = imagesBlock[i].querySelector('.span') as HTMLSpanElement;
    elem.textContent = codeBlock[i + 1].textContent;
    imagesBlock[i].classList.add('filter');
  }
  const removeText = (i: number): void => {
    const elem = imagesBlock[i].querySelector('.span') as HTMLSpanElement;
    elem.textContent = '';
    imagesBlock[i].classList.remove('filter');
  }
  for (let i = 0; i < imagesBlock.length; i++) {
    imagesBlock[i].addEventListener('mouseover', () => addText(i));
    imagesBlock[i].addEventListener('mouseout', () => removeText(i));
    codeBlock[i + 1].addEventListener('mouseover', () => {
      addText(i);
      codeBlock[i + 1].style.color = 'rgb(228, 132, 84)';
    });
    codeBlock[i + 1].addEventListener('mouseout', () => {
      removeText(i);
      codeBlock[i + 1].style.color = 'white';
    });
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
  // imagesBlock[2].addEventListener('mouseover', () => changeColor (codeBlock[7], 'rgb(228, 132, 84)'));
      // imagesBlock[2].addEventListener('mouseover', () => changeColor (codeBlock[3], 'white'));
      // imagesBlock[2].addEventListener('mouseout', () => changeColor (codeBlock[7], 'white'));
      // imagesBlock[1].addEventListener('mouseover', function() {
      // changeColor (codeBlock[2], 'rgb(228, 132, 84)');
      // changeColor (codeBlock[6], 'rgb(228, 132, 84)');
      // })
      // imagesBlock[1].addEventListener('mouseout', function() {
      //   changeColor (codeBlock[2], 'white');
      //   changeColor (codeBlock[6], 'white');
      // })
  