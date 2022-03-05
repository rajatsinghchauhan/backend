const { writeFileSync } = require("fs");

for (var i = 0; i < 10000; i++) {
  writeFileSync("./content/bigfile.txt", ` heloo for the  ${i}th time`, {
    flag: "a",
  });
}
