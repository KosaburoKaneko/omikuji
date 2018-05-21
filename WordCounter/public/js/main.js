(function() {
  'use strict';
  var text = document.getElementById('text');
  var label = document.getElementById('label');
  
  var LIMIT = 30;
  var WARNING = 10;

  label.innerHTML = LIMIT;

  text.addEventListener('keyup', function() {
    var remaining = LIMIT - this.value.length;
    label.innerHTML = remaining;
    label.className = remaining <= WARNING ? 'warning' : '';
  });

})();