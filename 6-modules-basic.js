const { one, two, emp1 } = require("./2-names");
const data = require("./4-alternate-exp");

// when you require a particular module , you automatically invoke it also.
require("./5-function-call-module");
// console.log(names);
// console.log(names.emp1);
console.log(emp1);
console.log(two);
console.log(data.arr.at(0));
