import { Api } from '../api/garage';
import { WinnersApi } from '../api/winners';

export class RenderPages {
  api: Api;
  countCars: number;
  countWinners: number;
  winnersApi: WinnersApi

  constructor() {
    this.api = new Api();
    this.winnersApi = new WinnersApi();
    this.countCars = 4;
    this.countWinners = 0
  }

   async getcountCars(): Promise<void> {
    await this.api.getTotalCars().then(res => this.countCars = res.length);
  }
   async getcountWinners(): Promise<void> {
    await this.winnersApi.getAllWinner().then(res => this.countWinners = res.length);
  }

  getPagesgarage(): number {
    const num = Math.ceil(this.countCars / 7);
    return num;
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
      div1.lastElementChild?.classList.add('btn_B');
      div1.firstElementChild?.classList.add('btn_A');
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
    const span1 = this.createElement('span', 'page_count', 'page_count'); 
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
    const title = this.createElement('h1', 'title_winners', 'title_winners', 'Winners ');
    const span = document.createElement('span');
    this.getcountWinners()
    span.textContent = String(this.countWinners);                                        //todo coun winners
    title.append(span);
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
    document.getElementById('btn_race')?.setAttribute('data-bool', 'false');
    this.getcountCars();                                             //examine
    section.append(this.createGarage(String(this.countCars)))                                           //todo count of car
   }
}