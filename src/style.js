let { getCountriesWithFlags } = require('./countries'),
    { getFileContent, createFile } = require('./file');

const buildStyles = () =>
  createFile('./dist/style.css', getStyles());

const getStyles = () =>
  getFlagIconStyles().concat(getFlagsStyles());

const getFlagIconStyles = () =>
  getFileContent('./assets/flag-icon.css');

const getFlagsStyles = () =>
  getBackgroundStyles(getCountriesWithFlags());

const getBackgroundStyles = countries =>
  countries.map(getFlagStyle).join('');

const getFlagStyle = country =>
  insertIntoBackground(
    country.ccode.toLowerCase(),
    country.flag
  );

const insertIntoBackground = (code, svgBase64) =>
  `.${code}, [data-chosen='${code}'] {background-image: url(data:image/svg+xml;base64,${svgBase64});} `;

module.exports = buildStyles;