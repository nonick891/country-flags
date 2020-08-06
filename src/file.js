let fs = require('fs');

const getFolderFiles = folderPath =>
  fs.readdirSync(folderPath);

const getFileContent = filePath =>
  fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });


module.exports = {
  getFolderFiles,
  getFileContent
};