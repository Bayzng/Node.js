console.log('hello Node');
console.log(global);

const os = require('os');
const path = require('path');



console.log(os.type());
console.log(os.version());
console.log(os.homedir());


console.log(__dirname);
console.log(__filename);


// CUSTOM MODULES CALCULATION

const math = require('./math');

console.log(path.dirname(__dirname));
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));


const add = math.add(50, 30)
const minus = math.minus(50, 30)
const division = math.division(50, 30)
const multiply = math.multiply(50, 30)

console.log(add)
console.log(minus)
console.log(division)
console.log(multiply)


const uber = require('./uber')

uber.uberReady()
const fuelStatus =uber.FuelLimit('hey, stop there! You have reach')

console.log(fuelStatus)




// bertall

console.log(path.parse(__filename));