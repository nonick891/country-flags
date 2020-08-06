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
  country: flag.split('.')[0].toLowerCase(),
  content: getFlagContent(flag)
});

/**
 *
 * Example of return:
 * [
 *  { country: 'us', content: <svg string> }
 *  ...
 * ]
 * return array of objects
 */
const getCountryFlagsContent = () =>
  getFormattedFlags(getFlagsName());

module.exports = {
  getCountryFlagsContent
};