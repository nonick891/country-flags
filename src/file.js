let fs = require('fs');

const getFolderFiles = folderPath =>
  fs.readdirSync(folderPath);

const getFileContent = filePath =>
  fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });

const createFile = (path, content) =>
  fs.writeFileSync(path, content, { encoding: 'utf8' });

module.exports = {
  getFolderFiles,
  getFileContent,
  createFile
};