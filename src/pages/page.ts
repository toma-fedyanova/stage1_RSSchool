//import { CarWeiv } from '../types/type';
import { Api } from '../api/garage';

export class RenderPages {
  api: Api;
  constructor() {
    this.api = new Api();
  }
  createElement(value: string, classNam: string, id?: string, text?: string):HTMLElement {
    const element = document.createElement(value);
    if (classNam) element.classList.add(classNam);
    if (id) element.id = id;
    if (text)element.textContent = text;
    return element;
  }
  createInput(classNam: string, typeName: string, placeholder?: string, val?: string) :HTMLInputElement {
    const input = document.createElement('input');
    if (classNam) input.classList.add(classNam);
    if (typeName) input.type = typeName;
    if (placeholder) input.placeholder = placeholder;
    if (val) input.value = val;
    return input;
  }
  createButtons(classNam: string, id: string[], text: string[], parent:HTMLElement, dataName?: string[]): void{
    for (let i = 0; i < text.length; i += 1) {
      const btn = document.createElement('button');
      if (classNam) btn.classList.add(classNam);
      if (id.length) btn.id = id[i];
      if (dataName) btn.setAttribute('data-name', dataName[i])
      btn.textContent = text[i];
      parent.append(btn);
    }
  }

  removeClass(id1: string, item: string, id2?: string) :void {
    const element1 = document.getElementById(id1);
    element1?.classList.remove(item);
    if (id2){
    const element2 = document.getElementById(id2);
    element2?.classList.remove(item);}
  }

