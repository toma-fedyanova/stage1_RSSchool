function countClick() {
  let counter = 0;
  function listenerClick() {
    counter++;
  }
  let field = document.getElementsByClassName('field')[0];
  field.addEventListener('click', function func(event) {
    if (event.target.matches('button_closed')) listenerClick();
  })
  return counter;
}
window.statistic = countClick();