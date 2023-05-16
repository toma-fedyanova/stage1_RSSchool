import Creator from './Creator'
// npm init @eslint/config
// npm install eslint-plugin-import --save-dev  npm i eslint eslint-config-airbnb-base
// npm install -D webpack webpack-cli

getStart();
function getStart(num = 10) {
  let element = new Creator(num);
  element.getTitle();
  element.getField();
  element.setButtons();
}