   getColoredCar(color: string | null): string {
    if (!color || color.length !== 7 || color === '#000000') color = '#ffffff';
    const car = `
    <?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="85px" height="56px" viewBox="0 0 1280.000000 100.000000" preserveAspectRatio="xMidYMid meet">
<metadata> Created by potrace 1.15, written by Peter Selinger 2001-2017 </metadata>
<g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" fill=${color} stroke="none">
<path d="M4880 5759 c-586 -51 -1428 -339 -2345 -803 l-260 -131 -140 1 c-169 1 -245 18 -565 124 -359 119 -514 150 -653 131 -136 -19 -222 -65 -319 -170
-74 -79 -106 -149 -120 -259 -27 -223 33 -771 172 -1557 51 -286 98 -526 104 -532 4 -5 113 8 201 23 29 5 33 1 80 -73 64 -101 217 -254 326 -326 170 -112
382 -195 585 -228 43 -7 151 -13 239 -12 132 0 181 4 281 26 290 61 526 188 711 380 114 118 195 246 248 388 l17 46 116 6 c591 32 2893 33 3907 3 925 -28
1722 -59 1729 -68 2 -1 26 -48 55 -103 109 -213 277 -384 501 -508 222 -123 519 -184 766 -159 200 21 331 59 500 144 189 94 366 250 477 420 l52 81 115
-7 c159 -9 803 -54 870 -61 l56 -6 49 67 c26 36 60 96 74 133 24 61 26 77 25 231 0 126 -4 181 -17 230 -76 281 -185 492 -333 650 -327 347 -999 711 -1569
851 -149 37 -194 44 -430 69 -646 69 -1333 124 -2495 200 -388 26 -650 102 -1310 380 -451 190 -632 259 -844 319 -303 87 -605 122 -856 100z m4803 -1216
c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m115 -10 c-10 -2 -28
-2 -40 0 -13 2 -5 4 17 4 22 1 32 -1 23 -4z m110 -10 c-10 -2 -28 -2 -40 0
-13 2 -5 4 17 4 22 1 32 -1 23 -4z m188 -13 c43 -5 169 -19 279 -30 236 -25
348 -46 525 -101 382 -117 812 -335 1090 -552 100 -79 228 -206 273 -271 129
-190 216 -461 204 -640 -3 -43 -10 -83 -16 -89 -7 -7 -133 -1 -403 18 -216 15
-394 28 -395 29 -2 1 4 37 12 80 21 111 19 277 -5 397 -89 436 -404 776 -850
917 -263 83 -558 84 -818 1 -429 -137 -733 -448 -843 -864 -15 -58 -23 -123
-26 -239 l-6 -159 -91 7 c-50 3 -345 15 -656 26 -1492 52 -2757 69 -3808 51
-405 -7 -812 -15 -904 -18 l-168 -5 0 41 c0 61 -18 175 -42 260 -46 170 -150
344 -286 480 -103 103 -184 163 -324 237 -109 57 -123 69 -36 31 42 -18 62
-21 98 -16 25 4 83 8 129 8 45 1 147 5 225 10 77 6 238 15 356 21 118 6 296
15 395 20 99 5 266 14 370 20 105 5 276 14 380 20 105 5 276 14 380 20 105 5
278 14 385 20 107 6 278 15 380 20 236 12 512 27 760 40 107 6 279 15 383 20
103 6 273 15 377 20 105 6 276 15 380 20 105 6 276 15 380 20 105 6 277 15
383 20 105 6 273 15 372 20 99 5 275 14 390 20 116 6 280 15 365 20 85 5 236
13 335 17 99 4 173 8 165 10 -9 2 -72 10 -140 17 -69 8 -104 14 -79 15 25 0
81 -3 125 -9z m-8611 -433 c-190 -103 -333 -231 -444 -394 -51 -77 -116 -209
-138 -283 l-17 -55 -23 140 c-33 201 -75 535 -69 548 2 7 5 0 5 -15 1 -33 -7
-32 163 -18 68 5 186 11 263 14 l140 5 80 45 c44 25 84 46 90 46 5 0 -17 -15 -50 -33z"/>
</g> </svg>
  `;
    return car;
  }
//<?xml version="1.0" encoding="utf-8"?> <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> 
//<svg width="60px" height="60px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"> <path d="M248.685714 435.931429h533.942857c90.697143 0 163.84 73.142857 163.84 163.84v163.84h-863.085714V601.234286c0-90. 697143 74.605714-165.302857 165.302857-165.302857z" fill=${color} /> <path d="M956.708571 775.314286H73.142857V601.234286c0-96.548571 78.994286-174.08 174.08-174.08h533.942857c96.548571 0 174.08 78.994286 174.08 174.08V775.314286z m-863.085714-20.48H936.228571V601.234286c0-84.845714-68.754286-153.6-153.6-153.6H248.685714c-84.845714 0-153.6 68.754286-153.6 153.6v153.6z" fill=#141515 /> <path d="M430.08 765.074286H83.382857v-100.937143c23.405714-76.068571 90.697143-130.194286 169.691429-130.194286 99.474286 0 179.931429 84.845714 179.931428 190.171429 1.462857 14.628571 0 27.794286-2.925714 40.96z" fill=#B2D577 /> <path d="M438.857143 775.314286H73.142857v-114.102857c26.331429-81.92 98.011429-137.508571 179.931429-137.508572 105.325714 0 190.171429 90.697143 190.171428 201.874286 0 14.628571-1.462857 27.794286-4.388571 42.422857v7.314286zM93.622857 754.834286h326.217143c1.462857-10.24 2.925714-20.48 2.925714-29.257143 0-99.474286-76.068571-179.931429-169.691428-179.931429-71.68 0-136.045714 48.274286-159.451429 121.417143v87.771429z" fill="#141515" /> <path d="M946.468571 626.102857v138.971429H596.845714c-2.925714-13.165714-4.388571-26.331429-4.388571-39.497143C592.457143 614.4 677.302857 526.628571 781.165714 526.628571c71.68 0 131.657143 39.497143 165.302857 99.474286z" fill=#B2D577 /> <path d="M956.708571 775.314286H588.068571l-1.462857-8.777143c-2.925714-13.165714-4.388571-27.794286-4.388571-42.422857 0-115.565714 89.234286-209.188571 198.948571-209.188572 71.68 0 137.508571 40.96 174.08 105.325715l1.462857 2.925714V775.314286z m-351.085714-20.48H936.228571V629.028571c-32.182857-57.051429-90.697143-92.16-153.6-92.16-98.011429 0-178.468571 84.845714-178.468571 188.708572-1.462857 8.777143 0 19.017143 1.462857 29.257143z" fill=#141515 /> <path d="M83.382857 693.394286h861.622857v71.68H83.382857z" fill=${color} /> <path d="M956.708571 775.314286H73.142857v-92.16h883.565714V775.314286z m-863.085714-20.48H936.228571v-51.2H93.622857v51.2z" fill="#141515" /> <path d="M490.057143 194.56c152.137143 0 285.257143 106.788571 307.2 242.834286H247.222857c-8.777143 0-17.554286 0-26.331428 1.462857 0-136.045714 117.028571-244.297143 269.165714-244.297143z" fill=${color} /> <path d="M210.651429 450.56V438.857143c0-64.365714 24.868571-125.805714 71.68-172.617143 52.662857-52.662857 127.268571-81.92 207.725714-81.92 155.062857 0 295.497143 109.714286 317.44 251.611429l1.462857 13.165714-13.165714-1.462857H247.222857c-8.777143 0-16.091429 0-24.868571 1.462857l-11.702857 1.462857zM490.057143 204.8c-76.068571 0-144.822857 26.331429-193.097143 76.068571-39.497143 39.497143-62.902857 90.697143-64.365714 146.285715H785.554286C757.76 301.348571 631.954286 204.8 490.057143 204.8z" fill="#141515" /><path d="M747.52 437.394286H263.314286c24.868571-106.788571 115.565714-184.32 229.668571-184.32 114.102857 0 215.04 77.531429 254.537143 184.32z" fill="#90CED9" /><path d="M762.148571 447.634286h-512l2.925715-13.165715c26.331429-115.565714 122.88-191.634286 239.908571-191.634285 115.565714 0 222.354286 76.068571 264.777143 191.634285l4.388571 13.165715z m-485.668571-20.48H731.428571C690.468571 327.68 595.382857 263.314286 492.982857 263.314286s-187.245714 64.365714-216.502857 163.84z" fill="#141515" /><path d="M469.577143 437.394286h-43.885714v-175.542857c13.165714-4.388571 27.794286-7.314286 43.885714-8.777143v184.32z" fill="#97CA1B" /><path d="M479.817143 447.634286h-64.365714V254.537143l7.314285-1.462857c14.628571-4.388571 29.257143-7.314286 45.348572-8.777143l11.702857-1.462857v204.8z m-42.422857-20.48h21.942857v-160.914286l-21.942857 4.388571v156.525715z" fill="#141515" /><path d="M264.777143 829.44c57.051429 0 103.862857-46.811429 103.862857-103.862857s-46.811429-103.862857-103.862857-103.862857c-57.051429 0-103.862857 46.811429-103.862857 103.862857s46.811429 103.862857 103.862857 103.862857z" fill="#A1A69C" /><path d="M264.777143 839.68c-62.902857 0-114.102857-51.2-114.102857-114.102857s51.2-114.102857 114.102857-114.102857 114.102857 51.2 114.102857 114.102857-51.2 114.102857-114.102857 114.102857z m0-209.188571c-51.2 0-93.622857 42.422857-93.622857 93.622857 0 51.2 42.422857 93.622857 93.622857 93.622857s93.622857-42.422857 93.622857-93.622857c0-51.2-42.422857-93.622857-93.622857-93.622857z" fill="#141515" /><path d="M264.777143 725.577143m-49.737143 0a49.737143 49.737143 0 1 0 99.474286 0 49.737143 49.737143 0 1 0-99.474286 0Z" fill="#DAD9B4" /><path d="M264.777143 784.091429c-32.182857 0-59.977143-26.331429-59.977143-59.977143 0-32.182857 26.331429-59.977143 59.977143-59.977143 32.182857 0 59.977143 26.331429 59.977143 59.977143s-27.794286 59.977143-59.977143 59.977143z m0-98.011429c-21.942857 0-39.497143 17.554286-39.497143 39.497143 0 21.942857 17.554286 39.497143 39.497143 39.497143 21.942857 0 39.497143-17.554286 39.497143-39.497143-1.462857-21.942857-17.554286-39.497143-39.497143-39.497143z" fill="#141515" /><path d="M773.851429 829.44c57.051429 0 103.862857-46.811429 103.862857-103.862857s-46.811429-103.862857-103.862857-103.862857c-57.051429 0-103.862857 46.811429-103.862858 103.862857s45.348571 103.862857 103.862858 103.862857z" fill="#A1A69C" /><path d="M773.851429 839.68c-62.902857 0-114.102857-51.2-114.102858-114.102857s51.2-114.102857 114.102858-114.102857 114.102857 51.2 114.102857 114.102857-51.2 114.102857-114.102857 114.102857z m0-209.188571c-51.2 0-93.622857 42.422857-93.622858 93.622857 0 51.2 42.422857 93.622857 93.622858 93.622857 51.2 0 93.622857-42.422857 93.622857-93.622857 0-51.2-42.422857-93.622857-93.622857-93.622857z" fill="#141515" /><path d="M773.851429 725.577143m-49.737143 0a49.737143 49.737143 0 1 0 99.474285 0 49.737143 49.737143 0 1 0-99.474285 0Z" fill="#DAD9B4" /><path d="M773.851429 784.091429c-32.182857 0-59.977143-26.331429-59.977143-59.977143 0-32.182857 26.331429-59.977143 59.977143-59.977143 32.182857 0 59.977143 26.331429 59.977142 59.977143-1.462857 33.645714-27.794286 59.977143-59.977142 59.977143z m0-98.011429c-21.942857 0-39.497143 17.554286-39.497143 39.497143 0 21.942857 17.554286 39.497143 39.497143 39.497143 21.942857 0 39.497143-17.554286 39.497142-39.497143-1.462857-21.942857-19.017143-39.497143-39.497142-39.497143z" fill="#141515" /><path d="M449.097143 645.12c-5.851429 0-10.24-4.388571-10.24-10.24v-144.822857c0-5.851429 4.388571-10.24 10.24-10.24s10.24 4.388571 10.24 10.24v144.822857c0 5.851429-4.388571 10.24-10.24 10.24z" fill="#141515" /><path d="M661.211429 396.434286h76.068571c7.314286 0 14.628571 5.851429 14.628571 14.628571v36.571429c0 7.314286-5.851429 14.628571-14.628571 14.628571h-76.068571c-7.314286 0-14.628571-5.851429-14.628572-14.628571V409.6c0-7.314286 7.314286-13.165714 14.628572-13.165714z" fill="#DAE483" /><path d="M737.28 471.04h-76.068571c-13.165714 0-24.868571-11.702857-24.868572-24.868571V409.6c0-13.165714 11.702857-24.868571 24.868572-24.868571h76.068571c13.165714 0 24.868571 11.702857 24.868571 24.868571v36.571429c0 13.165714-11.702857 24.868571-24.868571 24.868571z m-76.068571-64.365714c-2.925714 0-4.388571 1.462857-4.388572 4.388571v36.571429c0 2.925714 1.462857 4.388571 4.388572 4.388571h76.068571c2.925714 0 4.388571-1.462857 4.388571-4.388571V409.6c0-2.925714-1.462857-4.388571-4.388571-4.388571h-76.068571z" fill="#141515" /><path d="M43.885714 689.005714h71.68v32.182857H43.885714z" fill="#6E7377" /><path d="M117.028571 731.428571H43.885714c-5.851429 0-10.24-4.388571-10.24-10.24v-32.182857c0-5.851429 4.388571-10.24 10.24-10.24h73.142857c5.851429 0 10.24 4.388571 10.24 10.24v32.182857c0 5.851429-5.851429 10.24-10.24 10.24z m-62.902857-20.48h51.2v-11.702857H54.125714v11.702857z" fill="#141515" /><path d="M896.731429 610.011429h64.365714c10.24 0 19.017143 8.777143 19.017143 19.017142v10.24c0 10.24-8.777143 19.017143-19.017143 19.017143h-64.365714c-10.24 0-19.017143-8.777143-19.017143-19.017143V629.028571c0-11.702857 8.777143-19.017143 19.017143-19.017142z" fill="#FFE638" /><path d="M961.097143 668.525714h-64.365714c-16.091429 0-29.257143-13.165714-29.257143-29.257143V629.028571c0-16.091429 13.165714-29.257143 29.257143-29.257142h64.365714c16.091429 0 29.257143 13.165714 29.257143 29.257142v10.24c0 16.091429-13.165714 29.257143-29.257143 29.257143z m-64.365714-48.274285c-4.388571 0-8.777143 4.388571-8.777143 8.777142v10.24c0 4.388571 4.388571 8.777143 8.777143 8.777143h64.365714c4.388571 0 8.777143-4.388571 8.777143-8.777143V629.028571c0-4.388571-4.388571-8.777143-8.777143-8.777142h-64.365714z" fill="#141515" /><path d="M934.765714 560.274286m-32.182857 0a32.182857 32.182857 0 1 0 64.365714 0 32.182857 32.182857 0 1 0-64.365714 0Z" fill="#FCDD10" /><path d="M934.765714 602.697143c-23.405714 0-42.422857-19.017143-42.422857-42.422857 0-23.405714 19.017143-42.422857 42.422857-42.422857s42.422857 19.017143 42.422857 42.422857c1.462857 23.405714-19.017143 42.422857-42.422857 42.422857z m0-64.365714c-11.702857 0-21.942857 10.24-21.942857 21.942857s10.24 21.942857 21.942857 21.942857 21.942857-10.24 21.942857-21.942857-8.777143-21.942857-21.942857-21.942857z" fill="#141515" /><path d="M507.611429 361.325714c-2.925714 0-5.851429-1.462857-7.314286-2.925714-4.388571-4.388571-4.388571-10.24 0-14.628571l46.811428-46.811429c4.388571-4.388571 10.24-4.388571 14.628572 0 4.388571 4.388571 4.388571 10.24 0 14.628571l-46.811429 46.811429c-1.462857 2.925714-4.388571 2.925714-7.314285 2.925714z" fill="#141515" /><path d="M514.925714 415.451429c-2.925714 0-5.851429-1.462857-7.314285-2.925715-4.388571-4.388571-4.388571-10.24 0-14.628571l84.845714-87.771429c4.388571-4.388571 10.24-4.388571 14.628571 0 4.388571 4.388571 4.388571 10.24 0 14.628572l-84.845714 87.771428c-1.462857 2.925714-4.388571 2.925714-7.314286 2.925715z" fill=#141515 /></svg>

