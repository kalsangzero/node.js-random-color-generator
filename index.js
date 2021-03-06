const randomColor = require('randomcolor'); // import the script

const createColor = require('my-colors');

const customColor = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});
const colorInLines = createColor(customColor);
const output = colorInLines(`###############################
###############################
###############################
#######                 #######
#######     ${customColor}     #######
#######                 #######
###############################
###############################
###############################`);
console.log(output);
