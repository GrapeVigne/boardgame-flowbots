let buttons = document.getElementsByTagName('button');

function showAnswer(id) {
  for ( i = 0; i < buttons.length; i++) {
      let obj = document.getElementById('Question' + i);
      if (obj != null)
          obj.className = 'hide';
  }
  let obj = document.getElementById('Question' + id);      
  if (obj != null)
      obj.className = 'show response';
};

window.onbeforeunload = function () {
  history.scrollRestoration = 'manual';
};