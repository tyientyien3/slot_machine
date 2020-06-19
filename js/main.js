'use strict';

{
  class Panel{
    constructor(){
      const section = document.createElement('section');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();

      // タイムアウトを定義
      this.timeoutId = undefined;

      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop', 'inactive');

      this.stop.addEventListener('click', () => {
        if (this.stop.classList.contains('inactive')){
          return
        }
        this.stop.classList.add('inactive');
        // setTimeoutの逆
        clearTimeout(this.timeoutId);

        panelsLeft--;

        if (panelsLeft === 0) {
          spin.classList.remove('inactive');
          panelsLeft === 3;
          checkResult();
        }
      });

      // appendChildは親要素に子要素を追加することこの場合はsectionという親要素にthis.ingという子要素を追加した。
      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector('main');
      main.appendChild(section);
    }

    // ランダムで表示させたい画像を配列に入れる
    getRandomImage() {
     const images = [
      'img/seven.png',
      'img/bell.png',
      'img/cherry.png',
     ];

    //  getRandomImage()の結果を返す
     return images[Math.floor(Math.random() * images.length)];
    }

    // 画像をランダムに表示↑で定義
    spin() {
      this.img.src =this.getRandomImage();
      // 定義したタイムアウトIDをsettimeoutに
      // 50ミリ秒後に次の処理（this.spin）をしなさい
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 50);
    }

    isUnmatched(p1, p2) {
      // if (this.img.src !== p1.img.src && this.img.src !== p2.img.src) {
      //   return true;
      // } else {
      //   return false;
      // }
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
    }

    unmatch() {
      this.img.classList.add('unmatched');
    }

    // 再度アクティブにする
    activate() {
      this.img.classList.remove('unmatched');
      this.stop.classList.remove('inactive');
    }
  }

  function checkResult() {
    if (panels[0].isUnmatched(panels[1], panels[2])){
        panels[0].unmatch();
    }
    if (panels[1].isUnmatched(panels[0], panels[2])){
        panels[1].unmatch();
    }
    if (panels[2].isUnmatched(panels[1], panels[0])){
        panels[2].unmatch();
    }
  }

  // panelの表示
  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];

  let panelsLeft = 3;

  // spin btnをクリックしたらpanel.spin();が実行される↑
  const spin = document.getElementById('spin');
  spin.addEventListener('click', () => {
    if (spin.classList.contains('inactive')){
      return;
    }
    spin.classList.add('inactive');
    panels.forEach(panel => {
      // 再度アクティブにする↑
      panel.activate();
      panel.spin();
    });
  });
}