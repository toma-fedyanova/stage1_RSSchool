class Creator {
  constructor(count) {
    this.count = count;
  }
  getTitle() {
    let elem = document.createElement('h1');
    elem.textContent = 'Minesweeper';
    document.body.prepend(elem);
  }
  getField() {
    let elem  = document.createElement('section');
    elem.setAttribute('class', 'field')
    elem.style.width = '45%';
    elem.style.display = 'grid';
    elem.style.gridTemplateColumns = `repeat(${this.count}, 1fr)`;
    document.body.append(elem);
  }
  setButtons() {
    let field = document.getElementsByClassName('field')[0];
    let num = this.count ** 2;
    for (let i = 0; i < num; i++) {
      field.insertAdjacentHTML('beforeEnd', '<button class="button"></button>');
    }
  }
}