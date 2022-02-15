const os = require("os");

const info = os.userInfo();
console.log(info);

// calculating system uptime

console.log(` the uptime of system in sec ${os.uptime()}`);
