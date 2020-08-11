let countries = require('../../assets/country-codes.json');

const getSelectTemplate = () =>
  buildSelectTemplate(buildOptionsTemplate());

const buildSelectTemplate = content =>
  `<select onchange=" this.dataset.chosen = this.value; " data-chosen="us" class="country-code flag-icon">\n${content}\t\t\t</select>`;

const buildOptionsTemplate = () =>
  countries.map(country => getOptionTemplate(country)).join('');

const getOptionTemplate = country =>
  `\t\t\t\t<option value="${country.ccode.toLowerCase()}">${country.name} ${country.mcode}</option>\n`;

module.exports = getSelectTemplate;