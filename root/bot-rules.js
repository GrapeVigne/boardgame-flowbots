/*allows buttons to find next button with new info on screen*/
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

/*cycles through buttons, images, etc, with new info replacing old*/
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

/*allows drop down menus in header nav*/
const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  });
});

// close dropdown menu when the dropdown links are clicked
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

// close dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

// close dropdown when the escape key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdownMenu();
    setAriaExpandedFalse();
  }
});