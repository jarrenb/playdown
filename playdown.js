// require 'fs' node module
const fs = require('fs');

// get the filename to be converted
let playdownFilename = process.argv[2];

// read the playdown file and store its contents in a variable
const playdownFile = fs.readFileSync(playdownFilename, 'utf8');

// THIS CODE SHOULD EVENTUALLY BE IN SCENE-HEADING.JS
// scene heading text as array values and convert to uppercase
let sceneHeadingText = playdownFile.toUpperCase().split('# ');
console.log(sceneHeadingText[1]);

// convert scene headings to uppercase (this is not currently the way i want this to be)
// let sceneHeadingSymbol = playdownFile.toUpperCase();
// console.log(sceneHeadingSymbol);


// write an sml file from the contents of the file read
// fs.writeFile('playdown.html', playdownFile, function (err) {
//   if (err) return console.log(err);
// });