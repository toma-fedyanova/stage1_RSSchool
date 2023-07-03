
export function getAnswer(): void {
  const answers: string[] = ['*', 'cat', '#bird', '.dog', 'cat>fish', '[name="пушок"]', '[name^="мар"]', '[name$="акс"]', 'cat:disabled', 'road:not(dog)'];
  const textarea = document.querySelector('#textarea') as HTMLTextAreaElement;
  const button = document.querySelector('.textarea_button') as HTMLButtonElement;
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button_level');
  function getNumberLevel(): string {
  let res = '';
  buttons.forEach(button => {
    if( button.classList.contains('selected')) res += button.getAttribute('data-num')});
    return answers[+res - 1] ?? '*';
}
  function getValue():void {
    const answer = getNumberLevel();
    console.log(answer);
    const value = textarea.value.replace(/`|'/g, '"');
    textarea.value = '';
    if (value.split('\n').join('') == answer) {
    textarea.classList.remove('textarea_animation');
    buttons.forEach(button => {
        if (button.classList.contains('selected')) {
        button.classList.remove('selected');
        button.classList.add('colored');
        }
      });
    }
    else {
      textarea.value = '';
      textarea.classList.add('textarea_animation');
    }
  }
  textarea?.addEventListener('keypress', function getAnswer(e) {
    textarea.classList.remove('textarea_animation');
    if (e.key === 'Enter') getValue()});
  button.addEventListener('click', function() {
  
     getValue();
    })
}