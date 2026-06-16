const os = require("os");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Hostname:", os.hostname());
console.log("OS Type:", os.type());
console.log("OS Release:", os.release());
console.log("Total Memory:", (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2), "GB");
console.log("Free Memory:", (os.freemem() / (1024 * 1024 * 1024)).toFixed(2), "GB");
console.log("CPU Cores:", os.cpus().length);
console.log("Home Directory:", os.homedir());
console.log("System Uptime:", (os.uptime() / 3600).toFixed(2), "Hours");

/*
o/p:
Platform: win32
Architecture: x64
Hostname: Sri_Nidhi
OS Type: Windows_NT
OS Release: 10.0.26200
Total Memory: 15.69 GB
Free Memory: 1.44 GB
CPU Cores: 12
Home Directory: C:\Users\egala
System Uptime: 33.52 Hours
*/