   getButtonsHeader():void {
    const header = this.createElement('header', 'header', 'header');
    document.body.prepend(header);
    this.createButtons('button__bordered', ['garage', 'winner'], ['to garage', 'to winners'], header);
    const firstButton = header.firstElementChild;
    firstButton?.classList.add('selected');

    const section = this.createElement('section', 'section', 'section_main');
    header.insertAdjacentElement("afterend", section);
   }

   createBlockConfig():HTMLElement {
    const block = this.createElement('section', 'section__config', 'section__config');
    const buttonText = ['create', 'update']
    for (let i = 0; i < 2; i += 1) {
      const div = this.createElement('div', 'div_config');
      const inputText = this.createInput('car_name', 'text', 'Enter car name');
      const inputColor = this.createInput('car_color', 'color','', '#ff1507');
      const button = this.createElement('button', 'button_colored', `btn_${buttonText[i]}`, buttonText[i]);
      div.append(inputText);
      div.append(inputColor);
      div.append(button);
      block.append(div);
    }
    const divButton = this.createElement('div', 'div_buttons');
    this.createButtons('button_colored',['btn_race', 'btn_reset', 'btn_generate'], ['race', 'reset', 'generate cars'], divButton)
    block.append(divButton);
    return block;
  }
  
    createCar(name: string, color: string, id: number):HTMLElement {
      const car = this.createElement('li', 'garage_car', String(id));
      const div = this.createElement('div', 'car_buttons');
      this.createButtons('button_colored', ['btn_select', 'btn_remove'], ['select', 'remove'], div);
      const span = this.createElement('span', 'car_name', '', `${name}`);
      div.append(span);
      const div1 = this.createElement('div', 'car_buttons');
      div1.classList.add('single_race');
      this.createButtons('button__bordered', ['', ''], ['A', 'B'], div1, ['btn_A', 'btn_B']);
      div1.firstElementChild?.classList.add('selected');
      car.append(div);
      car.append(div1);
      car.insertAdjacentHTML('beforeend', this.getColoredCar(color));
      car.append(this.createElement('p', 'flag', 'flag', '🏁'));
      return car;
    }
  
