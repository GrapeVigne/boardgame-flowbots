function showSetup(id) {
  for ( i = 1; i <= 5; i++) {
      let obj = document.getElementById('Setup' + i);
      if (obj != null)
          obj.className = 'hide';
  }
  let obj = document.getElementById('Setup' + id);      
  if (obj != null)
      obj.className = 'show response';

  let height = document.body.scrollHeight;
  window.scroll(0 , height);
};

function showTurn(id) {
  for ( i = 1; i <= 13; i++) {
      let obj = document.getElementById('Turn' + i);
      if (obj != null)
          obj.className = 'hide';
  }
  let obj = document.getElementById('Turn' + id);      
  if (obj != null)
      obj.className = 'show response';

      let height = document.body.scrollHeight;
      window.scroll(0 , height);
};

window.onbeforeunload = function () {
  history.scrollRestoration = 'manual';
};