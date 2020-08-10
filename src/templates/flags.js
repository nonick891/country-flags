let countries = require('../../assets/country-codes.json');

const getFlagsTemplate = () =>
  createFlagsTemplate(createFlagsDivs());

const createFlagsTemplate = flags => {
  let middle = '',
      result = '';
  for (let index in flags) {
    if (!flags.hasOwnProperty(index)) continue;
    if (index > 0 && index % 9 === 0) {
      result += getCenterDiv(middle);
      middle = '';
    }
    middle += flags[index];
  }
  result += getCenterDiv(middle);
  middle = null;
  return result.trimLeft('\t\t');
};

const getCenterDiv = content =>
  `\t\t<div class="center">\n${content}\t\t</div>\n`;

const createFlagsDivs = () =>
  countries.map(country => getFlagDiv(country.ccode.toLowerCase()));

const getFlagDiv = code =>
  `\t\t\t\t<div class="flag-icon ${code}"></div>\n`;

module.exports = getFlagsTemplate;