var buttons = document.getElementsByTagName('button'),
  questions = document.getElementsByTagName('div');
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener('click', function() {
    var target = this.getAttribute('data-next');
    for (var j = 0; j < questions.length; j++) {
      var question = questions[j];
      if (question.id == target) {
        question.classList.add('show');
      }
    }
  });
}