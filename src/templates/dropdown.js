let countries = require('../../assets/country-codes.json');

String.prototype.inlineCode = function() {
  return this.replace(/\n/g, '').replace(/ {2}/g, '').trim()
};

const getDropDownTemplate = () =>
  buildSelectTemplate(buildCountriesTemplate());

const buildSelectTemplate = content =>
  `<div class="dropdown">${getDropDownContent(content)}</div>${getScript()}`;

const getDropDownContent = content =>
  `\n${getDropDownButtonTemplate('+1')}\n${getWrapperTemplate(content)}\n\t\t\t`;

const getDropDownButtonTemplate = text =>
 `\t\t\t\t<button data-chosen="us" class="country-code flag-icon">${text}</button>`;

const getWrapperTemplate = content =>
  `\t\t\t\t<div class="options-wrapper">\n${content}\t\t\t\t</div>`;

const buildCountriesTemplate = () =>
  countries.map(country => getCountryTemplate(country)).join('');

const getCountryTemplate = country =>
  `\t\t\t\t\t<div data-code="${getCode(country)}" data-mcode="${country.mcode}">${getNameCode(country)}</div>\n`;

const getCode = country =>
  country.ccode.toLowerCase();

const getNameCode = country =>
  `${country.name} ${country.mcode}`;

const getScript = () =>
  `<script>
    document.querySelector('.dropdown').addEventListener('click', function(e) {
      let dropDown = e.target.closest('.dropdown'),
          wrapper = dropDown.querySelector('.options-wrapper');
      if (e.target.dataset['mcode']) {
        let button = dropDown.querySelector('button');
        button.dataset.chosen = e.target.dataset.code;
        button.innerHTML = e.target.dataset.mcode;
        e.target.closest('.options-wrapper').style.display = 'none';
      }
      wrapper.style.display = (wrapper.offsetWidth > 0 && wrapper.offsetHeight > 0)
        ? 'none'
        : 'block';
    });
</script>`.inlineCode();

module.exports = getDropDownTemplate;