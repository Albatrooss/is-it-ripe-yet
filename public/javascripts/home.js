let selected = 0;

/*------------------ DOM ELEMENTS ----------------------*/

const menuBtn = document.getElementById('menu-btn');
const subNav = document.querySelector('nav ul');
const addFruit = document.getElementById('add-fruit');
const addFruitForm = document.getElementById('add-fruit-form');
const select = document.querySelector('nav select');
const addFruitDiv = document.querySelector('.add-fruit-div');

function handleMenu(el) {
  el.classList.toggle('showing');
}

/*------ event listenters ------*/

if (menuBtn) menuBtn.addEventListener('click', () => handleMenu(subNav));
addFruit.addEventListener('click', () => handleMenu(addFruitForm));

// Replaces options in nav form with divs
for (var indol = 0; indol < select.length; indol++) {
  let d = document.createElement('div');
  let i = document.createElement('img');
  d.className = `option option-${indol}`;
  i.src = `/images/banana-0${indol}.png`;
  d.value = indol;
  d.appendChild(i);
  d.addEventListener('click', function (e) {
    e.stopPropagation();
    let s = this.parentNode.parentNode.getElementsByTagName('select')[0];
    for (let i = 0; i < s.length; i++) {
      if (parseInt(s[i].value) === parseInt(this.value)) {
        document.querySelector(`.option-${selected}`).classList.remove('option-selected');
        document.querySelector(`.option-${i}`).classList.add('option-selected');
        s.selectedIndex = i;
        selected = i;
      }
    }
  });
  addFruitDiv.appendChild(d);
}
