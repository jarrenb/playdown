// require 'fs' node module
const fs = require('fs');

// get the filename to be converted
const getFilename = process.argv[2];

// I CAN PROBABLY DO THIS MUCH MORE EASILY, AND IT WOULD BE FINE TO DO IT THIS WAY, AS SYNCHRONOUSLY INSTEAD OF ASYNCHRONOUSLY. BUT I SUSPECT IN THE FUTURE I'LL HAVE TO KNOW HOW TO DEAL WITH STUFF ASYNCHRONOUSLY AND I WANT TO USE THIS AS AN OPPORTUNITY TO LEARN, RATHER THAN AVOID THE CONCEPT
// get playdown file data
function getPlaydownFile() {
  // if the file is larger, this doesn't happen right away
  fs.readFile(getFilename, function getFileData(err, data) {
    if (err) throw err;
    return data;
  });
}

// contains the playdown file data
function playdownFile() {

}

// write an sml file from the contents of the file read
// fs.writeFile('playdown.html', playdownFile, function (err) {
//   if (err) return console.log(err);
// });