// require 'fs' node module
const fs = require('fs');

// get the filename to be converted
const getFilename = process.argv[2];

// read the playdown file and store its contents in a variable
// const playdownFile = fs.readFileSync(getFilename, 'utf8');
// console.log(playdownFile);

// make file data accessible via function
function playdownFile(playdownData) {
  fs.readFile(getFilename, 'utf8', (err, data) => {
    if (err) throw playdownData(err);
    playdownData(null, data);
  });
}

playdownFile((err, data) => {
  return data;
});

// write an sml file from the contents of the file read
// fs.writeFile('playdown.html', playdownFile, function (err) {
//   if (err) return console.log(err);
// });