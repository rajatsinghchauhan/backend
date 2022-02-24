const path = require("path");

console.log(path.sep);

const filepath = path.join("/content", "subfolder", "test.txt");

console.log(filepath);

console.log(path.basename(filepath));

const absolutepath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt"
);
console.log(absolutepath);
