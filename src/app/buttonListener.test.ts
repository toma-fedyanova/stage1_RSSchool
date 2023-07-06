//npm install --save-dev jest @types/jest ts-node
//npm install --save-dev @testing-library/jest-dom
//npx ts-jest config:init
//https://testing-library.com/docs/ecosystem-jest-dom/
//https://github.com/testing-library/jest-dom#with-typescript
import {setButtonsClass} from './buttonsListener';   //require the script file to modify the custom DOM next
const successCase = [
  {
    i: '1',
    value: 'colored',
    output: '<button class="button_bordered button_level colored" data-num = "1">Уровень 1</button>'
  },
  {
    i: '2',
    value: '',
    output: '<button class="button_bordered button_level" data-num = "2">Уровень 2</button>'
  },
  {
    i: '3',
    value: 'undefined',
    output: ''
  }
]

// test('Check change name of level', () => {
//   document.body.innerHTML = `
//   <div class="game__buttons">
//   <button class="button_bordered button_level" data-num = "1">Уровень 1</button>  
//   <button class="button_bordered button_level" data-num = "2">Уровень 2</button>
//   <button class="button_bordered button_level" data-num = "3">Уровень 3</button>
//   <button class="button_bordered button_level" data-num = "4">Уровень 4</button>
//   <button class="button_bordered button_level" data-num = "5">Уровень 5</button>
//   <button class="button_bordered button_level" data-num = "6">Уровень 6</button>
//   <button class="button_bordered button_level" data-num = "7">Уровень 7</button>
//   <button class="button_bordered button_level" data-num = "8">Уровень 8</button>
//   <button class="button_bordered button_level" data-num = "9">Уровень 9</button>
//   <button class="button_bordered button_level" data-num = "10">Уровень 10</button>
// </div>
//   `;    //want to test

//   const buttons = document.getElementsByClassName('button_level');

//   successCase.forEach((el, i) => expect(setButtonsClass(successCase[i]['i'], successCase[i]['value'])).toBe(successCase[i]['output']));
// });
test('Check change class list of buttons levels', () => {
  document.body.innerHTML = `
    <div class="game__buttons">
    <button class="button_bordered button_level" data-num = "1">Уровень 1</button>  
    <button class="button_bordered button_level" data-num = "2">Уровень 2</button>
    <button class="button_bordered button_level" data-num = "3">Уровень 3</button>
    <button class="button_bordered button_level" data-num = "4">Уровень 4</button>
    <button class="button_bordered button_level" data-num = "5">Уровень 5</button>
    <button class="button_bordered button_level" data-num = "6">Уровень 6</button>
    <button class="button_bordered button_level" data-num = "7">Уровень 7</button>
    <button class="button_bordered button_level" data-num = "8">Уровень 8</button>
    <button class="button_bordered button_level" data-num = "9">Уровень 9</button>
    <button class="button_bordered button_level" data-num = "10">Уровень 10</button>
  </div>
    `;
  expect(setButtonsClass('1', 'colored')).toBe('<button class="button_bordered button_level colored" data-num = "1">Уровень 1</button>');

});