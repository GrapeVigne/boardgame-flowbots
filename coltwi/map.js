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
  });
};

//Pivotal event not yet played, exclude Morocco and Tunisia
const spacesNotIndependent = ['Mecheria', 'Oran', 'Tlemcen', 'Sidi Bel Abbes', 'Mostaganem', 'Saida', 'Mascara', 'Tiaret', 'Orleansville', 'Ain Sefra', 'Lagouat', 'Algiers', 'Sidi Aissa', 'Ain Oussera', 'Medea', 'Bordj Bou Arreridj', 'Biskra', 'Bougie', 'Setif', 'Barika', 'Constantine', 'Batna', 'Oum El Bouaghi', 'Philippeville', 'Negrine', 'Tebessa', 'Souk Ahras'];

//Pivotal event in effect, include Morocco and Tunisia
const spacesIndependent = ['Morocco', 'Mecheria', 'Oran', 'Tlemcen', 'Sidi Bel Abbes', 'Mostaganem', 'Saida', 'Mascara', 'Tiaret', 'Orleansville', 'Ain Sefra', 'Lagouat', 'Algiers', 'Sidi Aissa', 'Ain Oussera', 'Medea', 'Bordj Bou Arreridj', 'Biskra', 'Bougie', 'Setif', 'Barika', 'Constantine', 'Batna', 'Oum El Bouaghi', 'Philippeville', 'Negrine', 'Tebessa', 'Souk Ahras', 'Tunisia'];

let spacesAvailable = [];

const randomStartSpace = Math.floor(Math.random() * spacesAvailable.length);
console.log(random, spacesAvailable[random]);