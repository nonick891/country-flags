let countries = require('../assets/country-codes.json'),
    {
      createFile,
      getFileContent
    } = require('./file');

const buildTemplate = () =>
  createFile(
    './dist/index.html',
    getFileContent('./assets/index.html').replace('{flags}', getFlagsTemplate())
  );

const getFlagsTemplate = () =>
  createFlagsTemplate(buildFlagsTemplate());

const createFlagsTemplate = flags => {
  let middle = '',
      result = '';
  for (let index in flags) {
    if (!flags.hasOwnProperty(index)) continue;
    if (index > 0 && index % 9 === 0) {
      result += getCenterTemplate(middle);
      middle = '';
    }
    middle += flags[index];
  }
  result += getCenterTemplate(middle);
  middle = null;
  return result;
};

const getCenterTemplate = content =>
  `\t\t<div class="center">\n${content}\t\t</div>\n`;

const buildFlagsTemplate = () =>
  countries.map(country => getFlagDiv(country.ccode.toLowerCase()));

const getFlagDiv = code =>
  `\t\t\t\t<div class="flag-icon ${code}"></div>\n`;

module.exports = buildTemplate;