// require 'fs' node module
const fs = require('fs');

// get the filename to be converted
let playdownFilename = process.argv[2];

// read the playdown file and store its contents in a variable
const playdownFile = fs.readFileSync(playdownFilename, 'utf8');

// write an sml file from the contents of the file read
fs.writeFile('playdown.html', playdownFile, function (err) {
  if (err) return console.log(err);
});