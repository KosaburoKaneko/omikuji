(function() {
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function() {
    var n = Math.random();
    if (n < 0.1) {
      this.textContent = '大吉'; // 10%
    } else if (n < 0.4) {
      this.textContent = '中吉'; // 30%
    } else {
      this.textContent = '凶'; // 60%
    }
  });

  btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function() {
    this.className = '';
  });
  
})();