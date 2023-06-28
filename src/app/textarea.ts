import GetAnimationGame from '../base/getAnimationGame';

export function getAnswer(): void {
  const answers: string[] = ['*', 'cat', '#bird', '.dog', 'cat > fish', '[name="пушок"]', '[name^="мар"]', '[name$="акс"]', 'cat:disabled', 'car :not(dog)'];
  const getAnimation = new GetAnimationGame;
  const textarea = document.querySelector('#textarea') as HTMLTextAreaElement;
  function getNumberLevel(): string {
  let res = '';
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button_level');
  buttons.forEach(button => {
    if( button.classList.contains('selected')) res += button.getAttribute('data-num')});
  return answers[+res - 1] ?? '*';
}
  textarea?.addEventListener('keypress', function getAnswer(e) {
    if (e.key === 'Enter') {
      const answer = getNumberLevel();
      console.log(answer);
    }

  })
}