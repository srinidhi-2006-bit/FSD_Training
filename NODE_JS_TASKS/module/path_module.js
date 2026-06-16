const path = require("path");
const filePath = "/users/admin/documents/project/index.js";
console.log("Basename:", path.basename(filePath));
console.log("Directory Name:", path.dirname(filePath));
console.log("Extension Name:", path.extname(filePath));
console.log(
    "Join Path:",
    path.join("users", "admin", "documents", "project", "index.js")
);
console.log(
    "Resolved Path:",
    path.resolve("users", "admin", "documents", "project")
);
console.log("Parsed Path:", path.parse(filePath));
const parsedObj = {
    root: "/",
    dir: "/users/admin/documents/project",
    base: "index.js",
    ext: ".js",
    name: "index"
};
console.log("Formatted Path:", path.format(parsedObj));
console.log("Is Absolute:", path.isAbsolute(filePath));
console.log(
    "Normalized Path:",
    path.normalize("/users/admin//documents/../project/index.js")
);
console.log("Path Separator:", path.sep);

/*
o/p:
Basename: index.js
Directory Name: /users/admin/documents/project
Extension Name: .js
Join Path: users\admin\documents\project\index.js
Resolved Path: C:\Users\egala\OneDrive\Desktop\FSD_Training\NODE_JS_TASKS\module\users\admin\documents\project
Parsed Path: {
  root: '/',
  dir: '/users/admin/documents/project',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
Formatted Path: /users/admin/documents/project\index.js
Is Absolute: true
Normalized Path: \users\admin\project\index.js
Path Separator: \
*/