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
    };
    var height = document.body.scrollHeight;
    window.scroll(0 , height);
    //Get this to scroll to where you are working
  });
};

//Pivotal event in effect, include Morocco and Tunisia
const spacesIndependent = ['Tunisia', 'Morocco', 'Mecheria', 'Oran', 'Tlemcen', 'Sidi Bel Abbes', 'Mostaganem', 'Saida', 'Mascara', 'Tiaret', 'Orleansville', 'Ain Sefra', 'Laghouat', 'Algiers', 'Sidi Aissa', 'Ain Oussera', 'Medea', 'Bordj Bou Arreridj', 'Biskra', 'Bougie', 'Setif', 'Barika', 'Constantine', 'Batna', 'Oum El Bouaghi', 'Philippeville', 'Negrine', 'Tebessa', 'Souk Ahras'];

//Pivotal event not yet played, exclude Morocco and Tunisia
const spacesNotIndependent = spacesIndependent.slice(2);

document.querySelector('#pivotal-not-played').addEventListener('click', () => {
  getRandomSpaceNotIndependent();
});

function chooseRandom(spaces) {
  let len = spaces.length;
  if (len === 0) {
    spacesFinished();
  }
  else {
    while(spaces.length) {
      const stillAvailable = Math.floor(Math.random() * spaces.length);
      const chosenSpace = spaces.splice(stillAvailable, 1)[0];
      return chosenSpace;
    }}
};

//Get this to hide the selection options when the array is empty
function spacesFinished() {
  let resultFinished = `<p>There are no spaces remaining to choose from.</p><p>Click the "Close Window" button below.</p>`;
  document.querySelector('.result-finished').innerHTML = resultFinished;
  let identifier = document.getElementsByTagName('.result')
  identifier.classList.add('hide');
  return;
}

function getRandomSpaceNotIndependent() {
  let resultText = '';
  let resultButton = '';
  let resultPicture = '';
  let chosenSpace = chooseRandom(spacesNotIndependent);
  resultText = `<p>Does ${chosenSpace} qualify?</p>`
  resultButton = `<br><button type='button' class='js-button'  onclick='javascript:window.close()'>Yes - Close Window</button><button type='button' class='js-button' onclick='getRandomSpaceNotIndependent();'>No - Select Another</button>`;
  resultPicture = `<img src="images/${chosenSpace}.jpg">`
  document.querySelector('.result-text').innerHTML = resultText;
  document.querySelector('.result-button').innerHTML = resultButton;
  document.querySelector('.result-picture').innerHTML = resultPicture;
  return;
}

document.querySelector('#pivotal-played').addEventListener('click', () => {
  getRandomSpaceIndependent();
});

function getRandomSpaceIndependent() {
  let resultText = '';
  let resultButton = '';
  let resultPicture = '';
  let chosenSpace = chooseRandom(spacesIndependent);
  resultText = `<p>Does ${chosenSpace} qualify?</p>`
  resultButton = `<br><button type='button' class='js-button'  onclick='javascript:window.close()'>Yes - Close Window</button><button type='button' class='js-button' onclick='getRandomSpaceIndependent();'>No - Select Another</button>`;
  resultPicture = `<img src="images/${chosenSpace}.jpg">`
  document.querySelector('.result-text').innerHTML = resultText;
  document.querySelector('.result-button').innerHTML = resultButton;
  document.querySelector('.result-picture').innerHTML = resultPicture;
  return;
}
