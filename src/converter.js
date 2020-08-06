let file = require('./file.js');

const getFlagsPath = () => './assets/flags';

const getFlagsName = () =>
  getFlags(getFlagsPath());

const getFlagContent = flag =>
  file.getFileContent(getFlagPath(flag));

const getFlagPath = flagPath =>
  `${getFlagsPath()}/${flagPath}`;

const getFlags = flagFolder =>
  file.getFolderFiles(flagFolder);

const getFormattedFlags = flags =>
  flags.map(flag => formatFlagObject(flag));

const formatFlagObject = flag => ({
  [flag.split('.')[0]]: getFlagContent(flag)
});

const formatFlagsObject = flags => {
  let result = {};
  for (let flag of flags) {
    let keys = Object.keys(flag);
    result[keys[0]] = flag[keys[0]];
  }
  return result;
};

/**
 *
 * @Example return object:
 * {
 *  'us': <svg string>,
 *  ...
 * }
 *
 * @return array of objects
 */
const getCountryFlagsContent = () =>
  formatFlagsObject(getFormattedFlags(getFlagsName()));

module.exports = {
  getCountryFlagsContent
};