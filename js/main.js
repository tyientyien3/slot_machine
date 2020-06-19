'use strict';

{
  class Panel{
    constructor(){
      const section = document.createElement('section');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src = 'img/seven.png';

      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop');

      // appendChildは親要素に子要素を追加することこの場合はsectionという親要素にthis.ingという子要素を追加した。
      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector('main');
      main.appendChild(section);
    }
  }

  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];
}