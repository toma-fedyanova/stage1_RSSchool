export default class Creator {
  constructor(count) {
    this.count = count;
  }
  getTitle() {
    let elem = document.createElement('h1');
    elem.textContent = 'Minesweeper';
    document.body.prepend(elem);
  }
  getBlockInfo(child, parent, nameAttr, text) {
    let elem = document.createElement(child);
    elem.setAttribute('class', nameAttr);
    if (text) elem.textContent = text;
    parent.append(elem);
  }
  getField() {
    let elem  = document.createElement('section');
    elem.setAttribute('class', 'field')
    elem.style.display = 'grid';
    elem.style.gridTemplateColumns = `repeat(${this.count}, 1fr)`;
    document.body.append(elem);
  }
  setButtons() {
    let field = document.getElementsByClassName('field')[0];
    let num = this.count ** 2;
    for (let i = 0; i < num; i++) {
      field.insertAdjacentHTML('beforeEnd', '<button class="button button_closed"></button>');
    }
  }
}