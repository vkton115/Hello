const { Greeter } = require('./greeter');

// Default is "World"
//Author: Jim Weirich (jim@somewhere.com)
const name = process.argv[2] || "World";

const greeter = new Greeter(name);

console.log(greeter.greet());