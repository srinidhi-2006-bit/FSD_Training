//1. readFile()
/*
const fs = require("fs");
fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

o/p:
Hi Hello Welcome To CVR
*/

//2. readFileSync()
/*
const fs = require("fs");
const data = fs.readFileSync("sample.txt", "utf8");
console.log(data);

o/p:
Hi Hello Welcome To CVR
*/

//3. writeFile()
/*
const fs = require("fs");
fs.writeFile("sample.txt", "Hello World", (err) => {
    if (err) throw err;
    console.log("Data written");
});

o/p:
Data written 
*/

//4. appendFile()
/*
const fs = require("fs");
fs.appendFile("sample.txt", "\nNew Data", (err) => {
    if (err) throw err;
    console.log("Data appended");
});

o/p:
Data appended
*/

//5. unlink()
/*
const fs = require("fs");
fs.unlink("error.txt", (err) => {
    if (err) throw err;
    console.log("error.txt File deleted");
});

o/p:
error.txt File deleted
*/

//6. rename()
/*
const fs = require("fs");
fs.rename("sample.txt", "newSample.txt", (err) => {
    if (err) throw err;
    console.log("File renamed");
});

o/p:
File renamed
*/

//7. mkdir()
/*
const fs = require("fs");
fs.mkdir("MyFolder", (err) => {
    if (err) throw err;
    console.log("Folder created");
});

o/p:
Folder created
*/

//8. rmdir()
/*
const fs = require("fs");
fs.rmdir("MyFolder", (err) => {
    if (err) throw err;
    console.log("Folder removed");
});

o/p:
Folder removed
*/

//9. readdir()
/*
const fs = require("fs");
fs.readdir(".", (err, files) => {
    if (err) throw err;
    console.log(files);
});

o/p:
[
  'events_module.js',
  'fs_module.js',
  'http_module.js',
  'newSample.txt',
  'os_module.js',
  'path_module.js',
  'postman.js'
]
*/
 
//10. stat()
/*
const fs = require("fs");
fs.stat("newSample.txt", (err, stats) => {
    if (err) throw err;
    console.log(stats);
});

o/p:
Stats {
  dev: 0,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 844424935014807,
  size: 20,
  blocks: 0,
  atimeMs: 1781578984793.5742,
  mtimeMs: 1781578984675.7437,
  ctimeMs: 1781579110666.496,
  birthtimeMs: 1781578808737.2693
}
*/

//11. access()
/*
const fs = require("fs");
fs.access("sample.txt", fs.constants.F_OK, (err) => {
    if (err)
        console.log("File does not exist");
    else
        console.log("File exists");
});

o/p:
File does not exist
*/