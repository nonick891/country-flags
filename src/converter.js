let fs = require('fs');

const getFlagsPath = () => './assets/flags';

const getFileContent = filePath =>
  fs.readFileSync(filePath, {encoding: 'utf8', flag:'r'});

const getFiles = folderPath =>
  fs.readdirSync(folderPath);

const getFlagPath = flagPath =>
  `${flagsPath}/${flagPath}`;

const getFlags = flagFolder =>
  getFiles(flagFolder);

module.exports = {
  getFlags,
  getFlagPath,
  getFlagsPath,
  getFileContent
};