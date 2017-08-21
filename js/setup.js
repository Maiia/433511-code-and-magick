'use strict';

var ARR_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var ARR_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var ARR_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var ARR_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARDS_NUM = 4;


// part #1 - arrey of wizards
function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function createWizardsObject(wizardsNum) {
  var wizards = [];

  var WIZARDS_NUM_I = wizardsNum;
  while (WIZARDS_NUM_I > 0) {
    wizards.push({
      name: ARR_NAMES[randomIndex(ARR_NAMES)] + ' ' + ARR_SURNAMES[randomIndex(ARR_SURNAMES)],
      coatColor: ARR_COAT_COLOR[randomIndex(ARR_COAT_COLOR)],
      eyesColor: ARR_EYES_COLOR[randomIndex(ARR_EYES_COLOR)]
    });
    WIZARDS_NUM_I--;
  }
  return wizards;
}

// part #2 - creating of DOM-elements
function renderWizard(wizard, template, destination) {
  var wizardItem = template.cloneNode(true);

  wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardItem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  destination.appendChild(wizardItem);
}

function init() {
  var similarListSetup = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var fragment = document.createDocumentFragment();

  var wizards = createWizardsObject(WIZARDS_NUM);

  for (var i = 0; i < WIZARDS_NUM; i++) {
    renderWizard(wizards[i], similarWizardTemplate, fragment);
  }
  similarListSetup.appendChild(fragment);
  document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
}
init();
