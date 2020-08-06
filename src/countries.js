let converter = require('./converter'),
    countryJson = require('../assets/country-codes.json');

const flagsObject = converter.getCountryFlagsContent();

const getCountriesWithFlags = () =>
  countryJson.map(country => ({ ...country, ['flag']: getFlag(country.ccode) }));

const getFlag = code => convertString(flagsObject[code]);

const convertString = string =>
  isSvgString(string) ? toBase64(string) : false;

const isSvgString = string =>
  typeof string === 'string' && string !== '';

const toBase64 = string =>
  Buffer.from(string).toString('base64');

module.exports = {
  getCountriesWithFlags
};