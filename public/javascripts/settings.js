/*------------------ DOM ELEMENTS ----------------------*/

const idealSelect = document.querySelector('.ideal-fruit-div select');
const idealFruitDiv = document.querySelector('.ideal-fruit-div');

/*------ event listenters ------*/

// Replaces options in nav form with divs
let settingSelected = parseInt(idealSelect.value);

for (var indol = 0; indol < select.length; indol++) {
  let d = document.createElement('div');
  d.className = `set-option option option-${indol}`;
  let i = document.createElement('img');
  i.src = `images/banana-0${indol}.png`;
  d.appendChild(i);
  if (settingSelected === indol) d.classList.add('option-selected');
  d.value = indol;
  d.addEventListener('click', function (e) {
    e.stopPropagation();
    for (let i = 0; i < idealSelect.length; i++) {
      if (parseInt(idealSelect[i].value) === parseInt(this.value)) {
        console.log(settingSelected, i);
        document
          .querySelector(`.ideal-fruit-div .option-${settingSelected}`)
          .classList.remove('option-selected');
        document.querySelector(`.ideal-fruit-div .option-${i}`).classList.add('option-selected');
        idealSelect.selectedIndex = i;
        settingSelected = i;
      }
    }
  });
  idealFruitDiv.appendChild(d);
}
