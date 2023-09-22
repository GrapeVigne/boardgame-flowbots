let buttons = document.getElementsByTagName('button');
let questions = document.getElementsByTagName('div');

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener('click', function() {
    if (button.classList.contains('special-button')) {  
      let target = this.getAttribute('data-next');
      for (let j = 0; j < questions.length; j++) {
        let question = questions[j];
        if (question.id == target) {
          question.classList.add('show');
        }
      };

      let height = document.body.scrollHeight;
      window.scroll(0 , height);
    }
    else {
      let target = this.getAttribute('data-next');
      this.parentElement.classList.add('finished');
      for (let j = 0; j < questions.length; j++) {
        let question = questions[j];
        if (question.id == target) {
          question.classList.add('show');
        }
      };

      let height = document.body.scrollHeight;
      window.scroll(0 , height);
    };
  });
};

function showSetup(id) {
  for ( i = 1; i <= 5; i++) {
      let obj = document.getElementById('Setup' + i);
      if (obj != null)
          obj.className = 'hide';
  }
  let obj = document.getElementById('Setup' + id);      
  if (obj != null)
      obj.className = 'show response';
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
};

window.onbeforeunload = function () {
  history.scrollRestoration = 'manual';
};