    createGarage(countOfCars: string):HTMLElement {
    const garage = this.createElement('section', 'garage', 'garageBlock');
    const title = this.createElement('h1', 'garage_title', 'garage_title', 'Garage ');
    const span = this.createElement('span', 'cars_count', 'cars_count', `${countOfCars}`);
    title.insertAdjacentElement("beforeend", span);
    const text = this.createElement('h3', 'garage_page', 'garage_page', 'Page ');
    const span1 = this.createElement('span', 'page_count', 'page_count', `#1`);
    text.insertAdjacentElement("beforeend", span1);
    garage.insertAdjacentElement("beforeend", title);
    garage.insertAdjacentElement("beforeend", text);
    const ul = this.createElement('ul', 'ul_cars', 'ul_cars')
    garage.append(ul);
    const div = this.createElement('div', 'buttons_page');
    this.createButtons('button_colored', ['btn_previous_garage', 'btn_next_garage'], ['previous', 'next'], div);
    garage.append(div);
    return garage;
  }

   clearSection():void {
    const section = document.getElementById('section_main') as HTMLElement;
    section.innerHTML = '';
  }

   winner():void {
    this.clearSection();
    const titleTable: string[] = ['Number', 'Car', 'Name', 'Wins','Best time(seconds)'];
    const section = document.getElementById('section_main') as HTMLElement
    const title = this.createElement('h1', 'title_winners', 'title_winners', 'Winners()');
    section.append(title);
    const text = this.createElement('h3', 'winners_page', 'winners_page', 'Page #1');
    section.append(text);
    const table =   this.createElement('table', 'table', 'table');
    const thead = this.createElement('thead', 'thead', 'thead');
    for (let k = 0; k < 5; k++) {
      const td = this.createElement('td', 'td_head');
      td.textContent = titleTable[k];
      thead.append(td);
    }
    table.append(thead);
    for (let i = 0; i < 10; i += 1) {
      const tr = this.createElement('tr', 'tr');
        for (let j = 0; j < 5; j++) {
          const td = this.createElement('td', 'td');
          tr.append(td)
        }
        table.append(tr);
    }
    section.append(table);
    const div = this.createElement('div', 'winners_list', 'winners_list')
    this.createButtons('button_colored', ['btn_previous', 'btn_next'], ['previous', 'next'], div)
    section.append(div);
   }

   garage():void {
    this.clearSection();
    const section = document.getElementById('section_main') as HTMLElement;
    section.prepend(this.createBlockConfig());
    section.append(this.createGarage('4'))                                           //todo count of car
   }
}