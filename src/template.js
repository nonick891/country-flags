let {
  createFile,
  getFileContent
} = require('./file');

const buildTemplate = () =>
  createFile(
    './dist/index.html',
    getFileContent('./assets/index.html')
  );

module.exports = buildTemplate;