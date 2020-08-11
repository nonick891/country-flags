let getSelectTemplate = require('./select'),
    getFlagsTemplate = require('./flags'),
    getDropDownTemplate = require('./dropdown'),
    {
      createFile,
      getFileContent
    } = require('../file');

const buildTemplate = () =>
  createFile('./dist/index.html', getTemplate());

const getTemplate = () =>
  getFileContent('./assets/index.html')
    .replace(/{dropdown}/gm, getDropDownTemplate())
    .replace(/{select}/gm, getSelectTemplate())
    .replace(/{flags}/gm, getFlagsTemplate());

module.exports = buildTemplate;