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
      button.classList.add('clicked');
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

let allBtn = document.querySelectorAll('.btn');

document.addEventListener('click', () => {
  allBtn.forEach((butt) => {
    butt.classList.add('finished');
  });
});

function showImg(id) {
  for (i = 0; i <= 4; i++) {
      let obj = document.getElementById('picture' + i);
      if (obj != null)
          obj.className = 'hide';
  }
  let obj = document.getElementById('picture' + id);      
  if (obj != null)
      obj.className = 'show';
};

function showAnswer(id) {
  for (i = 0; i < buttons.length; i++) {

      let obj = document.getElementById('Answer' + i);
      if (obj != null)
          obj.className = 'hide';
  }
  let obj = document.getElementById('Answer' + id);      
  if (obj != null)
      obj.className = 'show response';
};

window.onbeforeunload = function () {
  history.scrollRestoration = 'manual';
};