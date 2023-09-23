let buttons = document.getElementsByTagName('button');
let questions = document.getElementsByTagName('div');

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener('click', function() {
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
  });
};


const spacesIndependent = ['Tunisia', 'Morocco', 'Mecheria', 'Oran', 'Tlemcen', 'Sidi Bel Abbes', 'Mostaganem', 'Saida', 'Mascara', 'Tiaret', 'Orleansville', 'Ain Sefra', 'Laghouat', 'Algiers', 'Sidi Aissa', 'Ain Oussera', 'Medea', 'Bordj Bou Arreridj', 'Biskra', 'Bougie', 'Setif', 'Barika', 'Constantine', 'Batna', 'Oum El Bouaghi', 'Philippeville', 'Negrine', 'Tebessa', 'Souk Ahras']; //Pivotal event in effect, include Morocco and Tunisia

const spacesNotIndependent = spacesIndependent.slice(2); //Pivotal event not yet played, exclude Morocco and Tunisia

document.querySelector('#pivotal-not-played').addEventListener('click', () => {
  getRandomSpaceNotIndependent();
});

function chooseRandom(spaces) {
  let len = spaces.length;
  if (len === 0) {
    noMoreSpaces();
    spacesFinished();
  }
  else {
    while(spaces.length) {
      const stillAvailable = Math.floor(Math.random() * spaces.length);
      const chosenSpace = spaces.splice(stillAvailable, 1)[0];
      return chosenSpace;
    }}
};

function noMoreSpaces() {
  const txt = document.getElementById("hide-text");
  const but = document.getElementById("hide-button");
  const pic = document.getElementById("hide-picture");
  txt.classList.add('hide');
  but.classList.add('hide');
  pic.classList.add('hide');
};

function spacesFinished() {
  let resultFinished = `<p>There are no spaces remaining to choose from.</p><p>You can close this window, or click "Begin Again" to run through all the spaces again.</p><br><button class="js-button" type="button" onclick="location.reload();">Begin Again</button>
  `;
  document.querySelector('.result-finished').innerHTML = resultFinished;
  document.querySelector('.no-results-box').classList.add('response');
  return;
};

function getRandomSpaceNotIndependent() {
  let resultText = '';
  let resultButton = '';
  let resultPicture = '';
  let chosenSpace = chooseRandom(spacesNotIndependent);
  resultText = `<p>Does ${chosenSpace} qualify?</p><br>`
  resultButton = `<button type='button' class='js-button' onclick='javascript:window.close()'>Yes - Close Window</button><button type='button' class='js-button' onclick='getRandomSpaceNotIndependent();'>No - Select Another</button>`;
  resultPicture = `<img src="images/${chosenSpace}.jpg">`
  document.querySelector('.result-text').innerHTML = resultText;
  document.querySelector('.result-button').innerHTML = resultButton;
  document.querySelector('.result-picture').innerHTML = resultPicture;
  return;
};

document.querySelector('#pivotal-played').addEventListener('click', () => {
  getRandomSpaceIndependent();
});

function getRandomSpaceIndependent() {
  let resultText = '';
  let resultButton = '';
  let resultPicture = '';
  let chosenSpace = chooseRandom(spacesIndependent);
  resultText = `<p>Does ${chosenSpace} qualify?</p><br>`
  resultButton = `<br><button type='button' class='js-button'  onclick='javascript:window.close()'>Yes - Close Window</button><button type='button' class='js-button' onclick='getRandomSpaceIndependent();'>No - Select Another</button>`;
  resultPicture = `<img src="images/${chosenSpace}.jpg">`
  document.querySelector('.result-text').innerHTML = resultText;
  document.querySelector('.result-button').innerHTML = resultButton;
  document.querySelector('.result-picture').innerHTML = resultPicture;
  return;
};

