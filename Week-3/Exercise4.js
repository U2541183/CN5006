// Import the os module
const os = require('os');
const util = require('util');

// Displaying laptop information
console.log("Operating System: " + os.platform());
console.log("OS Release: " + os.release());
console.log("Hostname: " + os.hostname());
console.log("Total Memory: " + os.totalmem() + " bytes");
console.log("Free Memory: " + os.freemem() + " bytes");
console.log("System Uptime: " + os.uptime() + " seconds");
console.log("Temporary Directory: " + os.tmpdir());
console.log("CPU Information: " + util.inspect(os.cpus()));
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()));

// End of program message
console.log("Program ended");
