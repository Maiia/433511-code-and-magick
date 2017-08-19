'use strict';

document.querySelector('.setup').classList.remove('hidden');

var arrNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var arrSurNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var arrCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var arrEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardsNum = 4;
var wizards = [];

var similarListSetup = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var fragment = document.createDocumentFragment();

// part #1 - arrey of wizards
function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

var wizardsNumI = wizardsNum;
while (wizardsNumI > 0) {
  wizards.push(
      {
        name: arrNames[randomIndex(arrNames)] + ' ' + arrSurNames[randomIndex(arrSurNames)],
        coatColor: arrCoatColor[randomIndex(arrCoatColor)],
        eyesColor: arrEyesColor[randomIndex(arrEyesColor)]
      }
  );
  wizardsNumI--;
}

// part #2 - creating of DOM-elements
var renderWizard = function (wizard) {
  var wizardItem = similarWizardTemplate.cloneNode(true);

  wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardItem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  fragment.appendChild(wizardItem);
};

for (var i = 0; i < wizardsNum; i++) {
  renderWizard(wizards[i]);
}

similarListSetup.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
