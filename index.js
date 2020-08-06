let converter = require('./src/converter');

let flagsPath = converter.getFlagsPath(),
    flags = converter.getFlags(flagsPath);

console.log(flags);