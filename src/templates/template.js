let getDropdownTemplate = require('./select'),
    getFlagsTemplate = require('./flags'),
    {
      createFile,
      getFileContent
    } = require('../file');

const buildTemplate = () =>
  createFile('./dist/index.html', getTemplate());

const getTemplate = () =>
  getFileContent('./assets/index.html')
    .replace(/{dropdown}/gm, getDropdownTemplate())
    .replace(/{flags}/gm, getFlagsTemplate());

module.exports = buildTemplate;