let flagsPath = '../assets/flags',
  fs = require('fs'),
  files = fs.readdirSync(flagsPath),
  content = '';

fs.readFile(`${flagsPath}/${files[0]}`, 'utf8', (err, data) => {
  if (err) throw err;
  content = data;
});

setTimeout(() => {
  console.log(content, 'from timeout function');
}, 200);