let {
  getFileContent,
  getFolderFiles
} = require('./file.js');

const getFlagsPath = () => './assets/flags';

const getFlagsName = () =>
  getFlags(getFlagsPath());

const getFlagContent = flag =>
  getFileContent(getFlagPath(flag));

const getFlagPath = flagPath =>
  `${getFlagsPath()}/${flagPath}`;

const getFlags = flagFolder =>
  getFolderFiles(flagFolder);

const getFormattedFlags = flags =>
  flags.map(flag => formatFlagObject(flag));

const formatFlagObject = flag => ({
  [flag.split('.')[0]]: getFlagContent(flag)
});

const formatFlagsObject = flags =>
  flags.reduce(extractFlagFromObject, {});

const extractFlagFromObject = (result, flag) => {
  result[getObjKey(flag)] = getObjValue(flag);
  return result;
};

const getObjKey = obj => Object.keys(obj)[0];

const getObjValue = obj => obj[getObjKey(obj)];

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