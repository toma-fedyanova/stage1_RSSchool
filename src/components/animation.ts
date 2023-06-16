export function getAnimation():void {
  const imageBlock = document.querySelector('.game') as HTMLElement;
  imageBlock.addEventListener('mousemove', function(event) {
  Object.assign(document.documentElement, {      //используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект
    style: `
    --change-x: ${(event.clientX - window.innerWidth / 3) * 0.004}deg;
    --change-Y: ${(event.clientY - window.innerHeight / 2) * 0.002}deg;
    `
  })
})
}
